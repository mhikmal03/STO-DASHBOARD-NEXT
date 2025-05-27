import type { Metadata } from "next"
import { IssuerDashboard } from "@/components/issuer/dashboard"

export const metadata: Metadata = {
  title: "Issuer Dashboard | Green Bond STO Platform",
  description: "Dashboard for Green Bond Issuers",
}

export default function IssuerDashboardPage() {
  return <IssuerDashboard />
}
