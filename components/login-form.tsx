"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { IconShield } from "@tabler/icons-react"
import { TextInput, PasswordInput, Paper, Title, Container, Button, Stack, Text, rem } from "@mantine/core"
import { notifications } from "@mantine/notifications"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const username = formData.get("username")
    const password = formData.get("password")

    if (username === "admin" && password === "s3gur0") {
      document.cookie = "auth=true; path=/"
      router.push("/dashboard")
    } else {
      notifications.show({
        title: "Authentication failed",
        message: "Invalid username or password",
        color: "red",
      })
    }

    setIsLoading(false)
  }

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Stack align="center" mb="md">
          <IconShield style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
          <Title order={2}>Military Command Center</Title>
          <Text c="dimmed" size="sm" ta="center">
            Enter your credentials to access the system
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput required label="Username" placeholder="Your username" name="username" radius="md" />

            <PasswordInput required label="Password" placeholder="Your password" name="password" radius="md" />

            <Button type="submit" radius="xl" loading={isLoading} fullWidth>
              Sign in
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

