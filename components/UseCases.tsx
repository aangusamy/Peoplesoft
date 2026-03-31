"use client";

import { motion } from "framer-motion";
import { CalendarCheck, FileSearch, BrainCircuit, Share2 } from "lucide-react";

const useCases = [
  {
    icon: CalendarCheck,
    title: "Check Leave Balance Instantly",
    description:
      "Ask your Teams bot 'How many vacation days do I have left?' and get an instant answer pulled directly from PeopleSoft HR.",
    color: "purple",
    gradient: "from-purple-600/20 to-violet-600/20",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    accentBar: "bg-gradient-to-b from-purple-500 to-violet-500",
  },
  {
    icon: FileSearch,
    title: "Analyze PeopleCode Automatically",
    description:
      "Upload a PeopleCode component and get AI-generated documentation, logic summaries, and refactoring suggestions in seconds.",
    color: "blue",
    gradient: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    accentBar: "bg-gradient-to-b from-blue-500 to-indigo-500",
  },
  {
    icon: BrainCircuit,
    title: "Query Enterprise Data Using AI",
    description:
      "Use natural language to query PeopleSoft tables, run reports, and extract insights — no SQL knowledge required.",
    color: "cyan",
    gradient: "from-cyan-600/20 to-teal-600/20",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    accentBar: "bg-gradient-to-b from-cyan-500 to-teal-500",
  },
  {
    icon: Share2,
    title: "Integrate with Teams & Copilot",
    description:
      "Embed AI Studio directly into your Microsoft Teams workspace or GitHub Copilot chat — enterprise AI where your team already works.",
    color: "pink",
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
    accentBar: "bg-gradient-to-b from-pink-500 to-rose-500",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

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
            Real Use Cases
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            AI in Action,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Right Now
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
            Real problems solved by real AI. These are the workflows teams are running today with
            PeopleSoft AI Studio.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative flex items-start gap-5 p-7 rounded-2xl border ${useCase.border} bg-gradient-to-br ${useCase.gradient} backdrop-blur-sm transition-all duration-300 overflow-hidden`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(139,92,246,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${useCase.accentBar} rounded-l-2xl`} />

                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl border ${useCase.border} bg-black/30 flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${useCase.iconColor}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
                </div>

                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
