"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  FileText,
  Home,
  ListChecks,
  LogOut,
  Settings,
  ShoppingCart,
  Wallet,
  FileCheck,
  History,
  Leaf,
  DollarSign,
  ClipboardList,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AppSidebar() {
  const pathname = usePathname()
  const [currentRole, setCurrentRole] = useState("issuer")

  useEffect(() => {
    // Determine initial role based on URL path
    if (pathname.startsWith("/issuer")) {
      setCurrentRole("issuer")
    } else if (pathname.startsWith("/regulator")) {
      setCurrentRole("regulator")
    } else if (pathname.startsWith("/investor")) {
      setCurrentRole("investor")
    } else if (pathname.startsWith("/verifier")) {
      setCurrentRole("verifier")
    }
  }, [pathname])

  const handleRoleChange = (value: string) => {
    setCurrentRole(value)
    switch (value) {
      case "issuer":
        window.location.href = "/issuer/dashboard"
        break
      case "regulator":
        window.location.href = "/regulator/review-bonds"
        break
      case "investor":
        window.location.href = "/investor/marketplace"
        break
      case "verifier":
        window.location.href = "/verifier/my-projects"
        break
      default:
        window.location.href = "/"
    }
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <div className="font-semibold text-lg">Green Bond STO</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Role selector */}
        <div className="px-4 pb-2">
          <Select onValueChange={handleRoleChange} value={currentRole}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="issuer">Issuer</SelectItem>
              <SelectItem value="regulator">Regulator</SelectItem>
              <SelectItem value="investor">Investor</SelectItem>
              <SelectItem value="verifier">Verifier</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <SidebarSeparator />

        {/* Issuer Menu */}
        {currentRole === "issuer" && (
          <SidebarGroup>
            <SidebarGroupLabel>Issuer</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/issuer/dashboard"}>
                    <Link href="/issuer/dashboard">
                      <Home />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/issuer/submit-proposal"}>
                    <Link href="/issuer/submit-proposal">
                      <FileText />
                      <span>Submit Proposal</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/issuer/deposit-yield"}>
                    <Link href="/issuer/deposit-yield">
                      <DollarSign />
                      <span>Deposit Yield</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/issuer/activity-logs"}>
                    <Link href="/issuer/activity-logs">
                      <ClipboardList />
                      <span>Activity Logs</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Regulator Menu */}
        {currentRole === "regulator" && (
          <SidebarGroup>
            <SidebarGroupLabel>Regulator</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/regulator/review-bonds"}>
                    <Link href="/regulator/review-bonds">
                      <ListChecks />
                      <span>Review Bonds</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/regulator/approved-list"}>
                    <Link href="/regulator/approved-list">
                      <FileCheck />
                      <span>Approved List</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/regulator/logs"}>
                    <Link href="/regulator/logs">
                      <History />
                      <span>Logs</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Investor Menu */}
        {currentRole === "investor" && (
          <SidebarGroup>
            <SidebarGroupLabel>Investor</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/investor/marketplace"}>
                    <Link href="/investor/marketplace">
                      <ShoppingCart />
                      <span>Marketplace</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/investor/my-bonds"}>
                    <Link href="/investor/my-bonds">
                      <FileText />
                      <span>My Bonds</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/investor/history"}>
                    <Link href="/investor/history">
                      <History />
                      <span>History</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/investor/wallet-info"}>
                    <Link href="/investor/wallet-info">
                      <Wallet />
                      <span>Wallet Info</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Verifier Menu */}
        {currentRole === "verifier" && (
          <SidebarGroup>
            <SidebarGroupLabel>Verifier</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/verifier/my-projects"}>
                    <Link href="/verifier/my-projects">
                      <ListChecks />
                      <span>My Projects</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/verifier/submit-report"}>
                    <Link href="/verifier/submit-report">
                      <FileText />
                      <span>Submit Report</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/verifier/logs"}>
                    <Link href="/verifier/logs">
                      <History />
                      <span>Logs</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
