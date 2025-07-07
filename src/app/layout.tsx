import "./globals.css";
import ClientLayout from "../../components/ClientLayout";
import { Analytics } from "@vercel/analytics/react"

const metadataBase = new URL("https://kartikchaudhary.com")

export const metadata = {
  metadataBase,
  title: "Kartik Chaudhary Portfolio",
  description:
    "Kartik Chaudhary's personal portfolio, where you can find his projects, skills, and contact information.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Kartik Chaudhary Portfolio",
    description:
      "Kartik Chaudhary's personal portfolio, where you can find his projects, skills, and contact information.",
    url: "https://kartikchaudhary.com",
    siteName: "Kartik Chaudhary Portfolio",
    images: [
      {
        url: "/images/kartik.jpg",
        width: 1200,
        height: 630,
        alt: "Kartik Chaudhary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className="text-white">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
