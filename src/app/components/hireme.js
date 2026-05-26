"use client";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#00d4ff" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    price: "$25/hour",
    delivery: "React Native, Flutter, iOS, Android",
    color: "#00d4ff",
    borderClass: "border-cyan-500/20 hover:border-cyan-500/50",
    bgClass: "bg-cyan-500/5",
    includes: [
      "Cross-platform apps with React Native or Flutter",
      "Native iOS and Android feature development",
      "Clean, responsive mobile UI implementation",
      "API integration, auth, storage, and push notifications",
      "Performance fixes, crash resolution, and app store support",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Website Development",
    price: "$20/hour",
    delivery: "React, Next.js, frontend, backend",
    color: "#a78bfa",
    borderClass: "border-violet-500/20 hover:border-violet-500/50",
    bgClass: "bg-violet-500/5",
    includes: [
      "Modern websites and dashboards with React or Next.js",
      "Responsive UI built for mobile, tablet, and desktop",
      "REST or GraphQL API integration",
      "Landing pages, business sites, and admin tools",
      "Bug fixes, redesigns, and performance improvements",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "DevOps & Cloud Support",
    price: "$20/hour",
    delivery: "AWS, GCP, Docker, CI/CD",
    color: "#fbbf24",
    borderClass: "border-amber-500/20 hover:border-amber-500/50",
    bgClass: "bg-amber-500/5",
    includes: [
      "Deployment setup for Vercel, AWS, GCP, or VPS",
      "Docker, environment config, and release workflows",
      "CI/CD pipelines and production troubleshooting",
      "Cloud infrastructure cleanup and cost-aware setup",
      "Monitoring, logging, and reliability improvements",
    ],
  },
];

export default function HireMe() {
  return (
    <section id="hire-me" className="section-pad max-w-6xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <p className="section-label">Open for work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6]">
          Work With Me
        </h2>
        <p className="mt-3 text-[#8892b0] text-sm max-w-xl mx-auto">
          I build reliable mobile apps, responsive websites, and production-ready deployment workflows for growing teams.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`rounded-xl p-6 border ${service.borderClass} ${service.bgClass} transition-all duration-300 flex flex-col`}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${service.color}12`, border: `1px solid ${service.color}25` }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-[#ccd6f6] mb-1">{service.title}</h3>

            {/* Price & delivery */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-sm font-semibold" style={{ color: service.color }}>
                {service.price}
              </span>
              <span className="text-[10px] text-[#8892b0] bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                {service.delivery}
              </span>
            </div>

            {/* Includes */}
            <ul className="space-y-2 flex-1">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#8892b0]">
                  <svg
                    className="mt-0.5 flex-shrink-0"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={service.color}
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="mailto:swapnilnanavati12@gmail.com?subject=Freelance%20Inquiry&body=Hi%20Swapnil%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
              className="mt-6 w-full text-center py-3 rounded-lg text-sm font-bold transition-all duration-200"
              style={{
                background: `${service.color}15`,
                border: `1px solid ${service.color}35`,
                color: service.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${service.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${service.color}15`;
              }}
            >
              Get a Free Quote →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Direct contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <a
          href="mailto:swapnilnanavati12@gmail.com?subject=Freelance%20Inquiry"
          className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/15 transition-all duration-200 text-sm font-semibold text-[#00d4ff]"
        >
          Email swapnilnanavati12@gmail.com
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
