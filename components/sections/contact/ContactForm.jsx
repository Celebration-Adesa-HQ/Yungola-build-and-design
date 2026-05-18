"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { contactContent } from "@/lib/data/siteContent";

export default function ContactForm() {
  const { portal } = contactContent;
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (f, v) => {
    setForm((p) => ({ ...p, [f]: v }));
    if (errors[f]) setErrors((p) => ({ ...p, [f]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 bg-surface-container p-8 md:p-12 lg:p-16 shadow-2xl border-t-2 border-accent relative z-10 rounded-sm border border-outline-variant">
      <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-montserrat">
        {portal.badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-darkForeground mb-10 font-montserrat tracking-wide">
        {portal.title}
      </h2>

      {submitted ? (
        <div className="bg-darkBackground rounded-sm p-12 text-center border border-outline-variant shadow-inner animate-fade-up">
          <CheckCircle size={56} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl text-darkForeground font-bold uppercase font-montserrat tracking-wide mb-3">
            {portal.successHeading}
          </h3>
          <p className="text-darkSecondaryForeground font-hanken text-base max-w-md mx-auto leading-relaxed mb-8">
            {portal.successMsg}
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", phone: "", subject: "", message: "" });
            }}
            className="px-8 py-4 bg-accent text-on-primary font-bold uppercase tracking-[0.15em] text-xs rounded-sm hover:bg-accentDark transition-colors shadow-lg cursor-pointer font-montserrat"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="c-name" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                Full Name *
              </label>
              <input
                id="c-name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="e.g. John Adeyemi"
                className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1.5 font-hanken">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="c-email" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                Email Address *
              </label>
              <input
                id="c-email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="e.g. john@adeyemi.com"
                className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5 font-hanken">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="c-phone" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                Phone Number
              </label>
              <input
                id="c-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="e.g. +234 800 000 0000"
                className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner"
              />
            </div>

            <div>
              <label htmlFor="c-subject" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                Subject / Discipline
              </label>
              <input
                id="c-subject"
                type="text"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                placeholder="e.g. Architectural Design Inquiry"
                className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner"
              />
            </div>
          </div>

          <div>
            <label htmlFor="c-msg" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
              Project Details & Scope *
            </label>
            <textarea
              id="c-msg"
              rows={6}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Provide details regarding your location, estimated budget, timeline, and architectural aspirations..."
              className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner resize-none"
            />
            {errors.message && <p className="text-red-400 text-xs mt-1.5 font-hanken">{errors.message}</p>}
          </div>

          <button
            type="submit"
            id="contact-submit-btn"
            className="w-full flex items-center justify-center gap-3 py-5 bg-accent text-on-primary text-sm font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-accentDark transition-colors cursor-pointer shadow-xl font-montserrat"
          >
            <Send size={18} /> Transmit Inquiry
          </button>
        </form>
      )}
    </div>
  );
}
