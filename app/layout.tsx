"use client"

import type React from "react"

import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MantineProvider
          theme={{
            primaryColor: "blue",
            fontFamily: "Inter, sans-serif",
            components: {
              Button: {
                defaultProps: {
                  size: "md",
                  radius: "md",
                },
              },
              Card: {
                defaultProps: {
                  radius: "md",
                  withBorder: true,
                },
              },
            },
          }}
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
