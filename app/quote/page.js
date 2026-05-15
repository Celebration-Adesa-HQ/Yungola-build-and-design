"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";

const projectTypes = ["Residential Build","Commercial Build","Renovation","Interior Design","Architecture & Planning","Other"];
const budgetRanges = ["Under ₦5M","₦5M – ₦20M","₦20M – ₦50M","₦50M – ₦100M","₦100M+","Prefer not to say"];
const timelines = ["As soon as possible","1 – 3 months","3 – 6 months","6 – 12 months","Over 1 year"];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"",email:"",phone:"",location:"",projectType:"",budget:"",timeline:"",bedrooms:"",area:"",message:"" });
  const [errors, setErrors] = useState({});

  const update = (f, v) => { setForm(p => ({...p,[f]:v})); if(errors[f]) setErrors(p=>({...p,[f]:""})); };

  const validateStep1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.projectType) e.projectType = "Please select a project type";
    if (!form.budget) e.budget = "Please select a budget range";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };
  const handleSubmit = (e) => { e.preventDefault(); if (form.message.trim()) setSubmitted(true); else setErrors({ message: "Please describe your project needs" }); };

  return (
    <>
      <section className="bg-[#0D0D0D] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.25em] mb-4" style={{fontFamily:"var(--font-montserrat)"}}>Start Your Project</p>
          <h1 className="text-5xl lg:text-8xl font-900 text-white" style={{fontFamily:"var(--font-cinzel)",fontWeight:900}}>Get a Quote</h1>
        </div>
      </section>

      <section className="section-pad bg-[#F9F9F7]">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle size={64} className="text-[#F5C518] mx-auto mb-6" />
              <h2 className="text-3xl font-700 text-[#0D0D0D] mb-4" style={{fontFamily:"var(--font-cinzel)"}}>Thank You!</h2>
              <p className="text-[#6B7280] text-lg" style={{fontFamily:"var(--font-josefin)"}}>Our team will contact you within 24 hours to discuss your project.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="text-xs text-[#6B7280] uppercase tracking-[0.15em]" style={{fontFamily:"var(--font-montserrat)"}}>Step {step} of 2</span>
                  <span className="text-xs text-[#F5C518] uppercase tracking-[0.15em]" style={{fontFamily:"var(--font-montserrat)"}}>{step===1?"Project Details":"Specific Needs"}</span>
                </div>
                <div className="step-bar"><div className="step-bar-fill" style={{width:step===1?"50%":"100%"}} /></div>
              </div>

              <div className="bg-[#0D0D0D] rounded-sm p-8 lg:p-10">
                {step === 1 ? (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-600 text-white mb-6" style={{fontFamily:"var(--font-cinzel)"}}>Project Details</h2>
                    <div>
                      <label htmlFor="q-name" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Full Name *</label>
                      <input id="q-name" type="text" value={form.name} onChange={e=>update("name",e.target.value)} placeholder="John Adeyemi" className="form-input" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-email" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Email *</label>
                        <input id="q-email" type="email" value={form.email} onChange={e=>update("email",e.target.value)} placeholder="you@email.com" className="form-input" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-phone" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Phone *</label>
                        <input id="q-phone" type="tel" value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="+234 800 000 0000" className="form-input" />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="q-location" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Project Location</label>
                      <input id="q-location" type="text" value={form.location} onChange={e=>update("location",e.target.value)} placeholder="Lagos, Nigeria" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="q-type" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Project Type *</label>
                      <select id="q-type" value={form.projectType} onChange={e=>update("projectType",e.target.value)} className="form-input cursor-pointer">
                        <option value="">Select project type</option>
                        {projectTypes.map(t=><option key={t}>{t}</option>)}
                      </select>
                      {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-budget" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Budget Range *</label>
                        <select id="q-budget" value={form.budget} onChange={e=>update("budget",e.target.value)} className="form-input cursor-pointer">
                          <option value="">Select budget</option>
                          {budgetRanges.map(b=><option key={b}>{b}</option>)}
                        </select>
                        {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-timeline" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Timeline</label>
                        <select id="q-timeline" value={form.timeline} onChange={e=>update("timeline",e.target.value)} className="form-input cursor-pointer">
                          <option value="">Select timeline</option>
                          {timelines.map(t=><option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <button onClick={handleNext} id="quote-next-btn" className="w-full flex items-center justify-center gap-2 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#E0A800] transition-colors duration-200 cursor-pointer mt-4" style={{fontFamily:"var(--font-montserrat)",fontWeight:700}}>
                      Continue <ChevronRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-600 text-white mb-6" style={{fontFamily:"var(--font-cinzel)"}}>Specific Needs</h2>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-beds" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Bedrooms</label>
                        <input id="q-beds" type="number" min="0" value={form.bedrooms} onChange={e=>update("bedrooms",e.target.value)} placeholder="e.g. 4" className="form-input" />
                      </div>
                      <div>
                        <label htmlFor="q-area" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Area (sqm)</label>
                        <input id="q-area" type="text" value={form.area} onChange={e=>update("area",e.target.value)} placeholder="e.g. 350 sqm" className="form-input" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="q-msg" className="block text-xs text-[#6B7280] uppercase tracking-[0.15em] mb-2" style={{fontFamily:"var(--font-montserrat)"}}>Project Description *</label>
                      <textarea id="q-msg" rows={5} value={form.message} onChange={e=>update("message",e.target.value)} placeholder="Describe your vision and requirements..." className="form-input resize-none" />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={()=>setStep(1)} id="quote-back-btn" className="flex items-center gap-2 px-6 py-4 border border-white/20 text-white/60 text-sm uppercase tracking-[0.1em] rounded-sm hover:border-white/50 hover:text-white transition-colors cursor-pointer" style={{fontFamily:"var(--font-montserrat)"}}>
                        <ChevronLeft size={16} /> Back
                      </button>
                      <button type="submit" id="quote-submit-btn" className="flex-1 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#E0A800] transition-colors cursor-pointer" style={{fontFamily:"var(--font-montserrat)",fontWeight:700}}>
                        Submit Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
