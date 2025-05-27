"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

export function DepositYieldForm() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    router.push("/issuer/dashboard")
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center">
        <Button variant="outline" size="icon" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Deposit Yield</h1>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Deposit Yield Payment</CardTitle>
          <CardDescription>Make a yield payment for your active green bonds</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="bond">Choose Bond</Label>
              <Select required>
                <SelectTrigger id="bond">
                  <SelectValue placeholder="Select bond" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solar">Solar Farm Initiative</SelectItem>
                  <SelectItem value="wind">Wind Farm Project</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USDC)</Label>
              <Input id="amount" type="number" min="0" placeholder="Enter amount" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="period">Period Covered</Label>
              <Select required>
                <SelectTrigger id="period">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="q1-2023">Q1 2023</SelectItem>
                  <SelectItem value="q2-2023">Q2 2023</SelectItem>
                  <SelectItem value="q3-2023">Q3 2023</SelectItem>
                  <SelectItem value="q4-2023">Q4 2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Deposit Yield</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
