"use client";

import { motion } from "framer-motion";
import { Network, Zap, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Network,
    color: "purple",
    title: "Central Hub",
    description:
      "A unified platform that brings all PeopleSoft AI tooling under one roof. No more scattered scripts or disconnected integrations.",
    gradient: "from-purple-600 to-purple-400",
    glow: "rgba(139,92,246,0.3)",
    border: "hover:border-purple-500/50",
  },
  {
    icon: Zap,
    color: "blue",
    title: "MCP Gateway",
    description:
      "Model Context Protocol bridge that enables AI models to securely read, query, and interact with enterprise PeopleSoft data in real time.",
    gradient: "from-blue-600 to-blue-400",
    glow: "rgba(59,130,246,0.3)",
    border: "hover:border-blue-500/50",
  },
  {
    icon: Code2,
    color: "cyan",
    title: "Built for Devs",
    description:
      "Developer-first APIs, clean documentation, and modular integrations. Built to extend, customize, and deploy at enterprise scale.",
    gradient: "from-cyan-600 to-cyan-400",
    glow: "rgba(6,182,212,0.3)",
    border: "hover:border-cyan-500/50",
  },
];

export default function WhatIsAIStudio() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
            What is AI Studio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            The Intelligence Layer for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              PeopleSoft
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            AI Studio is the missing bridge between modern AI capabilities and enterprise
            PeopleSoft systems — secure, extensible, and production-ready.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className={`group relative p-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${pillar.border} cursor-default`}
                style={{
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${pillar.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${pillar.gradient} bg-opacity-20`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradient} opacity-15 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <Icon className="relative w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${pillar.gradient} opacity-5 rounded-2xl pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
