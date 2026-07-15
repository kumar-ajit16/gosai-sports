import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-nav">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <div style={{ position: "relative", width: "36px", height: "36px" }}>
                <Image 
                  src="/images/gosai-logo.png" 
                  alt="Gosai Sports Logo" 
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
                <span className="gradient-text" style={{ fontSize: "15px", fontWeight: "900", fontStyle: "italic", letterSpacing: "0.5px" }}>GOSAI SPORTS</span>
                <span style={{ fontSize: "8px", color: "var(--text-muted)", fontWeight: "600", textTransform: "lowercase", letterSpacing: "0.5px", margin: "1px 0" }}>brand of</span>
                <span style={{ fontSize: "9px", color: "var(--accent-primary)", fontWeight: "800", fontStyle: "italic", letterSpacing: "0.5px" }}>GOSAI INDUSTRIES</span>
              </div>
            </Link>
            <p className="footer-desc">
              Your ultimate destination for premium quality PVC cricket gear, badminton equipment, and home gym accessories. Delivering performance and durability.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li>
                <Link href="/products?category=sports-equipment" className="footer-link">
                  Sports Equipment
                </Link>
              </li>
              <li>
                <Link href="/products?category=fitness-gym" className="footer-link">
                  Fitness & Gym Gear
                </Link>
              </li>
              <li>
                <Link href="/products?subcategory=cricket-gear" className="footer-link">
                  Cricket Gear
                </Link>
              </li>
              <li>
                <Link href="/products?subcategory=workout" className="footer-link">
                  Workout Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">All Products</Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact & Support</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact & Socials</h4>
            <ul className="footer-links">
              <li style={{ color: "var(--text-secondary)", fontSize: "13px", display: "flex", gap: "6px", alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: "var(--accent-primary)", flexShrink: 0, marginTop: "2px" }} />
                <a 
                  href="https://maps.app.goo.gl/3NcrU1BcthdX86de7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                  style={{ display: "inline" }}
                >
                  15 A Dada Colony, Industrial Area Jalandhar, Punjab 144004
                </a>
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: "13px", display: "flex", gap: "6px", alignItems: "center" }}>
                <Phone size={14} style={{ color: "var(--accent-primary)" }} />
                <span>+91 95178 59087</span>
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: "13px", display: "flex", gap: "6px", alignItems: "center" }}>
                <Mail size={14} style={{ color: "var(--accent-primary)" }} />
                <a href="mailto:gosaiindustries.info@gmail.com" className="footer-link" style={{ fontSize: "13px" }}>gosaiindustries.info@gmail.com</a>
              </li>
              <li style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "4px" }}>
                GSTIN: 03JNNPK2023Q1ZM
              </li>
              <li style={{ display: "flex", gap: "16px", marginTop: "12px", alignItems: "center" }}>
                <a href="https://www.linkedin.com/company/gosaiindustries/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center" }} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.instagram.com/gosai.industries?igsh=N2owb201dXRvODR4" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center" }} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/share/1GR9PGWJJ5/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center" }} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Gosai Industries. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/about" className="footer-link" style={{ fontSize: "13px" }}>Privacy Policy</Link>
            <Link href="/contact" className="footer-link" style={{ fontSize: "13px" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
