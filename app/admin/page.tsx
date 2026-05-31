import type { Metadata } from "next";
import AdminConsole from "./AdminConsole";

export const metadata: Metadata = {
  title: "Administration | Masumi Shiohara",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminConsole />;
}
