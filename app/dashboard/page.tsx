"use client"

import { IconShield } from "@tabler/icons-react"
import { Title, Text, Card, Image, Stack, Group, Grid, RingProgress, Paper } from "@mantine/core"

const stats = [
  {
    title: "Active Soldiers",
    value: "245",
    progress: 85,
    color: "blue",
  },
  {
    title: "Bases",
    value: "12",
    progress: 92,
    color: "teal",
  },
  {
    title: "Alert Level",
    value: "Low",
    progress: 25,
    color: "green",
  },
  {
    title: "System Status",
    value: "Online",
    progress: 100,
    color: "blue",
  },
]

export default function DashboardPage() {
  return (
    <Stack gap="lg">
      <Group>
        <IconShield size={32} />
        <Title>Military Monitoring System</Title>
      </Group>

      <Grid>
        {stats.map((stat) => (
          <Grid.Col key={stat.title} span={{ base: 12, sm: 6, md: 3 }}>
            <Paper withBorder p="md" radius="md">
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={[{ value: stat.progress, color: stat.color }]}
                  label={
                    <Text ta="center" fz="lg" fw={700}>
                      {stat.progress}%
                    </Text>
                  }
                />
                <div>
                  <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                    {stat.title}
                  </Text>
                  <Text fw={700} size="xl">
                    {stat.value}
                  </Text>
                </div>
              </Group>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Card>
        <Card.Section mb="md">
          <Image src="/placeholder.svg?height=300&width=800" height={300} alt="Command Center" />
        </Card.Section>

        <Title order={3} mb="xs">
          Welcome to the Command Center
        </Title>
        <Text c="dimmed">
          This advanced monitoring system provides real-time tracking and health monitoring of deployed personnel. Use
          the navigation menu to access different sections of the dashboard.
        </Text>
      </Card>
    </Stack>
  )
}

