"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Trophy, Phone, Info, ShoppingBag, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Sync state on client mount asynchronously to prevent cascading renders
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    if (currentTheme !== "light") {
      const timer = setTimeout(() => {
        setTheme(currentTheme);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="header-nav">
      <div className="container nav-container">
        <Link href="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <div style={{ position: "relative", width: "42px", height: "42px" }}>
            <Image 
              src="/images/logo.svg" 
              alt="Gosai Sports Logo" 
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
            <span className="gradient-text" style={{ fontSize: "20px", fontWeight: "900", letterSpacing: "0.5px" }}>GOSAI SPORTS</span>
            <span style={{ fontSize: "10px", color: "var(--text-secondary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.0px" }}>Gosai Industries</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`nav-link ${pathname === link.path ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action or Quick Shop badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="badge-status" style={{ display: "none" }}>
            <span className="pulse-dot"></span>
            Outlet Open
          </div>
          
          {/* Theme Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Toggle button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            width: "100%",
            background: "var(--bg-secondary)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "24px",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backdropFilter: "blur(20px)"
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: pathname === link.path ? "var(--accent-primary)" : "var(--text-primary)",
                fontSize: "18px",
                fontWeight: "600",
                padding: "8px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
