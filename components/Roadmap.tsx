"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: "Now",
    status: "current",
    statusLabel: "Live — v2.1",
    dot: "bg-green-500",
    dotGlow: "shadow-[0_0_12px_rgba(34,197,94,0.8)]",
    labelColor: "text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/5",
    icon: CheckCircle2,
    iconColor: "text-green-400",
    items: [
      {
        label: "PeopleSoft AI Code Analyzer",
        description: "Offline-first static analysis — 100,000+ PS objects indexed, 5-layer coverage (XML · SQR · COBOL · Oracle DB · Security). $0.003 per AI query. Anthropic · OpenAI · Azure · Gemini support.",
      },
      {
        label: "Teams Bot Integration",
        description: "Microsoft Teams Bot + FastAPI middleware — natural language leave balance & payslip queries. Zero-trust identity via Azure AD + MS Graph EMPLID resolution. JWT-secured, stateless, horizontally scalable.",
      },
      {
        label: "Microsoft Copilot Integration",
        description: "3 architecture options documented: Power Automate · APIM Policies · FastAPI Middleware (recommended). services.json config-driven — add new PeopleSoft services with zero code changes.",
      },
    ],
  },
  {
    phase: "Next",
    status: "building",
    statusLabel: "In Progress",
    dot: "bg-blue-500",
    dotGlow: "shadow-[0_0_12px_rgba(59,130,246,0.8)]",
    labelColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    icon: Clock,
    iconColor: "text-blue-400",
    items: [
      {
        label: "Classic to Fluid Conversion",
        description: "AI-assisted migration of PeopleSoft Classic pages to Fluid UI. Automated layout mapping, PeopleCode event re-implementation, and component structure tracing.",
      },
      {
        label: "Natural Language SQL Execution",
        description: "Plain-English questions against live PeopleSoft data via ExecuteQuery.v1 REST API. EMPLID-secured, response transformer with value_map code translation.",
      },
      {
        label: "SQL Tuning Assistant",
        description: "AI-powered SQL performance analysis for PeopleSoft queries using the DB index layer. Bottleneck identification, index recommendations, and execution plan analysis.",
      },
    ],
  },
  {
    phase: "Future",
    status: "planned",
    statusLabel: "Planned",
    dot: "bg-purple-500",
    dotGlow: "shadow-[0_0_12px_rgba(139,92,246,0.8)]",
    labelColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    icon: Circle,
    iconColor: "text-purple-400",
    items: [
      {
        label: "Self-Healing psadmin Assistant",
        description: "AI-driven PeopleSoft admin that detects, diagnoses, and auto-remediates common system issues — process scheduler failures, web server restarts, environment health checks.",
      },
      {
        label: "APIM Gateway & Integration Toolkit",
        description: "Enterprise API routing layer with rate limiting, OAuth, and analytics. Modular adapters to connect SAP, Workday, ServiceNow to the AI Studio MCP gateway.",
      },
      {
        label: "Full Enterprise AI Platform",
        description: "Multi-tenant deployment with isolated environments per business unit. Full Azure AD / Okta SSO. Platform migration tooling reducing 6-month consultant projects to 2-month team efforts.",
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

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
            Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Where We&apos;re{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Headed
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
            From AI tooling today to a full enterprise AI platform tomorrow. Here&apos;s what&apos;s
            coming.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-green-500/60 via-blue-500/60 to-purple-500/60" />

          <div className="space-y-8">
            {phases.map((phase, i) => {
              const StatusIcon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${phase.dot} ${phase.dotGlow} mt-6 z-10`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-lg font-black ${phase.labelColor}`}>
                        {phase.phase}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${phase.borderColor} ${phase.bgColor} ${phase.labelColor}`}
                      >
                        {phase.statusLabel}
                      </span>
                    </div>

                    <div
                      className={`p-6 rounded-2xl border ${phase.borderColor} ${phase.bgColor} backdrop-blur-sm`}
                    >
                      <div className="space-y-4">
                        {phase.items.map((item, j) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.2 + j * 0.1 + 0.3 }}
                            className="flex items-start gap-3"
                          >
                            <StatusIcon className={`w-4 h-4 ${phase.iconColor} flex-shrink-0 mt-0.5`} />
                            <div>
                              <div className="text-sm font-semibold text-white">{item.label}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
