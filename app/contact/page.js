"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (f, v) => { setForm(p=>({...p,[f]:v})); if(errors[f]) setErrors(p=>({...p,[f]:""})); };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => { e.preventDefault(); if (validate()) setSubmitted(true); };

  const contacts = [
    { Icon: MapPin, label: "Address", value: "Lagos, Nigeria", href: null },
    { Icon: Phone, label: "Phone", value: "+234 800 000 0000", href: "tel:+2348000000000" },
    { Icon: Mail, label: "Email", value: "hello@yungolabuildanddesign.com", href: "mailto:hello@yungolabuildanddesign.com" },
    { Icon: Clock, label: "Office Hours", value: "Mon – Fri: 8am – 6pm", href: null },
  ];

  return (
    <>
      <section className="bg-[#0D0D0D] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.25em] mb-4" style={{fontFamily:"var(--font-montserrat)"}}>Get In Touch</p>
          <h1 className="text-5xl lg:text-8xl font-900 text-white" style={{fontFamily:"var(--font-cinzel)",fontWeight:900}}>Contact Us</h1>
        </div>
      </section>

      <section className="section-pad bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: Form */}
          <div>
            <h2 className="text-3xl font-700 text-[#0D0D0D] mb-8 yellow-underline" style={{fontFamily:"var(--font-cinzel)"}}>Send a Message</h2>
            {submitted ? (
              <div className="bg-[#0D0D0D] rounded-sm p-10 text-center">
                <CheckCircle size={48} className="text-[#F5C518] mx-auto mb-4" />
                <h3 className="text-xl text-white font-600 mb-2" style={{fontFamily:"var(--font-cinzel)"}}>Message Sent!</h3>
                <p className="text-[#6B7280]" style={{fontFamily:"var(--font-josefin)"}}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#0D0D0D] rounded-sm p-8 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Full Name *</label>
                    <input id="c-name" type="text" value={form.name} onChange={e=>update("name",e.target.value)} placeholder="John Adeyemi" className="form-input" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Email *</label>
                    <input id="c-email" type="email" value={form.email} onChange={e=>update("email",e.target.value)} placeholder="you@email.com" className="form-input" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-phone" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Phone</label>
                    <input id="c-phone" type="tel" value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="+234 800 000 0000" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Subject</label>
                    <input id="c-subject" type="text" value={form.subject} onChange={e=>update("subject",e.target.value)} placeholder="Project Inquiry" className="form-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Message *</label>
                  <textarea id="c-msg" rows={5} value={form.message} onChange={e=>update("message",e.target.value)} placeholder="Tell us about your project or inquiry..." className="form-input resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" id="contact-submit-btn" className="w-full flex items-center justify-center gap-2 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#E0A800] transition-colors cursor-pointer" style={{fontFamily:"var(--font-montserrat)",fontWeight:700}}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Info + Map */}
          <div>
            <h2 className="text-3xl font-700 text-[#0D0D0D] mb-8 yellow-underline" style={{fontFamily:"var(--font-cinzel)"}}>Find Us</h2>
            <div className="space-y-5 mb-8">
              {contacts.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5C518]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#F5C518]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-[0.12em] mb-1" style={{fontFamily:"var(--font-montserrat)"}}>{label}</p>
                    {href ? (
                      <a href={href} className="text-[#0D0D0D] hover:text-[#F5C518] transition-colors duration-200 font-400" style={{fontFamily:"var(--font-josefin)"}}>{value}</a>
                    ) : (
                      <p className="text-[#2C2C2C]" style={{fontFamily:"var(--font-josefin)"}}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="relative h-64 rounded-sm overflow-hidden bg-[#1A1A1A] border border-[#F5C518]/20">
              <iframe
                title="Yungola Build and Design Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63739698!2d3.1585992!3d6.548055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" id="contact-whatsapp-btn" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-600 uppercase tracking-[0.12em] rounded-sm hover:bg-[#20bc5a] transition-colors cursor-pointer" style={{fontFamily:"var(--font-montserrat)"}}>
                WhatsApp
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id="contact-instagram-btn" className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#0D0D0D]/20 text-[#0D0D0D] text-xs uppercase tracking-[0.12em] rounded-sm hover:border-[#0D0D0D] transition-colors cursor-pointer" style={{fontFamily:"var(--font-montserrat)"}}>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
