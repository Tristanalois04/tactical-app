"use client"

import type React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { IconHome, IconUsers, IconShield, IconChartBar, IconMap, IconActivity, IconLogout } from "@tabler/icons-react"
import { AppShell, Burger, Group, NavLink, Title, UnstyledButton, rem } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

const navItems = [
  { label: "Home", icon: IconHome, href: "/dashboard" },
  { label: "Soldiers", icon: IconUsers, href: "/dashboard/soldiers" },
  { label: "Bases", icon: IconShield, href: "/dashboard/bases" },
  { label: "Statistics", icon: IconChartBar, href: "/dashboard/statistics" },
  { label: "Tactical Map", icon: IconMap, href: "/dashboard/tactical" },
  { label: "Activity Log", icon: IconActivity, href: "/dashboard/activity" },
]

interface DashboardNavProps {
  children: React.ReactNode
}

export function DashboardNav({ children }: DashboardNavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [opened, { toggle }] = useDisclosure()

  const handleLogout = () => {
    document.cookie = "auth=false; path=/"
    router.push("/")
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={3}>Command Center</Title>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section grow>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              component={Link}
              href={item.href}
              label={item.label}
              leftSection={<item.icon style={{ width: rem(20), height: rem(20) }} />}
              active={pathname === item.href}
            />
          ))}
        </AppShell.Section>

        <AppShell.Section>
          <UnstyledButton
            onClick={handleLogout}
            w="100%"
            px="md"
            py="xs"
            style={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: theme.spacing.sm,
              color: theme.colors.red[6],
              "&:hover": {
                backgroundColor: theme.colors.red[0],
              },
            })}
          >
            <IconLogout style={{ width: rem(20), height: rem(20) }} />
            <span>Logout</span>
          </UnstyledButton>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

