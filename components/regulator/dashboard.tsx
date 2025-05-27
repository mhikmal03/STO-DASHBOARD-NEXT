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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Eye, Download, CheckCircle, XCircle } from "lucide-react"

export function RegulatorDashboard() {
  const [selectedBond, setSelectedBond] = useState<any | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleViewDetails = (bond: any) => {
    setSelectedBond(bond)
    setIsDialogOpen(true)
  }

  const pendingBonds = [
    {
      id: 1,
      issuer: "EcoEnergy Corp",
      title: "Solar Farm Initiative",
      yield: "5.2%",
      tenor: "2 years",
      projectType: "Renewable",
      status: "Pending",
    },
    {
      id: 2,
      issuer: "AquaPure Inc",
      title: "Water Treatment Project",
      yield: "4.8%",
      tenor: "1 year",
      projectType: "Water",
      status: "Pending",
    },
    {
      id: 3,
      issuer: "GreenFuture Ltd",
      title: "Reforestation Bond",
      yield: "4.5%",
      tenor: "2 years",
      projectType: "Carbon",
      status: "Pending",
    },
    {
      id: 4,
      issuer: "SustainTech",
      title: "Waste Management Initiative",
      yield: "5.0%",
      tenor: "6 months",
      projectType: "Renewable",
      status: "Pending",
    },
    {
      id: 5,
      issuer: "CleanAir Solutions",
      title: "Urban Air Quality Project",
      yield: "5.5%",
      tenor: "1 year",
      projectType: "Carbon",
      status: "Pending",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Regulator Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Reviewed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Time to Approve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3 days</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Green Bond Proposals</CardTitle>
          <CardDescription>Review and approve or reject green bond proposals</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Issuer Name</TableHead>
                <TableHead>Bond Title</TableHead>
                <TableHead>Yield Rate</TableHead>
                <TableHead>Tenor</TableHead>
                <TableHead>Project Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingBonds.map((bond) => (
                <TableRow key={bond.id}>
                  <TableCell className="font-medium">{bond.issuer}</TableCell>
                  <TableCell>{bond.title}</TableCell>
                  <TableCell>{bond.yield}</TableCell>
                  <TableCell>{bond.tenor}</TableCell>
                  <TableCell>{bond.projectType}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                    >
                      {bond.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => handleViewDetails(bond)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Bond Proposal Details</DialogTitle>
            <DialogDescription>Review the complete details of this bond proposal</DialogDescription>
          </DialogHeader>

          {selectedBond && (
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Bond Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issuer:</span>
                      <span>{selectedBond.issuer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Title:</span>
                      <span>{selectedBond.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Yield Rate:</span>
                      <span>{selectedBond.yield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tenor:</span>
                      <span>{selectedBond.tenor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project Type:</span>
                      <span>{selectedBond.projectType}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Project Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>California, USA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Impact Metrics:</span>
                      <span>CO2 reduction: 5000 tons/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Funding:</span>
                      <span>$2,500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span>24 months</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Project Description</h3>
                <p className="text-sm">
                  This project aims to develop a 5MW solar farm in Southern California, providing clean energy to
                  approximately 1,500 homes. The project will utilize the latest photovoltaic technology and includes a
                  comprehensive maintenance plan for the 25-year lifespan of the installation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Whitepaper</h3>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Whitepaper
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="remarks">Remarks</Label>
                <Textarea id="remarks" placeholder="Add your remarks or reasons for approval/rejection" />
              </div>
            </div>
          )}

          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="destructive" onClick={() => setIsDialogOpen(false)}>
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </Button>
            <Button onClick={() => setIsDialogOpen(false)}>
              <CheckCircle className="mr-2 h-4 w-4" />
              Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
