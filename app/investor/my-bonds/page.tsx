import type { Metadata } from "next"
import { InvestorBonds } from "@/components/investor/my-bonds"

export const metadata: Metadata = {
  title: "My Bonds | Green Bond STO Platform",
  description: "View your green bond holdings",
}

export default function InvestorBondsPage() {
  return <InvestorBonds />
}
