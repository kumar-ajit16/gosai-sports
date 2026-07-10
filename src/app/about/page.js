import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Award, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        {/* Page Title */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 className="gradient-text" style={{ fontSize: "40px", fontWeight: "900", marginBottom: "12px" }}>
            ABOUT GOSAI SPORTS
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
              Founded with a mission to make premium-quality sports gear accessible, Gosai Sports Outlet has grown from a local supplier into a trusted digital catalog of athletic equipment. We specialize in designing and sourcing heavy-duty PVC cricket gear, lightweight carbon fiber badminton rackets, and robust home gym workout tools.
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
              src="/images/hero-banner.jpg"
              alt="Gosai Sports Production Quality"
              fill
              style={{ objectFit: "cover" }}
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

        {/* Story Progress Stats */}
        <div className="glass-panel" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", textAlign: "center", padding: "40px" }}>
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
