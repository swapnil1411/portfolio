"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#hire-me", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLink(e, "#home")}
          className="text-lg font-bold gradient-text tracking-wide"
        >
          SN
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="text-sm text-[#8892b0] hover:text-[#00d4ff] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="https://drive.google.com/file/d/1Tb8yjSkZ6I8ihS1dwqeeYL8IL0KaNlmO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#00d4ff] border border-[#00d4ff]/50 rounded-md hover:bg-[#00d4ff]/10 transition-colors duration-200"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#00d4ff] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#00d4ff] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#00d4ff] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
              className="text-sm text-[#8892b0] hover:text-[#00d4ff] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1Tb8yjSkZ6I8ihS1dwqeeYL8IL0KaNlmO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#00d4ff] border border-[#00d4ff]/40 rounded-md px-3 py-2 text-center hover:bg-[#00d4ff]/10 transition-colors"
          >
            Resume ↗
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
