"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Leaf, Wallet } from "lucide-react"

export function InvestorMarketplace() {
  const [selectedBond, setSelectedBond] = useState<any | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleBuy = (bond: any) => {
    setSelectedBond(bond)
    setIsDialogOpen(true)
  }

  const availableBonds = [
    {
      id: 1,
      title: "Solar Farm Initiative",
      issuer: "EcoEnergy Corp",
      yield: "5.2%",
      tenor: "2 years",
      minInvestment: "$1,000",
      status: "Available",
    },
    {
      id: 2,
      title: "Wind Farm Project",
      issuer: "GreenPower Inc",
      yield: "5.5%",
      tenor: "1 year",
      minInvestment: "$500",
      status: "Available",
    },
    {
      id: 3,
      title: "Hydroelectric Dam",
      issuer: "WaterWorks Ltd",
      yield: "6.0%",
      tenor: "2 years",
      minInvestment: "$2,000",
      status: "Available",
    },
    {
      id: 4,
      title: "Reforestation Project",
      issuer: "GreenFuture Ltd",
      yield: "4.5%",
      tenor: "6 months",
      minInvestment: "$1,500",
      status: "Available",
    },
    {
      id: 5,
      title: "Ocean Cleanup Initiative",
      issuer: "BluePlanet Corp",
      yield: "5.0%",
      tenor: "1 year",
      minInvestment: "$1,000",
      status: "Sold Out",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
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
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Green Bonds</CardTitle>
          <CardDescription>Browse and purchase green bonds from verified issuers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bond Title</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Yield %</TableHead>
                <TableHead>Tenor</TableHead>
                <TableHead>Min Investment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableBonds.map((bond) => (
                <TableRow key={bond.id}>
                  <TableCell className="font-medium">{bond.title}</TableCell>
                  <TableCell>{bond.issuer}</TableCell>
                  <TableCell>{bond.yield}</TableCell>
                  <TableCell>{bond.tenor}</TableCell>
                  <TableCell>{bond.minInvestment}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        bond.status === "Available"
                          ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                      }
                    >
                      {bond.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBuy(bond)}
                      disabled={bond.status === "Sold Out"}
                    >
                      Buy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Purchase Bond</DialogTitle>
            <DialogDescription>Enter the amount you want to invest in this bond</DialogDescription>
          </DialogHeader>

          {selectedBond && (
            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bond:</span>
                  <span className="font-medium">{selectedBond.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Issuer:</span>
                  <span>{selectedBond.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Yield:</span>
                  <span>{selectedBond.yield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tenor:</span>
                  <span>{selectedBond.tenor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Investment:</span>
                  <span>{selectedBond.minInvestment}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment-amount">Investment Amount (USDC)</Label>
                <Input id="investment-amount" type="number" min="0" placeholder="Enter amount" />
              </div>

              <div className="flex items-center justify-between bg-muted p-3 rounded-lg">
                <div className="flex items-center">
                  <Wallet className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Wallet Balance:</span>
                </div>
                <span className="font-medium">25,000 USDC</span>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsDialogOpen(false)}>Confirm Purchase</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
