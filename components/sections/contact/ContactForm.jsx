"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { contactContent } from "@/lib/data/siteContent";

export default function ContactForm() {
  const { portal } = contactContent;
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        
        const result = await response.json();

        if (response.ok && result.success) {
          setSubmitted(true);
        } else {
          setServerError(result.error || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setServerError("A network error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="lg:col-span-7 bg-surface-container p-8 md:p-12 lg:p-16 shadow-2xl border-t-2 border-accent relative z-10 rounded-sm border border-outline-variant"
    >
      <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-montserrat">
        {portal.badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-darkForeground mb-10 font-montserrat tracking-wide">
        {portal.title}
      </h2>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-darkBackground rounded-sm p-12 text-center border border-outline-variant shadow-inner"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            >
              <CheckCircle size={56} className="text-accent mx-auto mb-6" />
            </motion.div>
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
              className="px-8 py-4 bg-accent text-[#131313] font-bold uppercase tracking-[0.15em] text-xs rounded-sm hover:bg-white hover:text-black transition-colors shadow-lg cursor-pointer font-montserrat"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-8"
            noValidate
          >
            {serverError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-red-500/10 border border-red-500/50 rounded-sm p-4 text-red-400 text-sm font-hanken"
              >
                {serverError}
              </motion.div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={0}>
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
              </motion.div>

              <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={1}>
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
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={2}>
                <label htmlFor="c-phone" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                  Phone Number
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="e.g. +234 803 123 4567"
                  className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner"
                />
              </motion.div>

              <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={3}>
                <label htmlFor="c-subject" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                  Subject
                </label>
                <input
                  id="c-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder="e.g. Project Consultation"
                  className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner"
                />
              </motion.div>
            </div>

            <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={4}>
              <label htmlFor="c-message" className="block text-xs text-accent uppercase tracking-[0.15em] mb-2 font-montserrat font-bold">
                Message *
              </label>
              <textarea
                id="c-message"
                rows="6"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Describe your design or construction vision here..."
                className="w-full bg-darkBackground border border-outline-variant rounded-sm px-5 py-4 text-darkForeground placeholder-darkSecondaryForeground/40 focus:outline-none focus:border-accent transition-colors font-hanken text-sm shadow-inner resize-none"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1.5 font-hanken">{errors.message}</p>}
            </motion.div>

            <motion.div variants={fieldVariants} initial="hidden" animate="visible" custom={5} className="pt-4">
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-accent text-[#131313] hover:bg-white hover:text-black text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl cursor-pointer font-montserrat hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={14} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={14} className="group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
