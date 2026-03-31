"use client";

import { motion } from "framer-motion";
import { FileCode, MessageSquare, Bot, Shield, Database, Puzzle, Github, ExternalLink } from "lucide-react";

const tools = [
  {
    icon: FileCode,
    title: "AI Code Analyzer",
    description:
      "Automatic documentation and logic extraction for PeopleCode. Understand complex business logic instantly.",
    gradient: "from-purple-600 to-violet-600",
    glow: "rgba(139,92,246,0.35)",
    border: "hover:border-purple-500/50",
    tag: "Available",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    icon: MessageSquare,
    title: "Teams Bot Integration",
    description:
      "Query PeopleSoft data and trigger workflows directly from Microsoft Teams with natural language.",
    gradient: "from-blue-600 to-blue-500",
    glow: "rgba(59,130,246,0.35)",
    border: "hover:border-blue-500/50",
    tag: "Available",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    icon: Bot,
    title: "Copilot Integration",
    description:
      "GitHub Copilot bridge for natural language queries against PeopleSoft — ask questions, get answers.",
    gradient: "from-indigo-600 to-purple-600",
    glow: "rgba(99,102,241,0.35)",
    border: "hover:border-indigo-500/50",
    tag: "Beta",
    tagColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  {
    icon: Shield,
    title: "APIM Gateway",
    description:
      "Secure enterprise API routing and management. Rate limiting, auth, and routing for all AI interactions.",
    gradient: "from-cyan-600 to-teal-600",
    glow: "rgba(6,182,212,0.35)",
    border: "hover:border-cyan-500/50",
    tag: "Coming Soon",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    icon: Database,
    title: "SQL Tuning Assistant",
    description:
      "AI-powered SQL performance analysis for PeopleSoft queries. Identify bottlenecks and get optimization suggestions.",
    gradient: "from-orange-600 to-amber-600",
    glow: "rgba(234,88,12,0.35)",
    border: "hover:border-orange-500/50",
    tag: "Coming Soon",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    icon: Puzzle,
    title: "Integration Toolkit",
    description:
      "Modular adapters to connect any enterprise system — SAP, Workday, ServiceNow — to the AI Studio gateway.",
    gradient: "from-pink-600 to-rose-600",
    glow: "rgba(236,72,153,0.35)",
    border: "hover:border-pink-500/50",
    tag: "Planned",
    tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
];

export default function ToolsGrid() {
  return (
    <section id="tools" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

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
            Tools & Modules
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Power PeopleSoft
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
            A growing ecosystem of tools, each designed to solve real enterprise problems with
            real AI capabilities.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`group relative flex flex-col p-7 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${tool.border}`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${tool.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${tool.gradient}`}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tool.gradient} opacity-20 group-hover:opacity-40 blur-sm transition-opacity`}
                    />
                    <Icon className="relative w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${tool.tagColor}`}
                  >
                    {tool.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {tool.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href="https://github.com/aangusamy/peoplesoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-lg transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 border border-purple-500/25 hover:border-purple-500/50 px-3 py-1.5 rounded-lg transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Learn More
                  </a>
                </div>

                {/* Background gradient accent */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${tool.gradient} opacity-[0.04] rounded-2xl pointer-events-none group-hover:opacity-[0.08] transition-opacity`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
