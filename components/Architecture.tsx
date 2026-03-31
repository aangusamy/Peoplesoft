"use client";

import { motion } from "framer-motion";
import { User, Cpu, Server, Database, ChevronRight, Lock, Zap, Layers } from "lucide-react";

const nodes = [
  {
    icon: User,
    label: "User",
    sublabel: "Developer / Team",
    gradient: "from-purple-600 to-violet-600",
    glow: "#8b5cf6",
  },
  {
    icon: Cpu,
    label: "AI Studio",
    sublabel: "MCP Gateway",
    gradient: "from-blue-600 to-indigo-600",
    glow: "#3b82f6",
    highlight: true,
  },
  {
    icon: Server,
    label: "Gateway",
    sublabel: "APIM / Auth Layer",
    gradient: "from-cyan-600 to-teal-600",
    glow: "#06b6d4",
  },
  {
    icon: Database,
    label: "PeopleSoft",
    sublabel: "Enterprise Systems",
    gradient: "from-orange-600 to-amber-600",
    glow: "#f97316",
  },
];

const features = [
  { icon: Lock, label: "Secure Access", description: "OAuth2, JWT, and enterprise SSO" },
  { icon: Zap, label: "AI-Driven", description: "LLM-powered interactions" },
  { icon: Layers, label: "Modular", description: "Plug in any tool or system" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
            Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            How{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Studio
            </span>{" "}
            Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
            A clean, secure, and modular architecture that sits between your AI tools and
            enterprise PeopleSoft systems.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-16"
        >
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="flex flex-col md:flex-row items-center">
                {/* Node card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative group flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 min-w-[140px] ${
                    node.highlight
                      ? "border-blue-500/50 bg-blue-950/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                  style={{
                    boxShadow: node.highlight
                      ? `0 0 40px ${node.glow}30`
                      : undefined,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${node.glow}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = node.highlight
                      ? `0 0 40px ${node.glow}30`
                      : "none";
                  }}
                >
                  {/* Icon container */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br ${node.gradient}`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${node.gradient} opacity-20 blur-sm`}
                    />
                    <Icon className="relative w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">{node.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{node.sublabel}</span>

                  {/* Pulse ring for AI Studio */}
                  {node.highlight && (
                    <div className="absolute -inset-1 rounded-2xl border border-blue-500/30 animate-pulse pointer-events-none" />
                  )}
                </motion.div>

                {/* Arrow */}
                {i < nodes.length - 1 && (
                  <div className="flex items-center justify-center mx-3 my-2 md:my-0">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 md:block rotate-90 md:rotate-0" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Feature tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{feature.label}</div>
                  <div className="text-xs text-gray-500">{feature.description}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
