import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raflibima.vercel.app"),
  title: {
    default: "Rafli Bima Pratandra - Software Engineer | Backend Developer",
    template: "%s | Rafli Bima Pratandra",
  },
  description:
    "Portfolio of Rafli Bima Pratandra, a Software Engineer specializing in backend development with Golang, Node.js, and Next.js from Indonesia.",
  openGraph: {
    title: "Rafli Bima Pratandra - Software Engineer | Backend Developer",
    description:
      "Portfolio of Rafli Bima Pratandra, a Software Engineer specializing in backend development with Golang, Node.js, and Next.js from Indonesia.",
    url: "https://raflibima.vercel.app",
    siteName: "Rafli Bima Pratandra",
    images: [
      {
        url: "https://raflibima.vercel.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Rafli Bima Pratandra - Software Engineer | Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafli Bima Pratandra - Software Engineer | Backend Developer",
    description:
      "Portfolio of Rafli Bima Pratandra, a Software Engineer specializing in backend development with Golang, Node.js, and Next.js from Indonesia.",
    images: [
      {
        url: "https://raflibima.vercel.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Rafli Bima Pratandra - Software Engineer | Backend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground/70`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <ReactLenis root>{children}</ReactLenis>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
