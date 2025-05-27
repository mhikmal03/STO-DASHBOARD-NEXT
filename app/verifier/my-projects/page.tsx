import type { Metadata } from "next"
import { VerifierDashboard } from "@/components/verifier/dashboard"

export const metadata: Metadata = {
  title: "My Projects | Green Bond STO Platform",
  description: "View and verify assigned projects",
}

export default function VerifierDashboardPage() {
  return <VerifierDashboard />
}
