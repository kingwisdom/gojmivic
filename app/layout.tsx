import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "MIRAAMAND Energy Services Limited - Comprehensive Energy Services",
  description:
    "Leading provider of oilfield services, petroleum distribution, waste management, and renewable energy solutions. Your trusted partner for safe, reliable, and cost-effective energy services.",
  keywords:
    "oilfield services, petroleum distribution, waste management, renewable energy, drilling services, oil tools equipment",
  icons: ["fav.png", "apple-touch-icon.png"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
