import type { Metadata } from "next"
import { SubmitProposalForm } from "@/components/issuer/submit-proposal-form"

export const metadata: Metadata = {
  title: "Submit Green Bond Proposal | Green Bond STO Platform",
  description: "Submit a new green bond proposal",
}

export default function SubmitProposalPage() {
  return <SubmitProposalForm />
}
