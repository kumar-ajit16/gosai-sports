"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Info } from "lucide-react";

const GOOGLE_FORM_CONFIG = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeRNFYs_H41y3AGQ-0x51rKNaYuBLCaguuHyHQSh4UlmiAgzw/formResponse", 
  fields: {
    name: "entry.2144736350",
    email: "entry.700747803",
    phone: "entry.344020609",
    subject: "entry.1707630567",
    message: "entry.968865221"
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Assemble form data for URL encoded submission
    const formParams = new URLSearchParams();
    formParams.append(GOOGLE_FORM_CONFIG.fields.name, formData.name);
    formParams.append(GOOGLE_FORM_CONFIG.fields.email, formData.email);
    formParams.append(GOOGLE_FORM_CONFIG.fields.phone, formData.phone);
    formParams.append(GOOGLE_FORM_CONFIG.fields.subject, formData.subject);
    formParams.append(GOOGLE_FORM_CONFIG.fields.message, formData.message);

    try {
      // Submit to Google Forms using background fetch in no-cors mode
      // This sends the data successfully while letting the user stay on the site
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formParams.toString()
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error("Submission error: ", err);
      setStatus("error");
    }
  };

  return (
    <section className="section">
      {/* JSON-LD LocalBusiness Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gosai Industries (Gosai Sports)",
            "image": "https://gosaisports.com/images/hero-banner-v2.jpg",
            "telephone": "+91-95178-59087",
            "email": "gosaiindustries.info@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15 A Dada Colony, Industrial Area",
              "addressLocality": "Jalandhar",
              "addressRegion": "Punjab",
              "postalCode": "144004",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.3532724",
              "longitude": "75.5743278"
            },
            "url": "https://gosaisports.com",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          })
        }}
      />
      <div className="container">
        {/* Title Banner */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 className="gradient-text" style={{ fontSize: "40px", fontWeight: "900", marginBottom: "12px" }}>
            GET IN TOUCH
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Have questions about our sports gear or looking to place a bulk order? Send us a message!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Side: Contact Information Details */}
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "20px" }}>
              CONTACT INFORMATION
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "32px" }}>
              Reach out to our customer relations desk or sales office. We strive to reply to all queries within 24 business hours.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Email Address</h4>
                  <p>gosaiindustries.info@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Helpline Number</h4>
                  <p>+91 95178 59087</p>
                  <p>Mon - Sat (9:00 AM - 6:00 PM IST)</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Factory & Office</h4>
                  <a 
                    href="https://www.google.com/maps/place/GOSAI+INDUSTRIES/@31.3532724,75.5743278,17z/data=!3m1!4b1!4m6!3m5!1s0x391a5bc6ac6a083b:0x1fced028748d7258!8m2!3d31.3532724!4d75.5743278!16s%2Fg%2F11wxh737t8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-address-link"
                  >
                    <p style={{ margin: 0 }}>15 A Dada Colony, Industrial Area,</p>
                    <p style={{ margin: 0 }}>Jalandhar, Punjab 144004</p>
                    <span style={{ fontSize: "12px", color: "var(--accent-primary)", display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "4px", fontWeight: "600" }}>
                      View on Google Maps ↗
                    </span>
                  </a>
                  <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "8px", fontWeight: "600" }}>GSTIN: 03JNNPK2023Q1ZM</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "32px" }}>
              <h4 style={{ fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Connect on Social Media</h4>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="https://www.linkedin.com/company/gosaiindustries/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                </a>
                <a href="https://www.instagram.com/gosai.industries?igsh=N2owb201dXRvODR4" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
                </a>
                <a href="https://www.facebook.com/share/1GR9PGWJJ5/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Form Panel */}
          <div className="glass-panel" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle size={56} style={{ color: "#00BFA5", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "12px" }}>Message Sent Successfully!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Thank you for reaching out. We have logged your response to our feedback database and will contact you shortly.
                </p>
                <button 
                  className="btn-outline" 
                  onClick={() => setStatus("idle")}
                  style={{ display: "inline-flex" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your contact number (e.g. +91 9517859087)"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Bulk order inquiry, bat weight request"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message Description</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Write details about your query..."
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Submitting Query..." : "Send Message"} 
                  <Send size={16} style={{ marginLeft: "6px" }} />
                </button>
                
                {status === "error" && (
                  <p style={{ color: "var(--accent-primary)", fontSize: "13px", marginTop: "12px", textAlign: "center" }}>
                    There was an issue submitting. Check your connection or Google Form configurations.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Interactive Google Map Embed */}
        <div style={{ marginTop: "60px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--glass-border)", boxShadow: "var(--shadow-premium)", height: "350px", position: "relative" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.877239103212!2d75.57175287629007!3d31.353276974288077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bc6ac6a083b%3A0x1fced028748d7258!2sGOSAI%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1721099999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gosai Industries Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
