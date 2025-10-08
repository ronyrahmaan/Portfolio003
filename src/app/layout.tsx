import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Space Grotesk for modern/animated text
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Md A Rahman - AI Researcher Portfolio",
  description: "Interactive AI portfolio of Md A Rahman, Graduate Research Assistant and AI Researcher at Texas Tech University. Specializing in machine learning, NLP, and LiDAR systems.",
  keywords: [
    "Md A Rahman", 
    "AI Researcher", 
    "Machine Learning", 
    "Texas Tech University", 
    "NLP", 
    "LiDAR", 
    "Portfolio", 
    "AI", 
    "Interactive", 
    "Graduate Research Assistant",
    "Data Science",
    "Computer Vision"
  ],
  authors: [
    {
      name: "Md A Rahman",
      url: "https://github.com/ronyrahmaan",
    },
  ],
  creator: "Md A Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-rahman-ai.vercel.app",
    title: "Md A Rahman - AI Researcher Portfolio",
    description: "Interactive AI portfolio showcasing research in machine learning, NLP, and sensor data systems",
    siteName: "Md A Rahman Portfolio",
    images: [
      {
        url: "https://md-rahman-ai.vercel.app/landing-memojis.png",
        width: 1200,
        height: 630,
        alt: "Md A Rahman - AI Researcher Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md A Rahman - AI Researcher Portfolio",
    description: "AI Researcher and Graduate Research Assistant at Texas Tech University",
    creator: "@ronstagrram",
    images: ["https://md-rahman-ai.vercel.app/landing-memojis.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      {/*
        Add suppressHydrationWarning to avoid mismatches when browser
        extensions inject attributes into the body element before React
        hydrates. Without this, Next.js can throw hydration errors if
        additional attributes (e.g., bis_register) appear on the client.
      */}
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}