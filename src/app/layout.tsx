import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../../styles/globals.css"
//import { ThemeProvider } from "./components/ThemeProvider"
import ThemeProvider from "./components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mackenzie Wilson - Personal Website",
  description: "Welcome to my personal website showcasing my projects and books I've read.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative z-0`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
