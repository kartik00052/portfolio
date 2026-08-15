import type { Metadata, Viewport } from "next";
import { Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import Grain from "@/components/ui/Grain";
import { PROFILE } from "@/data/social";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE.name} — ${PROFILE.title}`,
    template: `%s — ${PROFILE.name}`,
  },
  description: PROFILE.tagline,
  keywords: [
    "AI/ML Engineer",
    "LLM",
    "RAG",
    "Machine Learning",
    "ML Backend",
    "LangGraph",
    "FastAPI",
    "Devansh Dhama",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${PROFILE.name} — Portfolio`,
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: PROFILE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: PROFILE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf6ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CustomCursor />
        <Grain />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <PageTransition />
      </body>
    </html>
  );
}
