"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Info } from "lucide-react";

// Google Form Configuration Keys
// Replace these with your actual Google Form Action URL and field Entry IDs.
const GOOGLE_FORM_CONFIG = {
  // Example: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXXXXXXXXXXXXX/formResponse"
  actionUrl: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdyH9T1x3lqJ61N2U_wYn8G-r-7BveqM-Vd3w0o2wzO0hH9qQ/formResponse", 
  fields: {
    name: "entry.1000001",    // Replace with your Form Name field entry ID
    email: "entry.1000002",   // Replace with your Form Email field entry ID
    subject: "entry.1000003", // Replace with your Form Subject field entry ID
    message: "entry.1000004"  // Replace with your Form Message field entry ID
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Submission error: ", err);
      setStatus("error");
    }
  };

  return (
    <section className="section">
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
                  <p>15 A Dada Colony, Industrial Area,</p>
                  <p>Jalandhar, Punjab 144004</p>
                  <p style={{ color: "var(--accent-primary)", fontSize: "12px", marginTop: "4px", fontWeight: "600" }}>GSTIN: 03JNNPK2023Q1ZM</p>
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

            {/* Google Forms Connection Instructions Box */}
            <div className="setup-instructions">
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                <Info size={16} style={{ color: "#00BFA5" }} />
                <h5 style={{ margin: 0 }}>Connecting Your Google Form</h5>
              </div>
              <p style={{ marginBottom: "8px" }}>
                To receive form entries directly in your Google Sheets:
              </p>
              <ol style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li>Open your Google Form and preview it.</li>
                <li>Inspect input fields in your browser and locate their name attributes (e.g., <code>entry.1234567890</code>).</li>
                <li>Open <code>src/app/contact/page.js</code> in your editor.</li>
                <li>Replace the <code>actionUrl</code> and <code>fields</code> values inside <code>GOOGLE_FORM_CONFIG</code> at the top.</li>
              </ol>
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
      </div>
    </section>
  );
}
