"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 25, suffix: "+", label: "Expert Team Members" },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-darkBackground py-12 lg:py-14 relative overflow-hidden border-b border-outline-variant"
      aria-label="Company statistics"
    >
      {/* Subtle yellow glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-0 lg:divide-x lg:divide-outline-variant/30">
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center px-6 transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span
                className="text-4xl lg:text-5xl font-bold text-accent mb-1 font-montserrat"
                aria-label={`${value}${suffix} ${label}`}
              >
                <CountUp target={value} suffix={suffix} active={visible} />
              </span>
              <span
                className="text-xs text-on-surface-variant uppercase tracking-[0.15em] mt-1 font-montserrat"
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
