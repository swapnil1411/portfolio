"use client";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "Frontend",
    color: "#00d4ff",
    borderClass: "border-cyan-500/20",
    bgClass: "bg-cyan-500/5",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    name: "Backend",
    color: "#a78bfa",
    borderClass: "border-violet-500/20",
    bgClass: "bg-violet-500/5",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "GoLang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Java 17", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    name: "Cloud & Data",
    color: "#fbbf24",
    borderClass: "border-amber-500/20",
    bgClass: "bg-amber-500/5",
    skills: [
      { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
  },
  {
    name: "DevOps",
    color: "#34d399",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-emerald-500/5",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
  {
    name: "Testing",
    color: "#f87171",
    borderClass: "border-red-500/20",
    bgClass: "bg-red-500/5",
    skills: [
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
      { name: "Pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
      { name: "Allure", icon: null },
    ],
  },
];

function SkillIcon({ name, icon, color }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ background: `${color}10`, border: `1px solid ${color}25` }}
      >
        {icon ? (
          <img
            src={icon}
            alt={name}
            width={28}
            height={28}
            className="object-contain"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <span
          className="text-xs font-bold hidden items-center justify-center w-full h-full"
          style={{ color }}
        >
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="text-[10px] text-[#8892b0] group-hover:text-[#ccd6f6] transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`rounded-xl p-5 border ${category.borderClass} ${category.bgClass} hover:border-opacity-50 transition-all duration-300`}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className="w-1 h-5 rounded-full"
          style={{ background: category.color }}
        />
        <h3 className="text-sm font-semibold text-[#ccd6f6]">{category.name}</h3>
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-4">
        {category.skills.map((skill) => (
          <SkillIcon
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad max-w-6xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="section-label">What I work with</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6]">
          Skills &amp; Technologies
        </h2>
        <p className="mt-3 text-[#8892b0] text-sm max-w-xl mx-auto">
          Five years of full-stack experience spanning frontend, backend, cloud, and data infrastructure.
        </p>
      </motion.div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {CATEGORIES.map((cat, i) => (
          <CategoryCard key={cat.name} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
