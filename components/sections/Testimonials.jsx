"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Yungola Build and Design transformed our vision into a home that exceeded every expectation. Their attention to detail and professionalism is unmatched.",
    name: "Adebayo Okonkwo",
    location: "Lagos, Nigeria",
    role: "Homeowner",
  },
  {
    id: 2,
    quote:
      "From design to final construction, the team was outstanding. They delivered our commercial complex on time and within budget. Highly recommended.",
    name: "Chioma Adeyemi",
    location: "Abuja, Nigeria",
    role: "Property Developer",
  },
  {
    id: 3,
    quote:
      "The renovation of our villa was breathtaking. Yungola's creative approach brought a completely new life to our space. Truly premium craftsmanship.",
    name: "Emmanuel Nwosu",
    location: "Port Harcourt, Nigeria",
    role: "Villa Owner",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[active];

  return (
    <section
      ref={ref}
      className="section-pad bg-[#FFF8DC]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-xs text-[#E0A800] uppercase tracking-[0.2em] mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Client Stories
        </p>
        <h2
          id="testimonials-heading"
          className={`text-3xl lg:text-5xl font-700 text-[#0D0D0D] mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div
          className={`transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Quote
            size={40}
            className="text-[#E0A800]/40 mx-auto mb-6"
            aria-hidden="true"
          />
          <p
            className="text-xl lg:text-2xl text-[#2C2C2C] italic leading-relaxed mb-8 min-h-[120px]"
            style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
            key={current.id}
          >
            "{current.quote}"
          </p>
          <div>
            <p
              className="font-600 text-[#0D0D0D]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {current.name}
            </p>
            <p
              className="text-sm text-[#6B7280] mt-1"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {current.role} · {current.location}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === i}
              aria-label={`View testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                active === i
                  ? "w-8 h-2 bg-[#E0A800]"
                  : "w-2 h-2 bg-[#E0A800]/30 hover:bg-[#E0A800]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
