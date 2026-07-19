"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Award, Users, ArrowRight, Star, MessageSquare } from "lucide-react";

// Fallback mock reviews in case database is connection-pending
const DEFAULT_REVIEWS = [
  {
    id: "1",
    name: "Rohan Sharma",
    email: "rohan.sharma@gmail.com",
    rating: 5,
    comment: "The PVC cricket bat is outstanding! Perfect bounce and the carbon-fiber texture grip feels extremely premium. Highly recommended for net practice.",
    date: "2026-07-10"
  },
  {
    id: "2",
    name: "Amanpreet Singh",
    email: "aman.singh@yahoo.com",
    rating: 5,
    comment: "Direct redirected me to Amazon, got it delivered in 2 days. The rackets are lightweight yet very sturdy. Best sports brand in Jalandhar!",
    date: "2026-07-12"
  },
  {
    id: "3",
    name: "Karan Verma",
    email: "karan.verma@outlook.com",
    rating: 4,
    comment: "Using the hex dumbbells and skipping rope daily. Exceptional durability, concrete filling is solid and the vinyl coating protects the floor.",
    date: "2026-07-14"
  }
];

export default function About() {
  // States
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Load reviews from MongoDB API on mount
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          setReviews(DEFAULT_REVIEWS);
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
        setReviews(DEFAULT_REVIEWS);
      }
    }
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingSelect = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment) return;

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews(prev => [newReview, ...prev]);
        setFormData({ name: "", email: "", rating: 5, comment: "" });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        alert("Failed to submit review. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to connect to the server. Please check your connection.");
    }
  };
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
            <div className="glass-panel team-card-3d" style={{ textAlign: "center", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="team-avatar-container" style={{ 
                position: "relative",
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                border: "2px solid rgba(255, 30, 39, 0.4)",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(255, 30, 39, 0.15)",
                marginBottom: "20px"
              }}>
                <Image
                  src="/images/ceo-ajit-kumar-v2.jpg"
                  alt="Ajit Kumar, Founder & CEO"
                  fill
                  style={{ objectFit: "cover" }}
                />
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
            <div className="glass-panel team-card-3d" style={{ textAlign: "center", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="team-avatar-container" style={{ 
                position: "relative",
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                border: "2px solid rgba(255, 30, 39, 0.4)",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(255, 30, 39, 0.15)",
                marginBottom: "20px"
              }}>
                <Image
                  src="/images/coo-uday-kumar-v2.jpg"
                  alt="Uday Kumar Giri, Co-founder & COO"
                  fill
                  style={{ objectFit: "cover" }}
                />
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
            <div className="glass-panel team-card-3d" style={{ textAlign: "center", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="team-avatar-container" style={{ 
                position: "relative",
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                border: "2px solid rgba(255, 30, 39, 0.4)",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(255, 30, 39, 0.15)",
                marginBottom: "20px"
              }}>
                <Image
                  src="/images/coo-nirbhay-giri-v2.jpg"
                  alt="Nirbhay Giri, Co-founder & COO"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "6px" }}>NIRBHAY GIRI</h3>
              <p style={{ color: "var(--accent-primary)", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>Co-founder & COO</p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "auto", justifyContent: "center" }}>
                <a href="https://www.linkedin.com/company/gosaiindustries/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "var(--transition-fast)" }} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
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

        {/* Customer Reviews Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", textAlign: "center", marginBottom: "12px" }}>
            CUSTOMER REVIEWS & FEEDBACK
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
            Hear from athletes, trainers, and coaches who use Gosai Sports gear daily, or share your own experience below.
          </p>

          <div style={{ display: "grid", gap: "40px" }} className="reviews-layout">
            {/* Reviews List */}
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <MessageSquare size={20} style={{ color: "var(--accent-primary)" }} /> Recent Testimonials ({reviews.length})
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxHeight: "480px", overflowY: "auto", paddingRight: "8px" }} className="reviews-scroll-container">
                {reviews.map((rev) => (
                  <div key={rev.id} className="glass-panel" style={{ padding: "20px", borderRadius: "16px", border: "1px solid var(--glass-border)", textAlign: "left" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <h4 style={{ fontSize: "15px", fontWeight: "700" }}>{rev.name}</h4>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{rev.date}</span>
                    </div>
                    
                    <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < rev.rating ? "#FFB800" : "none"} 
                          stroke={i < rev.rating ? "#FFB800" : "var(--text-muted)"} 
                        />
                      ))}
                    </div>
                    
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Write a Review Form */}
            <div>
              <div className="glass-panel" style={{ padding: "30px", borderRadius: "20px", border: "1px solid var(--glass-border)" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px" }}>Write a Review</h3>
                
                {isSuccess ? (
                  <div style={{ textAlign: "center", padding: "30px 0" }}>
                    <Star size={44} fill="var(--accent-primary)" stroke="none" style={{ margin: "0 auto 16px auto", display: "block", filter: "drop-shadow(0 0 8px var(--accent-primary))" }} />
                    <h4 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Review Submitted!</h4>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      Thank you for your valuable feedback. It has been added to our testimonial system and active review metrics!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} style={{ textAlign: "left" }}>
                    <div className="form-group" style={{ marginBottom: "16px" }}>
                      <label className="form-label" style={{ fontSize: "13px", marginBottom: "6px" }}>Your Rating</label>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {[...Array(5)].map((_, i) => {
                          const ratingVal = i + 1;
                          return (
                            <button
                              type="button"
                              key={i}
                              onClick={() => handleRatingSelect(ratingVal)}
                              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                            >
                              <Star 
                                size={24} 
                                fill={ratingVal <= formData.rating ? "#FFB800" : "none"} 
                                stroke={ratingVal <= formData.rating ? "#FFB800" : "var(--text-muted)"} 
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: "16px" }}>
                      <label className="form-label" htmlFor="rev-name" style={{ fontSize: "13px", marginBottom: "6px" }}>Name</label>
                      <input
                        type="text"
                        id="rev-name"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="form-control"
                        style={{ padding: "10px 14px", fontSize: "13px" }}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: "16px" }}>
                      <label className="form-label" htmlFor="rev-email" style={{ fontSize: "13px", marginBottom: "6px" }}>Email Address</label>
                      <input
                        type="email"
                        id="rev-email"
                        name="email"
                        required
                        placeholder="Enter your email for validation"
                        className="form-control"
                        style={{ padding: "10px 14px", fontSize: "13px" }}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: "20px" }}>
                      <label className="form-label" htmlFor="rev-comment" style={{ fontSize: "13px", marginBottom: "6px" }}>Comments</label>
                      <textarea
                        id="rev-comment"
                        name="comment"
                        required
                        placeholder="Share your experience with our products..."
                        className="form-control"
                        style={{ padding: "12px 14px", fontSize: "13px", minHeight: "100px", resize: "none" }}
                        value={formData.comment}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
                      Submit Testimonial
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Story Progress Stats */}
        <div className="glass-panel stats-grid" style={{ textAlign: "center", padding: "40px" }}>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>30+</h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Premium Products</p>
          </div>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>
              {(80000 + reviews.length).toLocaleString()}+
            </h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Active Reviews</p>
          </div>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>6 Lakhs+</h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Orders Delivered</p>
          </div>
          <div>
            <h4 style={{ fontSize: "36px", fontWeight: "900", color: "var(--accent-primary)" }}>
              {reviews.length > 0 
                ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
                : "5.0"} ★
            </h4>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", marginTop: "4px" }}>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
