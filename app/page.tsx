import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { LoginForm } from "@/components/login-form"

export default function Home() {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get("auth")?.value === "true"

  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return <LoginForm />
}

