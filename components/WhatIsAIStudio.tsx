"use client";

import { motion } from "framer-motion";
import { Network, Zap, Code2, Users, MessageSquare, Database, FileCode, Shield, Bot, Layers } from "lucide-react";

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

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-20"
        >
          {/* Label */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 tracking-widest uppercase">
              Platform Architecture
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-blue-900/5 to-cyan-900/5 rounded-3xl pointer-events-none" />

            {/* Layer 1: Users */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 px-8 py-3.5 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-400/20 to-gray-600/20 border border-white/15 flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-300" />
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">Enterprise Users</span>
                <div className="flex items-center gap-1 ml-2">
                  {["Business", "Dev", "Admin"].map((role) => (
                    <span key={role} className="text-[10px] text-gray-500 border border-white/10 rounded px-1.5 py-0.5">
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Connector: Users → MCP */}
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-px h-5 bg-gradient-to-b from-white/20 to-purple-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
                <div className="w-px h-5 bg-gradient-to-b from-purple-500/60 to-purple-500/80" />
                <svg width="10" height="6" viewBox="0 0 10 6" className="text-purple-400/80">
                  <path d="M5 6L0 0h10z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Layer 2: MCP Gateway */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="relative w-full max-w-2xl px-10 py-5 rounded-2xl border border-purple-500/40 bg-purple-500/[0.07] backdrop-blur-sm overflow-hidden"
              >
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 pointer-events-none" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-50 blur-sm pointer-events-none" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/30 flex items-center justify-center">
                      <Layers className="w-4.5 h-4.5 text-purple-300" style={{ width: "18px", height: "18px" }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">MCP Gateway</p>
                      <p className="text-[10px] text-purple-300/70">Model Context Protocol · AI Orchestration Layer</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    {["Routing", "Auth", "Context", "Streaming"].map((tag, i) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full border font-medium"
                        style={{
                          borderColor: ["rgba(139,92,246,0.4)", "rgba(59,130,246,0.4)", "rgba(6,182,212,0.4)", "rgba(139,92,246,0.3)"][i],
                          color: ["rgb(196,181,253)", "rgb(147,197,253)", "rgb(103,232,249)", "rgb(167,139,250)"][i],
                          background: ["rgba(139,92,246,0.08)", "rgba(59,130,246,0.08)", "rgba(6,182,212,0.08)", "rgba(139,92,246,0.06)"][i],
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Connector: MCP → 3 columns */}
            <div className="flex justify-center mb-4">
              <div className="relative w-full max-w-2xl h-10">
                {/* vertical stem */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-5 bg-gradient-to-b from-purple-500/80 to-purple-400/60" />
                {/* horizontal bar */}
                <div className="absolute left-[16.5%] right-[16.5%] top-5 h-px bg-gradient-to-r from-blue-500/40 via-purple-400/60 to-cyan-500/40" />
                {/* three drops */}
                {["16.5%", "50%", "83.5%"].map((left, i) => (
                  <div key={i} className="absolute top-5" style={{ left }}>
                    <div className="-translate-x-1/2 flex flex-col items-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["rgb(196,181,253)", "rgb(147,197,253)", "rgb(103,232,249)"][i] }} />
                      <div className="w-px h-4 mt-0.5" style={{ background: `linear-gradient(to bottom, ${["rgb(139,92,246)", "rgb(59,130,246)", "rgb(6,182,212)"][i]}80, ${["rgb(139,92,246)", "rgb(59,130,246)", "rgb(6,182,212)"][i]}40)` }} />
                      <svg width="8" height="5" viewBox="0 0 10 6">
                        <path d="M5 6L0 0h10z" fill={["rgb(139,92,246)", "rgb(59,130,246)", "rgb(6,182,212)"][i]} fillOpacity="0.7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 3: Three Audience Groups */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Business Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group relative rounded-2xl border border-purple-500/25 bg-purple-500/[0.05] p-5 hover:border-purple-500/50 transition-all duration-300 cursor-default"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(139,92,246,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Business Users</p>
                    <p className="text-[10px] text-purple-400/70">HR · Finance · Ops</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Teams Bot", sub: "Paycheck & Leave" },
                    { label: "Copilot Integration", sub: "M365 Assistant" },
                    { label: "NL SQL Execution", sub: "Plain-English Queries" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-gray-200">{item.label}</p>
                        <p className="text-[10px] text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Developers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.72 }}
                className="group relative rounded-2xl border border-blue-500/25 bg-blue-500/[0.05] p-5 hover:border-blue-500/50 transition-all duration-300 cursor-default"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(59,130,246,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <FileCode className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Developers</p>
                    <p className="text-[10px] text-blue-400/70">PeopleSoft · App Eng</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "AI Code Analyzer", sub: "PeopleCode Review" },
                    { label: "Classic → Fluid", sub: "UI Conversion" },
                    { label: "Dev Copilot", sub: "Context-Aware Assist" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-gray-200">{item.label}</p>
                        <p className="text-[10px] text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Admins */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.84 }}
                className="group relative rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.05] p-5 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(6,182,212,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Admins</p>
                    <p className="text-[10px] text-cyan-400/70">DBAs · PeopleSoft Ops</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "SQL Assistant", sub: "Query Intelligence" },
                    { label: "Self-Healing psadmin", sub: "Auto-Remediation" },
                    { label: "Health Monitor", sub: "System Diagnostics" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-gray-200">{item.label}</p>
                        <p className="text-[10px] text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom: PeopleSoft Systems row */}
            <div className="flex justify-center mt-4">
              <div className="relative w-full max-w-2xl h-10">
                {/* three rises */}
                {["16.5%", "50%", "83.5%"].map((left, i) => (
                  <div key={i} className="absolute bottom-0" style={{ left }}>
                    <div className="-translate-x-1/2 flex flex-col items-center">
                      <svg width="8" height="5" viewBox="0 0 10 6" className="rotate-180">
                        <path d="M5 6L0 0h10z" fill={["rgb(139,92,246)", "rgb(59,130,246)", "rgb(6,182,212)"][i]} fillOpacity="0.5" />
                      </svg>
                      <div className="w-px h-4" style={{ background: `linear-gradient(to top, ${["rgb(139,92,246)", "rgb(59,130,246)", "rgb(6,182,212)"][i]}50, transparent)` }} />
                    </div>
                  </div>
                ))}
                {/* horizontal bar */}
                <div className="absolute left-[16.5%] right-[16.5%] bottom-0 h-px bg-gradient-to-r from-purple-500/30 via-blue-400/50 to-cyan-500/30" />
              </div>
            </div>

            <div className="flex justify-center mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-center gap-3 px-8 py-3.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-400/25 flex items-center justify-center">
                  <Database className="w-4 h-4 text-orange-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">PeopleSoft Enterprise Systems</p>
                  <p className="text-[10px] text-gray-500">HCM · Finance · Campus Solutions · CI/REST/SOAP APIs</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
