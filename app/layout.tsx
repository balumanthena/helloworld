import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Rangoli Restaurant",
  description: "Authentic Indian dining experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#fff8f0]">
     
        <main className="min-h-screen">{children}</main>

      </body>
    </html>
  )
}
