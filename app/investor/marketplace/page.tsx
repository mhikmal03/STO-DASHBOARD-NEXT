import type { Metadata } from "next"
import { InvestorMarketplace } from "@/components/investor/marketplace"

export const metadata: Metadata = {
  title: "Marketplace | Green Bond STO Platform",
  description: "Browse available green bonds for purchase",
}

export default function InvestorMarketplacePage() {
  return <InvestorMarketplace />
}
