"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Tools", href: "#tools" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const handleGithubClick = () => {
    setShowNotice(true);
    setTimeout(() => setShowNotice(false), 2500);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-600/30 rounded-lg blur-sm group-hover:bg-purple-500/50 transition-all duration-300" />
              <Zap className="relative w-4 h-4 text-purple-400" />
            </div>
            <span className="font-bold text-sm tracking-tight">
              <span className="text-white">PeopleSoft</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Studio
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:text-purple-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 relative">
            <button
              onClick={handleGithubClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-lg hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300"
            >
              Open Source
            </button>
            <AnimatePresence>
              {showNotice && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-12 right-0 z-50 whitespace-nowrap px-3 py-2 rounded-lg border border-white/15 bg-[#13131f] text-xs text-gray-300 shadow-xl"
                >
                  Open Source — Code Coming Soon
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-gray-400 hover:text-purple-300 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileOpen(false); handleGithubClick(); }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-lg w-full justify-center mt-2"
              >
                Open Source — Code Coming Soon
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
