import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Escribania Barbieri - Servicios Notariales Profesionales",
  description:
    "Servicios notariales de alta calidad en Chivilcoy, Buenos Aires. Escribania Barbieri ofrece escrituras, testamentos, contratos y asesoría legal profesional.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/imgs/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
