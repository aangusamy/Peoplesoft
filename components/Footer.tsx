"use client";

import { motion } from "framer-motion";
import { Zap, Mail } from "lucide-react";

const navLinks = [
  { label: "Tools", href: "#tools" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-black/40 backdrop-blur-sm overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 pb-16 border-b border-white/8"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to bring AI to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              your enterprise?
            </span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            PeopleSoft AI Studio is open source and ready to deploy. Start connecting your systems
            with AI today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden cursor-default select-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-60" />
              <span className="relative">Open Source — Code Coming Soon</span>
            </span>
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-gray-300 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-600/30 rounded-lg blur-sm" />
                <Zap className="relative w-4 h-4 text-purple-400" />
              </div>
              <span className="font-bold text-sm">
                <span className="text-white">PeopleSoft</span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Studio
                </span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The AI Gateway for PeopleSoft and Enterprise Systems. Connect. Analyze. Automate.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:text-center"
          >
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Navigation
            </div>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:text-right"
          >
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Links
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-sm text-gray-500 cursor-default select-none sm:justify-end">
                GitHub — Code Coming Soon
              </span>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors sm:justify-end"
              >
                <Mail className="w-3.5 h-3.5" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} PeopleSoft AI Studio. Open Source.</span>
          <span className="flex items-center gap-1.5">
            Built by{" "}
            <span className="text-purple-400 font-semibold">Velu Angusamy</span>
            <span className="text-gray-700 mx-1">·</span>
            <span className="text-gray-500">Technical Architect — PeopleSoft HCM & AI</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
