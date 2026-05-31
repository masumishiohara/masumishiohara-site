"use client";

import { useMemo, useState, type FormEvent } from "react";
import { siteContent } from "../cms-content";
import styles from "./admin.module.css";

type LoginState = "idle" | "loading" | "authenticated" | "error";

type AdminDraft = {
  homeTitle: string;
  homeLead: string;
  featuredSeriesSlug: string;
  exhibitions: string;
  awards: string;
};

const STORAGE_KEY = "masumi-admin-draft-v1";

function getInitialDraft(): AdminDraft {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as AdminDraft;
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }
  return {
    homeTitle: siteContent.home.heroTitle,
    homeLead: siteContent.home.heroLead,
    featuredSeriesSlug: "black-ground-botanical-works",
    exhibitions: JSON.stringify(siteContent.exhibitions, null, 2),
    awards: JSON.stringify(siteContent.awards, null, 2),
  };
}

export default function AdminConsole() {
  const [email, setEmail] = useState("contact@masumishiohara.com");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState("");
  const [loginState, setLoginState] = useState<LoginState>("idle");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState<AdminDraft>(() => getInitialDraft());

  const exportedJson = useMemo(() => JSON.stringify({
    home: {
      heroTitle: draft.homeTitle,
      heroLead: draft.homeLead,
      featuredSeriesSlug: draft.featuredSeriesSlug,
    },
    exhibitions: safeJson(draft.exhibitions),
    awards: safeJson(draft.awards),
  }, null, 2), [draft]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginState("loading");
    setMessage("");
    const response = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, totp }),
    });
    if (response.ok) {
      setLoginState("authenticated");
      setMessage("Administrator session ready. Draft editing is available in this browser.");
      return;
    }
    const body = await response.json().catch(() => ({}));
    setLoginState("error");
    setMessage(body?.error || "Login failed. Set ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_TOTP_SECRET in Vercel for production login.");
  }

  function saveDraft() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setMessage("Draft saved in this browser. Use Export JSON for production content migration.");
  }

  async function copyJson() {
    await navigator.clipboard.writeText(exportedJson);
    setMessage("Draft JSON copied. Production saving requires the database/storage phase.");
  }

  return (
    <main className={styles.adminPage}>
      <section className={styles.loginPanel} aria-labelledby="admin-title">
        <p className={styles.eyebrow}>ADMINISTRATION</p>
        <h1 id="admin-title">Content control room.</h1>
        <p>
          This page prepares the management workflow for hero work, titles, captions, statements,
          exhibitions, awards, and external links. Production-wide saving requires the database and
          storage layer; the visual editor and protected login flow are staged here first.
        </p>

        {loginState !== "authenticated" ? (
          <form className={styles.loginForm} onSubmit={login}>
            <label>
              Email
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="username" />
            </label>
            <label>
              Password
              <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoComplete="current-password" />
            </label>
            <label>
              Google Authenticator code
              <input value={totp} onChange={(event) => setTotp(event.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" placeholder="6 digits" />
            </label>
            <button type="submit" disabled={loginState === "loading"}>
              {loginState === "loading" ? "Checking" : "Log in"}
            </button>
          </form>
        ) : null}

        {message ? <p className={styles.message}>{message}</p> : null}
      </section>

      {loginState === "authenticated" ? (
        <section className={styles.editorGrid} aria-label="Content editor">
          <article className={styles.editorCard}>
            <span>01</span>
            <h2>Top page</h2>
            <label>
              Hero title
              <textarea value={draft.homeTitle} onChange={(event) => setDraft({ ...draft, homeTitle: event.target.value })} rows={3} />
            </label>
            <label>
              Hero statement
              <textarea value={draft.homeLead} onChange={(event) => setDraft({ ...draft, homeLead: event.target.value })} rows={6} />
            </label>
            <label>
              Featured series slug
              <input value={draft.featuredSeriesSlug} onChange={(event) => setDraft({ ...draft, featuredSeriesSlug: event.target.value })} />
            </label>
            <p>The framed presentation, double mat, V-groove, lighting, and nameplate stay applied when this work is changed.</p>
          </article>

          <article className={styles.editorCard}>
            <span>02</span>
            <h2>Exhibitions</h2>
            <p>Add year, title, venue, location, summary, and installation image path.</p>
            <textarea value={draft.exhibitions} onChange={(event) => setDraft({ ...draft, exhibitions: event.target.value })} rows={14} />
          </article>

          <article className={styles.editorCard}>
            <span>03</span>
            <h2>Awards</h2>
            <p>Add year, title, organization, summary, and external source URL.</p>
            <textarea value={draft.awards} onChange={(event) => setDraft({ ...draft, awards: event.target.value })} rows={14} />
          </article>

          <article className={styles.editorCard}>
            <span>04</span>
            <h2>Export</h2>
            <p>This is the safe interim method. The next backend phase will replace this export step with direct database saving.</p>
            <div className={styles.buttonRow}>
              <button type="button" onClick={saveDraft}>Save browser draft</button>
              <button type="button" onClick={copyJson}>Copy JSON</button>
            </div>
            <pre>{exportedJson}</pre>
          </article>
        </section>
      ) : null}
    </main>
  );
}

function safeJson(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return { error: "Invalid JSON", raw: value };
  }
}
