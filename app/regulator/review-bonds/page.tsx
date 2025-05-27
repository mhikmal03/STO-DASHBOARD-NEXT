import type { Metadata } from "next"
import { RegulatorDashboard } from "@/components/regulator/dashboard"

export const metadata: Metadata = {
  title: "Review Bonds | Green Bond STO Platform",
  description: "Review pending green bond proposals",
}

export default function RegulatorDashboardPage() {
  return <RegulatorDashboard />
}
