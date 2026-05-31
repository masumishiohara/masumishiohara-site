import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LoginBody = {
  email?: string;
  password?: string;
  totp?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as LoginBody;
  const configuredEmail = process.env.ADMIN_EMAIL;
  const configuredPassword = process.env.ADMIN_PASSWORD;
  const configuredTotpSecret = process.env.ADMIN_TOTP_SECRET;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET ?? configuredTotpSecret ?? configuredPassword;

  if (!configuredEmail || !configuredPassword || !configuredTotpSecret || !sessionSecret) {
    return NextResponse.json(
      { error: "Admin login is not configured. Set ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_TOTP_SECRET, and ADMIN_SESSION_SECRET in Vercel." },
      { status: 503 },
    );
  }

  const emailOk = safeEqual(String(body.email ?? "").trim().toLowerCase(), configuredEmail.trim().toLowerCase());
  const passwordOk = safeEqual(String(body.password ?? ""), configuredPassword);
  const totpOk = verifyTotp(String(body.totp ?? ""), configuredTotpSecret);

  if (!emailOk || !passwordOk || !totpOk) {
    return NextResponse.json({ error: "Email, password, or Google Authenticator code is incorrect." }, { status: 401 });
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const payload = `${configuredEmail}:${issuedAt}`;
  const signature = createHmac("sha256", sessionSecret).update(payload).digest("base64url");
  const token = Buffer.from(`${payload}:${signature}`).toString("base64url");

  const response = NextResponse.json({ ok: true });
  response.cookies.set("masumi_admin_session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/admin",
    maxAge: 60 * 60 * 8,
  });
  return response;
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
}

function verifyTotp(input: string, secret: string) {
  if (!/^\d{6}$/.test(input)) return false;
  const key = decodeBase32(secret);
  const step = Math.floor(Date.now() / 1000 / 30);
  for (const drift of [-1, 0, 1]) {
    if (generateTotp(key, step + drift) === input) return true;
  }
  return false;
}

function generateTotp(key: Buffer, counter: number) {
  const buffer = Buffer.alloc(8);
  buffer.writeBigUInt64BE(BigInt(counter));
  const hmac = createHmac("sha1", key).update(buffer).digest();
  const offset = hmac[hmac.length - 1] & 0xf;
  const code = ((hmac[offset] & 0x7f) << 24) | ((hmac[offset + 1] & 0xff) << 16) | ((hmac[offset + 2] & 0xff) << 8) | (hmac[offset + 3] & 0xff);
  return String(code % 1_000_000).padStart(6, "0");
}

function decodeBase32(value: string) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const clean = value.toUpperCase().replace(/=+$/g, "").replace(/\s+/g, "");
  let bits = "";
  for (const character of clean) {
    const index = alphabet.indexOf(character);
    if (index === -1) continue;
    bits += index.toString(2).padStart(5, "0");
  }
  const bytes: number[] = [];
  for (let index = 0; index + 8 <= bits.length; index += 8) {
    bytes.push(parseInt(bits.slice(index, index + 8), 2));
  }
  return Buffer.from(bytes);
}
