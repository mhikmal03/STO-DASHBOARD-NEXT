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
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Upload } from "lucide-react"

export function VerifierDashboard() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmitReport = (project: any) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const assignedProjects = [
    {
      id: 1,
      name: "California Solar Farm",
      bondTitle: "Solar Farm Initiative",
      issuer: "EcoEnergy Corp",
      projectType: "Renewable",
      status: "Pending",
    },
    {
      id: 2,
      name: "Oregon Wind Farm",
      bondTitle: "Wind Farm Project",
      issuer: "GreenPower Inc",
      projectType: "Renewable",
      status: "Pending",
    },
    {
      id: 3,
      name: "Colorado River Treatment",
      bondTitle: "Water Treatment Project",
      issuer: "AquaPure Inc",
      projectType: "Water",
      status: "Pending",
    },
    {
      id: 4,
      name: "Amazon Reforestation",
      bondTitle: "Reforestation Bond",
      issuer: "GreenFuture Ltd",
      projectType: "Carbon",
      status: "Verified",
    },
    {
      id: 5,
      name: "Pacific Ocean Cleanup",
      bondTitle: "Ocean Cleanup Initiative",
      issuer: "BluePlanet Corp",
      projectType: "Water",
      status: "Verified",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Verifier Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Projects Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Time per Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5 days</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verification Accuracy Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projects Assigned to Me</CardTitle>
          <CardDescription>Review and verify green bond projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Bond Title</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Project Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignedProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.bondTitle}</TableCell>
                  <TableCell>{project.issuer}</TableCell>
                  <TableCell>{project.projectType}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        project.status === "Pending"
                          ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                          : project.status === "Verified"
                            ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                            : "bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSubmitReport(project)}
                      disabled={project.status !== "Pending"}
                    >
                      Submit Report
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
            <DialogTitle>Submit Verification Report</DialogTitle>
            <DialogDescription>Enter verification details for this project</DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project:</span>
                  <span className="font-medium">{selectedProject.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bond:</span>
                  <span>{selectedProject.bondTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Issuer:</span>
                  <span>{selectedProject.issuer}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reported-value">Reported Value from IoT</Label>
                <Input id="reported-value" value="4,850 tons CO2 reduction" readOnly className="bg-muted" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="verified-value">Verified Value</Label>
                <Input id="verified-value" placeholder="Enter verified value" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="verification-notes">Notes</Label>
                <Textarea id="verification-notes" placeholder="Add verification notes" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="verification-pdf">Upload Verification PDF</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="verification-pdf-upload"
                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-6 h-6 mb-2 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Upload verification report (PDF)</p>
                    </div>
                    <Input id="verification-pdf-upload" type="file" className="hidden" accept=".pdf" />
                  </label>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsDialogOpen(false)}>
              <CheckCircle className="mr-2 h-4 w-4" />
              Submit Report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle>Verification Log</CardTitle>
          <CardDescription>History of your verification activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-05-15 14:32</TableCell>
                <TableCell>Amazon Reforestation</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Verified
                  </Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">Verified carbon capture metrics match reported data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-28 09:15</TableCell>
                <TableCell>Pacific Ocean Cleanup</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Verified
                  </Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  Water quality improvements confirmed by on-site testing
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-12 11:45</TableCell>
                <TableCell>Texas Wind Farm</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Verified
                  </Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">Energy output matches projections</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
