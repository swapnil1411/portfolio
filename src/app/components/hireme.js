"use client";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#00d4ff" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Full-Stack Web Apps",
    price: "$500 – $5,000",
    delivery: "2 – 6 weeks",
    color: "#00d4ff",
    borderClass: "border-cyan-500/20 hover:border-cyan-500/50",
    bgClass: "bg-cyan-500/5",
    includes: [
      "React / Next.js 14 frontend",
      "TypeScript & Tailwind CSS",
      "REST or GraphQL API backend",
      "Database design & integration",
      "Authentication & authorization",
      "Deployment to Vercel / AWS",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "API & Microservices",
    price: "$300 – $3,000",
    delivery: "1 – 4 weeks",
    color: "#a78bfa",
    borderClass: "border-violet-500/20 hover:border-violet-500/50",
    bgClass: "bg-violet-500/5",
    includes: [
      "FastAPI or Spring Boot services",
      "REST / GraphQL / gRPC design",
      "Python & Java 17 backends",
      "Docker containerization",
      "Automated test suite (Pytest / JUnit)",
      "API documentation (OpenAPI)",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & Kafka Solutions",
    price: "$800 – $8,000",
    delivery: "2 – 8 weeks",
    color: "#fbbf24",
    borderClass: "border-amber-500/20 hover:border-amber-500/50",
    bgClass: "bg-amber-500/5",
    includes: [
      "Kafka producer/consumer pipelines",
      "Confluent Cloud / AWS MSK setup",
      "Terraform IaC (VPC, EC2, MSK)",
      "Avro schema design & Schema Registry",
      "Prometheus/Grafana monitoring",
      "GCP / AWS cloud architecture",
    ],
  },
];

const PLATFORMS = [
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~YOUR_UPWORK_ID",
    color: "#14a800",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#14a800">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/YOUR_FIVERR_USERNAME",
    color: "#1dbf73",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1dbf73">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c-.95 0-1.370.48-1.370 1.58v3.96h-2.06V9.876h-2.06v7.547h-2.06V9.876H10.72v7.547h-2.06V11.96c0-1.1-.42-1.58-1.37-1.58H5.44v-2.1h1.27c.86 0 1.37.43 1.37 1.32v.25h.04a2.43 2.43 0 0 1 2.24-1.57h2.04V6.52c0-.77-.34-1.1-1.1-1.1H5.14c-.77 0-1.1.33-1.1 1.1v1.76H2.06V6.49C2.06 5.19 3.3 4 4.6 4h7c1.3 0 2.54 1.19 2.54 2.49v.77h2.04c1.79 0 3.1 1.31 3.1 3.1v.25h.04c.36-.96 1.12-1.57 2.24-1.57h.43v2.1h-.43c-.75 0-1.1.36-1.1 1.14v3.79h2.06v-3.79c0-1.78 1.08-3.14 2.83-3.14h2.02v2.1z" />
      </svg>
    ),
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
          I&apos;m available for freelance contracts on Upwork and Fiverr. Let&apos;s build something great together.
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
              href="mailto:Snanavati@psyncopate.com?subject=Freelance%20Inquiry&body=Hi%20Swapnil%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
              className="mt-6 w-full text-center py-2.5 rounded-lg text-xs font-bold transition-all duration-200"
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

      {/* Platform links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-xs text-[#8892b0] mb-4">Find me on freelance platforms</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 text-sm font-medium text-[#ccd6f6]"
            >
              {p.icon}
              {p.name}
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-[#8892b0]">
          ↑ Replace the placeholder URLs with your actual Upwork and Fiverr profile links
        </p>
      </motion.div>
    </section>
  );
}
