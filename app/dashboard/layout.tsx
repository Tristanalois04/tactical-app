import type React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { DashboardNav } from "@/components/dashboard-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get("auth")?.value === "true"

  if (!isAuthenticated) {
    redirect("/")
  }

  return <DashboardNav>{children}</DashboardNav>
}

