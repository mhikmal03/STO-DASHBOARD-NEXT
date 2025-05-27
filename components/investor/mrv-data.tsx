"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BarChart, LineChart, Download, FileText, TrendingUp, CheckCircle2, FileCheck } from "lucide-react"

export function MRVData() {
  const [selectedVerification, setSelectedVerification] = useState<any | null>(null)

  const mrvData = [
    {
      id: 1,
      bondTitle: "Solar Farm Initiative",
      projectName: "California Solar Farm",
      verificationDate: "May 15, 2023",
      reportedValue: "4,850 tons CO2 reduction",
      verifiedValue: "4,780 tons CO2 reduction",
      accuracy: "98.6%",
      status: "Verified",
      verifier: "EcoAudit Inc.",
      pdfUrl: "#",
    },
    {
      id: 2,
      bondTitle: "Wind Farm Project",
      projectName: "Oregon Wind Farm",
      verificationDate: "Apr 28, 2023",
      reportedValue: "12,500 MWh generated",
      verifiedValue: "12,350 MWh generated",
      accuracy: "98.8%",
      status: "Verified",
      verifier: "GreenVerify Ltd.",
      pdfUrl: "#",
    },
    {
      id: 3,
      bondTitle: "Hydroelectric Dam",
      projectName: "Colorado River Dam",
      verificationDate: "Jun 10, 2023",
      reportedValue: "8,200 MWh generated",
      verifiedValue: "8,050 MWh generated",
      accuracy: "98.2%",
      status: "Verified",
      verifier: "WaterAudit Co.",
      pdfUrl: "#",
    },
  ]

  const performanceMetrics = [
    {
      id: 1,
      bondTitle: "Solar Farm Initiative",
      metric: "Energy Output",
      target: "5,000 MWh/quarter",
      q1: "4,850 MWh",
      q2: "5,120 MWh",
      q3: "5,240 MWh",
      q4: "4,980 MWh",
      status: "On Target",
    },
    {
      id: 2,
      bondTitle: "Wind Farm Project",
      metric: "CO2 Reduction",
      target: "12,000 tons/quarter",
      q1: "11,500 tons",
      q2: "12,350 tons",
      q3: "12,800 tons",
      q4: "12,600 tons",
      status: "Exceeding",
    },
    {
      id: 3,
      bondTitle: "Hydroelectric Dam",
      metric: "Water Efficiency",
      target: "85%",
      q1: "82%",
      q2: "84%",
      q3: "86%",
      q4: "87%",
      status: "Improving",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>MRV Data & Impact Metrics</CardTitle>
        <CardDescription>Measurement, Reporting, and Verification data for your green bond investments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="verification">
          <TabsList className="mb-4">
            <TabsTrigger value="verification">
              <FileCheck className="mr-2 h-4 w-4" />
              Verification Reports
            </TabsTrigger>
            <TabsTrigger value="performance">
              <TrendingUp className="mr-2 h-4 w-4" />
              Performance Metrics
            </TabsTrigger>
            <TabsTrigger value="charts">
              <BarChart className="mr-2 h-4 w-4" />
              Impact Charts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="verification">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bond</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Verification Date</TableHead>
                  <TableHead>Reported Value</TableHead>
                  <TableHead>Verified Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Report</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mrvData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.bondTitle}</TableCell>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell>{item.verificationDate}</TableCell>
                    <TableCell>{item.reportedValue}</TableCell>
                    <TableCell>{item.verifiedValue}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedVerification(item)}>
                            <FileText className="mr-2 h-4 w-4" />
                            View Report
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Verification Report</DialogTitle>
                            <DialogDescription>Detailed verification report for {item.projectName}</DialogDescription>
                          </DialogHeader>

                          <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="font-semibold mb-2">Project Information</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Bond:</span>
                                    <span>{item.bondTitle}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Project:</span>
                                    <span>{item.projectName}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Verification Date:</span>
                                    <span>{item.verificationDate}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Verifier:</span>
                                    <span>{item.verifier}</span>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="font-semibold mb-2">Verification Results</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Reported Value:</span>
                                    <span>{item.reportedValue}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Verified Value:</span>
                                    <span>{item.verifiedValue}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Accuracy:</span>
                                    <span>{item.accuracy}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status:</span>
                                    <Badge
                                      variant="outline"
                                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                    >
                                      {item.status}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-2">Verification Methodology</h3>
                              <p className="text-sm">
                                This verification was conducted using ISO 14064-3 standards for greenhouse gas
                                verification. The process included on-site inspection, data collection from IoT devices,
                                and comparison with reported values. The verification team conducted interviews with
                                project staff and reviewed operational records to ensure accuracy.
                              </p>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-2">Findings</h3>
                              <p className="text-sm">
                                The project is performing in line with expectations. Minor discrepancies between
                                reported and verified values are within acceptable margins of error. The project
                                continues to deliver the environmental benefits outlined in the original bond proposal.
                              </p>
                            </div>

                            <div>
                              <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Download Full Report (PDF)
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="performance">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bond</TableHead>
                  <TableHead>Metric</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Q1 2023</TableHead>
                  <TableHead>Q2 2023</TableHead>
                  <TableHead>Q3 2023</TableHead>
                  <TableHead>Q4 2023</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceMetrics.map((metric) => (
                  <TableRow key={metric.id}>
                    <TableCell className="font-medium">{metric.bondTitle}</TableCell>
                    <TableCell>{metric.metric}</TableCell>
                    <TableCell>{metric.target}</TableCell>
                    <TableCell>{metric.q1}</TableCell>
                    <TableCell>{metric.q2}</TableCell>
                    <TableCell>{metric.q3}</TableCell>
                    <TableCell>{metric.q4}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          metric.status === "Exceeding"
                            ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                            : metric.status === "On Target"
                              ? "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                              : "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                        }
                      >
                        {metric.status === "Exceeding" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                        {metric.status === "On Target" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                        {metric.status === "Improving" && <TrendingUp className="mr-1 h-3 w-3" />}
                        {metric.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="charts">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">CO2 Reduction by Project (Tons)</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full flex items-center justify-center bg-muted/20 rounded-md">
                    <BarChart className="h-16 w-16 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Chart visualization would appear here</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Energy Generation Trend (MWh)</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full flex items-center justify-center bg-muted/20 rounded-md">
                    <LineChart className="h-16 w-16 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Chart visualization would appear here</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
