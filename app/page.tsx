import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { LoginForm } from "@/components/login-form"

export default async function Home() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get("auth")?.value === "true"

  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return <LoginForm />
}

