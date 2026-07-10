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
  title: "Gosai Sports Outlet | Premium Sports & Fitness Gear",
  description: "Browse premium PVC cricket bats, pro badminton rackets, training gear, dumbbells, and protective sports equipment at Gosai Sports. Buy on Amazon and Meesho.",
  keywords: "sports equipment, pvc cricket bat, badminton racket, hand gripper, skipping rope, dumbbells, gosai sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
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
