import type { Metadata } from "next"
import { DepositYieldForm } from "@/components/issuer/deposit-yield-form"

export const metadata: Metadata = {
  title: "Deposit Yield | Green Bond STO Platform",
  description: "Deposit yield for your green bonds",
}

export default function DepositYieldPage() {
  return <DepositYieldForm />
}
