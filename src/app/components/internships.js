"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Psyncopate Technologies",
    role: "Senior Consultant",
    period: "Jun 2025 – Present",
    current: true,
    color: "#00d4ff",
    description:
      "Working on enterprise Kafka migration platforms and microservices for large-scale production systems.",
    projects: [
      {
        name: "Easy Button – Kafka Migration Platform",
        period: "Jun – Aug 2025",
        bullets: [
          "Built production Next.js 14 app for Apache Kafka migrations from AWS MSK to Confluent Cloud using MirrorMaker 2.0",
          "Infrastructure as Code with Terraform: VPC, MSK, EC2, Confluent Cloud ACLs and RBAC provisioning",
          "Integrated Prometheus/Grafana monitoring stack and Docker Compose dev environment",
        ],
        tech: ["Next.js 14", "TypeScript", "Terraform", "AWS MSK", "Confluent Cloud", "KafkaJS", "Prometheus", "Grafana", "Docker"],
      },
      {
        name: "UBRN – Kafka Microservices & Test Automation",
        period: "Aug – Nov 2025",
        bullets: [
          "Built FastAPI test automation framework with Pytest/Allure for Kafka pipeline validation — 18+ test cases across 4 phases",
          "Built reusable Kafka producer/consumer library with Avro, Schema Registry, and Dead Letter Topic handling",
          "Built GiftCard Label Service processing XML with XSD validation and XSL transforms",
        ],
        tech: ["Python", "FastAPI", "Confluent Kafka", "Pytest", "Allure", "Avro", "Schema Registry", "GCS", "Pydantic", "lxml"],
      },
      {
        name: "Xkafka – Migration Platform",
        period: "Nov 2025 – Present",
        bullets: [
          "Frontend support for Next.js enterprise Kafka migration tooling",
          "Built Java/Spring Boot Data Replication Service for streaming data across cloud environments",
          "Built custom Go metrics collector for real-time Kafka migration monitoring dashboards",
        ],
        tech: ["Java 17", "Spring Boot 3", "Go", "Next.js", "Spring Kafka", "Avro", "TIBCO EMS", ".NET 8", "C#", "FastAPI"],
      },
    ],
  },
  {
    company: "Community of Guardians",
    role: "Software Developer (Volunteer)",
    period: "Jan 2024 – May 2025",
    color: "#a78bfa",
    description:
      "Built responsive web applications and improved CMS workflows for a nonprofit organization.",
    bullets: [
      "React component-based architecture for responsive web apps → 30% improvement in page load performance",
      "Reduced content management time by 40% via efficient Strapi CMS backend integration",
      "Collaborated with design team to implement pixel-perfect UI from Figma designs",
    ],
    tech: ["React.js", "Node.js", "Tailwind CSS", "Strapi"],
  },
  {
    company: "HuddleUp",
    role: "Software Developer",
    period: "May 2022 – Jan 2023",
    color: "#34d399",
    description:
      "Full-stack developer on a social networking platform — improved performance, fixed bugs, and built testing suite.",
    bullets: [
      "Fixed concurrency issues and introduced cleanup functions → 50% reduction in load times",
      "Resolved Context API issues that were causing 40% of platform-wide problems",
      "Built Playwright test suite → 30% reliability increase across the platform",
      "Implemented scroll-based pagination for timeline pages",
    ],
    tech: ["Next.js", "React.js", "GoLang", "Tailwind CSS", "Playwright"],
  },
  {
    company: "Clientjoy",
    role: "Jr. Software Developer",
    period: "Jan 2022 – Apr 2022",
    color: "#fbbf24",
    description:
      "Mobile and desktop development — fixed critical app crashes and built cross-platform Electron apps.",
    bullets: [
      "Fixed all React Native crashes on Android and iOS platforms, eliminating client-facing errors",
      "Resolved 50+ API call issues caused by backend data flow changes",
      "Built Windows and macOS Electron apps with full macOS Notarization compliance",
      "Designed Vue.js web app UI with Bootstrap components from Figma mockups",
    ],
    tech: ["React Native", "Vue.js", "Bootstrap", "Electron", "Figma"],
  },
];

function TechPill({ label, color }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border whitespace-nowrap"
      style={{
        background: `${color}12`,
        borderColor: `${color}30`,
        color,
      }}
    >
      {label}
    </span>
  );
}

function ExperienceEntry({ exp, index, isLast }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative flex gap-5"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1.5 ring-4 ring-[#0a0f1e] z-10 flex-shrink-0"
          style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}60` }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)`, minHeight: "40px" }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-8 rounded-xl border transition-all duration-300 cursor-pointer"
        style={{
          background: `${exp.color}05`,
          borderColor: expanded ? `${exp.color}30` : "rgba(255,255,255,0.06)",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Card header */}
        <div className="p-5 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-[#ccd6f6]">{exp.company}</h3>
              {exp.current && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25 font-semibold">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm font-medium mb-1" style={{ color: exp.color }}>
              {exp.role}
            </p>
            <p className="text-xs text-[#8892b0]">{exp.period}</p>
          </div>
          <div
            className="flex-shrink-0 mt-1 text-[#8892b0] transition-transform duration-300"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 border-t border-white/5">
                <p className="text-[#8892b0] text-sm mt-4 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Sub-projects (Psyncopate has nested projects) */}
                {exp.projects ? (
                  <div className="space-y-5">
                    {exp.projects.map((proj) => (
                      <div key={proj.name} className="rounded-lg p-4 bg-white/[0.03] border border-white/5">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <h4 className="text-sm font-semibold text-[#ccd6f6]">{proj.name}</h4>
                          <span className="text-[10px] text-[#8892b0]">{proj.period}</span>
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {proj.bullets.map((b, i) => (
                            <li key={i} className="text-xs text-[#8892b0] leading-relaxed flex gap-2">
                              <span className="mt-1 flex-shrink-0 text-[#00d4ff]">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tech.map((t) => (
                            <TechPill key={t} label={t} color={exp.color} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets?.map((b, i) => (
                        <li key={i} className="text-xs text-[#8892b0] leading-relaxed flex gap-2">
                          <span className="mt-1 flex-shrink-0" style={{ color: exp.color }}>▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech?.map((t) => (
                        <TechPill key={t} label={t} color={exp.color} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad max-w-4xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="section-label">Where I&apos;ve worked</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6]">
          Work Experience
        </h2>
        <p className="mt-3 text-[#8892b0] text-sm max-w-xl mx-auto">
          Click any entry to expand details. Currently open for freelance engagements.
        </p>
      </motion.div>

      {/* Timeline */}
      <div>
        {EXPERIENCES.map((exp, i) => (
          <ExperienceEntry
            key={exp.company}
            exp={exp}
            index={i}
            isLast={i === EXPERIENCES.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
