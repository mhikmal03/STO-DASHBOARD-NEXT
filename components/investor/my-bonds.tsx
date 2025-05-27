"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"
import { MRVData } from "@/components/investor/mrv-data"

export function InvestorBonds() {
  const bondHoldings = [
    {
      id: 1,
      title: "Solar Farm Initiative",
      amountHeld: "$5,000",
      accruedYield: "$65",
      maturityDate: "Jun 15, 2025",
      yieldAvailable: true,
    },
    {
      id: 2,
      title: "Wind Farm Project",
      amountHeld: "$3,500",
      accruedYield: "$48",
      maturityDate: "Sep 30, 2024",
      yieldAvailable: true,
    },
    {
      id: 3,
      title: "Hydroelectric Dam",
      amountHeld: "$7,000",
      accruedYield: "$105",
      maturityDate: "Mar 22, 2026",
      yieldAvailable: false,
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Bond Holdings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,500</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Yield Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$875</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Bonds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Bond Holdings</CardTitle>
          <CardDescription>View and manage your green bond investments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bond Title</TableHead>
                <TableHead>Amount Held</TableHead>
                <TableHead>Accrued Yield (USDC)</TableHead>
                <TableHead>Maturity Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bondHoldings.map((bond) => (
                <TableRow key={bond.id}>
                  <TableCell className="font-medium">{bond.title}</TableCell>
                  <TableCell>{bond.amountHeld}</TableCell>
                  <TableCell>{bond.accruedYield}</TableCell>
                  <TableCell>{bond.maturityDate}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" disabled={!bond.yieldAvailable}>
                      {bond.yieldAvailable ? "Claim Yield" : "No Yield Available"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent bond-related transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Bond</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>May 15, 2023</TableCell>
                <TableCell>Solar Farm Initiative</TableCell>
                <TableCell>Yield</TableCell>
                <TableCell>$65</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Apr 28, 2023</TableCell>
                <TableCell>Wind Farm Project</TableCell>
                <TableCell>Buy</TableCell>
                <TableCell>$3,500</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Apr 15, 2023</TableCell>
                <TableCell>Solar Farm Initiative</TableCell>
                <TableCell>Yield</TableCell>
                <TableCell>$65</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mar 12, 2023</TableCell>
                <TableCell>Hydroelectric Dam</TableCell>
                <TableCell>Buy</TableCell>
                <TableCell>$7,000</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feb 28, 2023</TableCell>
                <TableCell>Solar Farm Initiative</TableCell>
                <TableCell>Buy</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <MRVData />
    </div>
  )
}
