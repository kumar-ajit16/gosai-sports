"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Trophy, Dumbbell, ShieldCheck, Zap, Star } from "lucide-react";
import { products } from "@/data/products";

export default function Home() {
  // Select a few products to feature on the homepage
  const featuredProducts = products.filter(p => 
    ["pvc-cricket-bat", "pro-rackets", "pvc-dumbbells"].includes(p.id)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        {/* Dynamic Video / Image Background */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.25
        }}>
          {/* Looping video simulating dynamic sports action */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
            poster="/images/hero-banner-v2.jpg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-dumbbells-in-a-gym-42261-large.mp4" type="video/mp4" />
            {/* Fallback video if first fails */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-sports-shoe-running-in-the-grass-42284-large.mp4" type="video/mp4" />
          </video>
          {/* Bottom vignette overlay to blend with dark page */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: "linear-gradient(to top, var(--bg-primary), transparent)"
          }}></div>
        </div>

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-subtitle">Premium Athletic Outlet</span>
            <h1 className="hero-title animate-title">
              <span className="word w-1">GEAR</span>{" "}
              <span className="word w-2">UP</span>{" "}
              <span className="word w-3">FOR</span> <br />
              <span className="word w-4 gradient-text">ULTIMATE</span>{" "}
              <span className="word w-5">PERFORMANCE</span>
            </h1>
            <p className="hero-description">
              Explore Gosai Sports&apos; exclusive portfolio of durable, high-impact cricket gear, aerodynamic badminton equipment, and heavy-duty fitness accessories. Built for athletes who refuse to compromise.
            </p>
            <div className="hero-buttons">
              <Link href="/products" className="btn-primary">
                Explore Catalog <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          <div className="hero-visual" style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="hero-image-container">
              <Image
                src="/images/hero-banner-v2.jpg"
                alt="Gosai Sports Featured Showcase"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay with glowing brand emblem */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, rgba(255,30,39,0.1) 0%, rgba(0,0,0,0.4) 100%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "24px"
              }}>
                <div className="glass-panel" style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <Trophy style={{ color: "var(--accent-primary)" }} size={24} />
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: "700" }}>Professional Grade</h4>
                    <p style={{ fontSize: "11px", color: "var(--text-secondary)" }}>Engineered for athletes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Callouts */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)", padding: "40px 0" }}>
        <div className="container">
          <div className="features-grid">
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", padding: "12px", borderRadius: "12px" }}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700" }}>Premium Durability</h4>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Heavy-duty polymers & carbon fiber construction.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", padding: "12px", borderRadius: "12px" }}>
                <Zap size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700" }}>Direct Shopping</h4>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Quick redirect buttons to Amazon & Meesho shops.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ background: "rgba(255,30,39,0.1)", color: "var(--accent-primary)", padding: "12px", borderRadius: "12px" }}>
                <Trophy size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700" }}>Elite Design</h4>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Sleek, ergonomic handles and high-impact bounce.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="section">
        <div className="container">
          <h2 className="home-section-title">Explore Catalog</h2>
          <p className="home-section-subtitle">Select a category to view customized gear built for specific workouts and matches.</p>

          <div className="category-cards">
            {/* Sports Equipment */}
            <Link href="/products?category=sports-equipment" className="category-card">
              <div className="category-card-bg">
                <Image
                  src="/images/pro-rackets.jpg"
                  alt="Sports Equipment"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="category-card-overlay"></div>
              <div className="category-card-content">
                <Trophy size={32} style={{ color: "var(--accent-primary)", marginBottom: "12px" }} />
                <h3 className="category-card-title">Sports Equipment</h3>
                <p className="category-card-desc">Professional-grade PVC cricket bats, wind-resistant practice balls, and lightweight carbon fiber badminton rackets.</p>
                <span className="category-card-link">View Gear <ArrowRight size={14} /></span>
              </div>
            </Link>

            {/* Fitness & Gym Equipment */}
            <Link href="/products?category=fitness-gym" className="category-card">
              <div className="category-card-bg">
                <Image
                  src="/images/pvc-dumbbells.jpg"
                  alt="Fitness & Gym Equipment"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="category-card-overlay"></div>
              <div className="category-card-content">
                <Dumbbell size={32} style={{ color: "var(--accent-primary)", marginBottom: "12px" }} />
                <h3 className="category-card-title">Fitness & Gym</h3>
                <p className="category-card-desc">Hexagonal vinyl-coated dumbbells, high-speed steel bearing skipping ropes, and adjustable resistance hand grippers.</p>
                <span className="category-card-link">View Gear <ArrowRight size={14} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="section" style={{ background: "linear-gradient(to bottom, transparent, var(--bg-secondary))" }}>
        <div className="container">
          <h2 className="home-section-title">Trending Equipment</h2>
          <p className="home-section-subtitle">Discover our highest-rated products crafted to elevate your daily practice sessions.</p>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="glass-panel product-card">
                <div className="product-image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="product-rating">
                    <Star size={12} fill="#FFB800" stroke="none" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <div className="product-meta">
                  <span className="product-tag">{product.subcategory.replace("-", " ")}</span>
                  <span className="product-price">{product.price}</span>
                </div>

                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>

                <div className="store-buttons">
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-store btn-amazon"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href={product.meeshoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-store btn-meesho"
                  >
                    Buy on Meesho
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link href="/products" className="btn-outline" style={{ display: "inline-flex" }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Google Form Banner */}
      <section className="section container">
        <div className="promo-banner">
          <div className="promo-content">
            <h3>Need Custom or Bulk Orders?</h3>
            <p>We supply schools, academies, corporate gyms, and retail vendors. Drop us a message, and our sales team will get back to you with custom quotes.</p>
          </div>
          <div>
            <Link href="/contact" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
