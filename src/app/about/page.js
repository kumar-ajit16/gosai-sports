import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Award, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about Gosai Industries, a leading manufacturer of premium PVC cricket bats, professional athletic gear, and home gym accessories in Jalandhar, Punjab.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <section className="section">
      {/* JSON-LD Organization Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gosai Industries",
            "alternateName": "Gosai Sports",
            "url": "https://gosaisports.com",
            "logo": "https://gosaisports.com/images/logo.svg",
            "sameAs": [
              "https://www.instagram.com/gosai.industries?igsh=N2owb201dXRvODR4",
              "https://www.facebook.com/share/1GR9PGWJJ5/",
              "https://www.linkedin.com/company/gosaiindustries/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-95178-59087",
              "contactType": "customer service",
              "email": "gosaiindustries.info@gmail.com",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi", "pa"]
            }
          })
        }}
      />
      <div className="container">
        {/* Page Title */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 className="gradient-text" style={{ fontSize: "40px", fontWeight: "900", marginBottom: "12px" }}>
            ABOUT GOSAI INDUSTRIES
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Empowering athletes with high-performance, durable training gear and equipment.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="about-grid" style={{ marginBottom: "80px" }}>
          <div>
            <span style={{ color: "var(--accent-primary)", textTransform: "uppercase", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>
              Our Story
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "24px", lineHeight: "1.2" }}>
              CHAMPIONING THE SPIRIT OF SPORT
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>
              Founded with a mission to make premium-quality sports gear accessible, Gosai Industries has grown from a local supplier into a trusted digital catalog of athletic equipment. We specialize in designing and sourcing heavy-duty PVC cricket gear, lightweight carbon fiber badminton rackets, and robust home gym workout tools.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px" }}>
              We understand that the right equipment makes all the difference in training sessions. That is why every product in our catalog goes through rigorous durability testing to ensure it stands up to intense matches and weather conditions, offering elite performance at pocket-friendly pricing.
            </p>

            <Link href="/products" className="btn-primary">
              Browse Our Gear <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--glass-border)", boxShadow: "var(--shadow-premium)" }}>
            <Image
              src="/images/hero-banner-v2.jpg"
              alt="Gosai Industries Production Quality"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(10,10,12,0.6), transparent)" }}></div>
          </div>
        </div>

        {/* Vision & Values Cards */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", textAlign: "center", marginBottom: "40px" }}>
            OUR CORE PRINCIPLES
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            <div className="glass-panel" style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifycontent: "center", margin: "0 auto 20px auto" }} className="about-feature-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>Unmatched Durability</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                We engineer our PVC cricket bats and fitness equipment with reinforced polymer constructs to survive rough play.
              </p>
            </div>

            <div className="glass-panel" style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifycontent: "center", margin: "0 auto 20px auto" }} className="about-feature-icon">
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>Precision Performance</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                From isometric rackets sweet spots to steel bearing jump ropes, we fine-tune physical specifications for speed and grip.
              </p>
            </div>

            <div className="glass-panel" style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifycontent: "center", margin: "0 auto 20px auto" }} className="about-feature-icon">
                <Award size={28} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>Marketplace Access</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                By partnering with Amazon & Meesho, we provide secure checkouts, low shipping costs, and lightning-fast deliveries.
              </p>
            </div>

            <div className="glass-panel" style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifycontent: "center", margin: "0 auto 20px auto" }} className="about-feature-icon">
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>Community First</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                Providing direct bulk discounts and dedicated sales support to schools, clubs, and sports academies nationwide.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", textAlign: "center", marginBottom: "40px" }}>
            OUR LEADERSHIP TEAM
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", justifyContent: "center" }}>
            {/* Ajit Kumar */}
            <div className="glass-panel" style={{ textAlign: "center", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ 
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, rgba(255, 30, 39, 0.25) 0%, rgba(10, 10, 12, 0.9) 100%)",
                border: "2px solid rgba(255, 30, 39, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: "800",
                color: "var(--accent-primary)",
                textShadow: "0 0 10px rgba(255, 30, 39, 0.3)",
                marginBottom: "20px"
              }}>
                AK
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "6px" }}>AJIT KUMAR</h3>
              <p style={{ color: "var(--accent-primary)", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Founder & CEO</p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "auto", justifyContent: "center" }}>
                <a href="https://www.linkedin.com/in/ajitkumar2k2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.instagram.com/ajitkumar2k2?igsh=d2s4emRnc2R4YXQz" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/share/1EcviPiVjt/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Uday Kumar Giri */}
            <div className="glass-panel" style={{ textAlign: "center", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ 
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, rgba(255, 30, 39, 0.25) 0%, rgba(10, 10, 12, 0.9) 100%)",
                border: "2px solid rgba(255, 30, 39, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: "800",
                color: "var(--accent-primary)",
                textShadow: "0 0 10px rgba(255, 30, 39, 0.3)",
                marginBottom: "20px"
              }}>
                UK
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "6px" }}>UDAY KUMAR GIRI</h3>
              <p style={{ color: "var(--accent-primary)", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Co-founder & COO</p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "auto", justifyContent: "center" }}>
                <a href="https://www.linkedin.com/company/gosaiindustries/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.instagram.com/uday.kumar.giri?igsh=NmM0ZGxwazE4ZXZ3" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/share/1DZvgtfHf5/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Nirbhay Giri */}
            <div className="glass-panel" style={{ textAlign: "center", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ 
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, rgba(255, 30, 39, 0.25) 0%, rgba(10, 10, 12, 0.9) 100%)",
                border: "2px solid rgba(255, 30, 39, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: "800",
                color: "var(--accent-primary)",
                textShadow: "0 0 10px rgba(255, 30, 39, 0.3)",
                marginBottom: "20px"
              }}>
                NG
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "6px" }}>NIRBHAY GIRI</h3>
              <p style={{ color: "var(--accent-primary)", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Co-founder & COO</p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "auto", justifyContent: "center" }}>
                <a href="https://www.instagram.com/giri_nirbhay?igsh=NGNycnVzbnNwZTZt" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/share/1E55bXh7ym/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Story Progress Stats */}
        <div className="glass-panel stats-grid" style={{ textAlign: "center", padding: "40px" }}>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>9+</h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Premium Products</p>
          </div>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>1,500+</h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Active Reviews</p>
          </div>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>15k+</h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Orders Delivered</p>
          </div>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>4.7 ★</h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
