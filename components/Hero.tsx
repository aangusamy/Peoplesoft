"use client";

import { motion, type TargetAndTransition, type Transition } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

function AnimatedBlob({
  className,
  animate,
  transition,
}: {
  className: string;
  animate: TargetAndTransition;
  transition: Transition;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
      animate={animate}
      transition={transition}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <AnimatedBlob
        className="w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <AnimatedBlob
        className="w-[500px] h-[500px] bg-blue-600/15 top-1/3 -right-20"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <AnimatedBlob
        className="w-[400px] h-[400px] bg-cyan-500/10 -bottom-20 left-1/3"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-medium text-purple-300 tracking-wider uppercase">
              AI Gateway for Enterprise
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
        >
          <span className="text-white">PeopleSoft</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Studio
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mt-6 mb-3"
        >
          AI Gateway for Enterprise Systems
        </motion.p>

        {/* Tagline */}
        <motion.div {...fadeUp(0.45)} className="flex items-center justify-center gap-2 mb-10">
          {["Connect.", "Analyze.", "Automate."].map((word, i) => (
            <span key={word}>
              <span
                className={`text-base sm:text-lg font-semibold ${
                  i === 0
                    ? "text-purple-400"
                    : i === 1
                    ? "text-blue-400"
                    : "text-cyan-400"
                }`}
              >
                {word}
              </span>
              {i < 2 && <span className="mx-1 text-gray-600">·</span>}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.55)}
          className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed mb-10"
        >
          The central MCP-style gateway that connects AI models to PeopleSoft and enterprise
          systems. Built for developers, enterprise architects, and teams who demand more.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#tools"
            className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <span className="relative">Explore Tools</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <span className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-gray-500 border border-white/10 cursor-default select-none text-sm">
            Open Source — Code Coming Soon
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "6+", label: "AI Tools" },
            { value: "MCP", label: "Gateway Protocol" },
            { value: "100%", label: "Open Source" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
