"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { contactContent } from "@/lib/data/siteContent";

const icons = [MapPin, Phone, Mail, Clock];

export default function OfficeDirectory() {
  const { directory } = contactContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <div className="lg:col-span-5 space-y-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span
          variants={itemVariants}
          className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat"
        >
          {directory.badge}
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold uppercase text-darkForeground mb-8 font-montserrat tracking-wide border-b border-outline-variant pb-4"
        >
          {directory.title}
        </motion.h2>

        <div className="space-y-8">
          {directory.list.map(({ label, value, href }, index) => {
            const Icon = icons[index] || MapPin;
            return (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 bg-surface-container rounded-sm flex items-center justify-center flex-shrink-0 border border-outline-variant group-hover:border-accent transition-colors shadow-lg">
                  <Icon size={20} className="text-accent group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] text-accent uppercase tracking-[0.15em] mb-1 font-montserrat font-bold">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-sm md:text-base text-darkForeground hover:text-accent transition-colors font-hanken font-semibold block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm md:text-base text-darkSecondaryForeground font-hanken leading-relaxed">
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Google Map Embed with entrance animation */}
      <motion.div
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-72 rounded-sm overflow-hidden bg-surface-container border border-outline-variant shadow-2xl group cursor-pointer"
      >
        <iframe
          title="Yungola Build and Design — Plot 75, Block 3B, Ogunnusi Road, Grammar School Bus Stop, Ojodu, Lagos"
          src="https://maps.google.com/maps?q=Plot+75,+Block+3B,+Ogunnusi+Road,+Grammar+School+Bus+Stop,+Ojodu,+Lagos,+Nigeria&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(90%) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all duration-500 group-hover:filter-none"
        />
        <div className="absolute bottom-3 left-3 bg-surface-container backdrop-blur-sm px-3 py-1.5 rounded-sm border border-outline-variant pointer-events-none z-10">
          <span className="text-[10px] text-accent uppercase tracking-widest font-montserrat font-bold block">
            Lagos Office
          </span>
          <span className="text-[9px] text-on-surface-variant font-hanken block mt-0.5">
            Plot 75, Block 3B, Ogunnusi Rd, Ojodu
          </span>
        </div>
      </motion.div>

      {/* Direct Social Triggers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="space-y-4 pt-4 border-t border-outline-variant"
      >
        <span className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
          Instant Communication
        </span>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/23480541708584"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#25D366] text-[#1f2226] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-[#20bc5a] hover:text-white transition-all duration-300 shadow-lg cursor-pointer font-montserrat hover:translate-y-[-2px]"
          >
            <MessageSquare size={18} /> {directory.whatsappLabel}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-instagram-btn"
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-surface-container border border-outline-variant text-darkForeground text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:border-accent hover:text-accent transition-all duration-300 shadow-lg cursor-pointer font-montserrat hover:translate-y-[-2px]"
          >
            {directory.instagramLabel}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
