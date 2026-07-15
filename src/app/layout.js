import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gosaisports.com"),
  title: {
    default: "Gosai Sports | Premium Sports & Fitness Gear by Gosai Industries",
    template: "%s | Gosai Sports"
  },
  description: "Browse premium PVC cricket bats, pro badminton rackets, training gear, dumbbells, and protective sports equipment manufactured by Gosai Industries. Buy on Amazon and Meesho.",
  keywords: ["sports equipment", "pvc cricket bat", "badminton racket", "hand gripper", "skipping rope", "dumbbells", "gosai industries", "gosai sports", "cricket bats Jalandhar", "sports factory Punjab"],
  authors: [{ name: "Gosai Industries" }],
  creator: "Gosai Industries",
  publisher: "Gosai Industries",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gosai Sports | Premium Sports & Fitness Gear",
    description: "Browse high-impact PVC cricket bats and fitness gear manufactured by Gosai Industries. Available on Amazon & Meesho.",
    url: "https://gosaisports.com",
    siteName: "Gosai Sports",
    images: [
      {
        url: "/images/hero-banner-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Gosai Sports Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gosai Sports | Premium Sports & Fitness Gear",
    description: "High-performance sports gear and fitness accessories manufactured by Gosai Industries.",
    images: ["/images/hero-banner-v2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme ? savedTheme : 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })()
            `,
          }}
        />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
        <Navbar />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
