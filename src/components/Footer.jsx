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
                  src="/images/logo.svg" 
                  alt="Gosai Sports Logo" 
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="gradient-text" style={{ fontSize: "18px", fontWeight: "900" }}>GOSAI SPORTS</span>
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
            <h4 className="footer-title">Stores</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  Amazon Store <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.meesho.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  Meesho Store <ExternalLink size={12} />
                </a>
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: "14px", display: "flex", gap: "6px", marginTop: "8px" }}>
                <MapPin size={16} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                <span>Gosai Sports Outlet, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Gosai Sports. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/about" className="footer-link" style={{ fontSize: "13px" }}>Privacy Policy</Link>
            <Link href="/contact" className="footer-link" style={{ fontSize: "13px" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
