import React, { useState } from "react";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "Cabin Crew Training",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your message has been received. Our team will contact you shortly.",
    );
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "Cabin Crew Training",
      message: "",
    });
  };

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ==========================================
          1. HERO SECTION WITH EMBEDDED NAVBAR
         ========================================== */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 pt-3">
        <div className="relative w-full min-h-[420px] sm:min-h-[680px] md:min-h-[680px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-between pb-10">
          {/* Background Image */}
          <img
            src="/aboutus.png"
            alt="Contact Phoenix Academy Mysore"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/40" />

          {/* Embedded Navbar */}
          <div className="relative z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          {/* Centered Hero Main Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white space-y-4 my-auto pt-4">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-200 uppercase">
              WE'RE HERE TO HELP
            </p>

            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Get in Touch with Phoenix
            </h1>

            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed">
              Have questions about cabin crew admissions or aviation ground
              handling courses? Reach out to our admissions team today.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. CONTACT CARDS & FORM SECTION
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00529b] text-xs font-semibold uppercase tracking-wider mb-3">
                Reach Out Directly
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Visit Our Mysore Campus or Call Us
              </h2>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00529b] flex items-center justify-center font-bold text-xl flex-shrink-0">
                📍
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">
                  Mysore Campus
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Diyan Complex, shop No.23/E 1,2nd floor, opp. KHB Complex,
                  Kuvempu Nagara, Mysuru, Karnataka 570023
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f05123] flex items-center justify-center font-bold text-xl flex-shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">
                  Phone & WhatsApp
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Admissions: +91  98869 22036
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00529b] flex items-center justify-center font-bold text-xl flex-shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">
                  Email Inquiries
                </h4>
               
                <p className="text-sm text-slate-600">
                  infophoenixacadem@gmail.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md">
              <h4 className="font-semibold text-base mb-2">
                Campus Operating Hours
              </h4>
              <p className="text-xs text-slate-300">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Sunday: Closed (Online inquiries open)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill out the form below and an admissions counselor will guide
                you through courses, fees, and eligibility.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00529b] text-sm text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00529b] text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00529b] text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Select Course Interest
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00529b] text-sm text-slate-800 bg-white"
                  >
                    <option value="Cabin Crew Training">
                      Cabin Crew Training
                    </option>
                    <option value="Ground Handling">
                      Ground Handling & Airport Management
                    </option>
                    <option value="Hospitality & Travel">
                      Hospitality & Travel Management
                    </option>
                    <option value="General Query">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your educational background or ask any specific questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00529b] text-sm text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#941624]  text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all duration-300 text-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. GOOGLE MAP / LOCATION EMBED
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-16">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-200 h-[380px] relative">
          <iframe
            title="Phoenix Institute of Aviation and Hospitality - Mysore"
            src="https://www.google.com/maps?q=Phoenix%20Institute%20of%20Aviation%20and%20Hospitality%2C%20Mysuru%2C%20Karnataka&ll=12.2861022,76.6253994&z=17&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
