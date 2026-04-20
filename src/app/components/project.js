"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import drivingTest from "../../../public/drivingTest.png";
import ems from "../../../public/Employee.png";

const PROJECTS = [
  {
    title: "Driving Test Management System",
    featured: true,
    description:
      "Multi-account MVC web application with distinct role-based access for Admin, Driver, and Examiner. Streamlines the end-to-end driving test appointment process.",
    bullets: [
      "Role-based access control: Admin, Driver, and Examiner with distinct functionality",
      "15+ RESTful API endpoints built with Node.js and Express.js",
      "MongoDB database with EJS server-side rendering",
      "Admins manage schedules; Examiners conduct and record test results",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC"],
    github: "https://github.com/swapnil1411/DrivingTest",
    demo: "https://driving-test-iodx.onrender.com",
    image: drivingTest,
    accentColor: "#00d4ff",
  },
  {
    title: "Employee Management System",
    featured: false,
    description:
      "Full-featured HR tool built with React.js, GraphQL, and MongoDB. Enables efficient CRUD operations for employee records with a responsive Tailwind CSS UI.",
    bullets: [
      "Add, update, delete, search, and filter employee records",
      "GraphQL API for optimized, flexible data retrieval",
      "Responsive UI built with Tailwind CSS",
      "Designed to enhance HR team productivity",
    ],
    tech: ["React.js", "GraphQL", "MongoDB", "Tailwind CSS", "Node.js"],
    github: "https://github.com/swapnil1411/Employee-Management-System",
    demo: "https://emsfrontend-one.vercel.app/",
    image: ems,
    accentColor: "#a78bfa",
  },
];

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{ background: `${project.accentColor}04` }}
    >
      {/* Featured label */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#00d4ff]/15 text-[#00d4ff] border border-[#00d4ff]/30 tracking-wide uppercase">
          Featured
        </div>
      )}

      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
        {/* Image */}
        <div className="lg:w-1/2 relative overflow-hidden bg-[#0d1627]">
          <div
            className="absolute inset-0 z-10 opacity-30 transition-opacity duration-300 group-hover:opacity-10"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}30, transparent)` }}
          />
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-52 lg:h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-7 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-[#8892b0] text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <ul className="space-y-2 mb-6">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-xs text-[#8892b0]">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: project.accentColor }}>▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium px-2.5 py-0.5 rounded-full border"
                  style={{
                    background: `${project.accentColor}10`,
                    borderColor: `${project.accentColor}25`,
                    color: project.accentColor,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#8892b0] hover:text-[#ccd6f6] transition-colors"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <span className="text-white/20">|</span>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
              style={{ color: project.accentColor }}
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad max-w-6xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="section-label">Things I&apos;ve built</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6]">
          Featured Projects
        </h2>
        <p className="mt-3 text-[#8892b0] text-sm max-w-xl mx-auto">
          A selection of projects showcasing full-stack development across different domains.
        </p>
      </motion.div>

      <div className="space-y-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* GitHub link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/swapnil1411"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#00d4ff] transition-colors"
        >
          See more on GitHub
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
