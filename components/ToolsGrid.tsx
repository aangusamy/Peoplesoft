"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCode, MessageSquare, Bot, Shield, Database, Puzzle,
  Github, ExternalLink, X, ChevronRight, Layers, Lock, Zap,
  GitBranch, Terminal, Clock, ArrowDown, ArrowRight, CheckCircle,
  RefreshCw, Info,
} from "lucide-react";
import { copilotDetail, codeAnalyzerDetail as psAiStudioDetail } from "./toolDetailData";

/* ═══════════════════════════════════════════════════════════════
   TWO-PHASE PIPELINE DIAGRAM — PeopleSoft AI Studio
═══════════════════════════════════════════════════════════════ */

function TwoPhaseArchDiagram() {
  return (
    <div className="font-mono text-[11px] select-none space-y-3">
      {/* Phase header row */}
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-red-700/60 bg-red-900/20 rounded-lg p-2.5 text-center">
          <p className="text-red-300 font-black text-[10px] tracking-widest uppercase">Phase 1 — Offline Parsing</p>
          <p className="text-red-500/70 text-[9px] mt-0.5">Run once per codebase</p>
        </div>
        <div className="border border-red-700/60 bg-red-900/20 rounded-lg p-2.5 text-center">
          <p className="text-red-300 font-black text-[10px] tracking-widest uppercase">Phase 2 — AI Analysis</p>
          <p className="text-red-500/70 text-[9px] mt-0.5">Interactive, repeatable</p>
        </div>
      </div>

      {/* Content row */}
      <div className="grid grid-cols-2 gap-2">
        {/* Phase 1 Left */}
        <div className="space-y-2">
          <div className="border border-white/10 bg-white/[0.02] rounded-lg p-3">
            <p className="text-red-400 font-bold text-[10px] uppercase tracking-wider mb-1.5">Source Files</p>
            {[
              "▶ XML — App Designer Exports",
              "▶ SQR — Reports & Batch (.sqr/.sqc)",
              "▶ COBOL — Payroll Engine (.cbl/.dms)",
              "▶ DB — Oracle PL/SQL (all_source.csv)",
              "▶ Security — Role/User Matrix (.csv)",
            ].map((s) => (
              <p key={s} className="text-gray-400 text-[10px] leading-relaxed">{s}</p>
            ))}
          </div>
          <div className="border border-white/10 bg-white/[0.02] rounded-lg p-3">
            <p className="text-red-400 font-bold text-[10px] uppercase tracking-wider mb-1.5">Parsers</p>
            {[
              "→ SyntheticRootWrapper (64KB streaming)",
              "→ COBOL column-oriented parser",
              "→ SQR regex line parser",
              "→ DMS SQL store extractor",
              "→ ALL_SOURCE CSV grouper",
            ].map((s) => (
              <p key={s} className="text-gray-400 text-[10px] leading-relaxed">{s}</p>
            ))}
          </div>
        </div>

        {/* Phase 2 Right */}
        <div className="space-y-2">
          <div className="border border-white/10 bg-white/[0.02] rounded-lg p-3">
            <p className="text-red-400 font-bold text-[10px] uppercase tracking-wider mb-1.5">Pickle Cache</p>
            {[
              ["peoplesoft_metadata.pkl", "2.9 GB"],
              ["sqr.pkl", "136 MB"],
              ["cobol.pkl", "81 MB"],
              ["db.pkl", "~8–50 MB"],
              ["security_matrix.pkl", "~1–10 MB"],
              ["cross_reference_cache.pkl", "auto"],
            ].map(([name, size]) => (
              <div key={name} className="flex justify-between">
                <span className="text-gray-400 text-[10px]">{name}</span>
                <span className="text-gray-600 text-[10px]">{size}</span>
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-white/[0.02] rounded-lg p-3">
            <p className="text-red-400 font-bold text-[10px] uppercase tracking-wider mb-1.5">PSAISTUDIO.PY</p>
            {[
              "✓ Load all .pkl indexes (seconds)",
              "✓ CrossReferenceBuilder (auto)",
              "✓ 8 Static Analysis Tools",
              "✓ AIAnalyzer + ai_provider.py",
              "✓ Anthropic | OpenAI | Azure | Gemini",
              "✓ Multi-turn conversation support",
            ].map((s) => (
              <p key={s} className="text-gray-400 text-[10px] leading-relaxed">{s}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Inverted index bar */}
      <div className="border border-orange-500/30 bg-orange-500/5 rounded-lg p-3 text-center">
        <p className="text-orange-300 font-bold text-[10px] uppercase tracking-widest mb-1">Inverted Index Layer — O(1) Query Performance</p>
        <p className="text-gray-500 text-[10px] leading-relaxed">
          object_index · record_usage · field_usage · sql_dependency · code_store · procedure_index · call_graph · sql_table_usage · security_hierarchy
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VISUAL ARCHITECTURE DIAGRAM — Teams Bot
═══════════════════════════════════════════════════════════════ */

function TeamsBotDiagram() {
  return (
    <div className="font-mono text-xs select-none">
      {/* Row 1: Teams */}
      <div className="flex justify-center mb-1">
        <div className="border border-blue-500/60 bg-blue-500/10 rounded-lg px-6 py-2.5 text-center min-w-[220px]">
          <p className="text-blue-300 font-bold">Microsoft Teams</p>
          <p className="text-blue-500 text-[10px] mt-0.5">Employee Chat Interface</p>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center mb-1">
        <div className="flex flex-col items-center text-gray-600">
          <div className="w-px h-4 bg-gray-700" />
          <span className="text-[10px] text-gray-600 px-1">Bot Framework Activity</span>
          <div className="w-px h-4 bg-gray-700" />
          <ArrowDown className="w-3 h-3" />
        </div>
      </div>

      {/* Row 2: api.py */}
      <div className="flex justify-center mb-1">
        <div className="border border-white/20 bg-white/[0.03] rounded-lg px-6 py-2.5 text-center min-w-[280px]">
          <p className="text-white font-bold">api.py  —  FastAPI HTTP Server</p>
          <div className="flex justify-center gap-3 mt-1.5">
            <span className="text-[10px] text-green-400 border border-green-500/30 rounded px-1.5 py-0.5">POST /bot</span>
            <span className="text-[10px] text-gray-400 border border-white/10 rounded px-1.5 py-0.5">POST /chat</span>
            <span className="text-[10px] text-gray-400 border border-white/10 rounded px-1.5 py-0.5">GET /health</span>
          </div>
          <p className="text-gray-600 text-[10px] mt-1">JWT validate → extract aadObjectId → inject EMPLID token</p>
        </div>
      </div>

      {/* Fork arrows */}
      <div className="flex justify-center gap-16 mb-1">
        <div className="flex flex-col items-center text-gray-600">
          <div className="w-px h-3 bg-gray-700" />
          <ArrowDown className="w-3 h-3" />
        </div>
        <div className="flex flex-col items-center text-gray-600">
          <div className="w-px h-3 bg-gray-700" />
          <ArrowDown className="w-3 h-3" />
        </div>
      </div>

      {/* Row 3: graph_client + agent */}
      <div className="flex justify-center gap-4 mb-1">
        <div className="border border-purple-500/40 bg-purple-500/5 rounded-lg px-4 py-2.5 text-center min-w-[130px]">
          <p className="text-purple-300 font-bold text-[11px]">graph_client.py</p>
          <p className="text-purple-500 text-[10px] mt-0.5">MS Graph API</p>
          <p className="text-gray-600 text-[10px] mt-0.5">AAD Object ID</p>
          <p className="text-gray-500 text-[10px]">↓</p>
          <p className="text-gray-500 text-[10px]">Employee ID</p>
        </div>
        <div className="border border-cyan-500/40 bg-cyan-500/5 rounded-lg px-4 py-2.5 text-center min-w-[150px]">
          <p className="text-cyan-300 font-bold text-[11px]">agent.py</p>
          <p className="text-cyan-500 text-[10px] mt-0.5">PeopleSoftAgent</p>
          <p className="text-gray-600 text-[10px] mt-0.5">Claude API Client</p>
          <p className="text-gray-500 text-[10px]">Agentic loop</p>
        </div>
      </div>

      {/* Arrow from agent down */}
      <div className="flex justify-center mb-1" style={{ paddingLeft: "88px" }}>
        <div className="flex flex-col items-center text-gray-600">
          <div className="w-px h-3 bg-gray-700" />
          <span className="text-[10px] text-gray-600 px-1">tool call</span>
          <div className="w-px h-3 bg-gray-700" />
          <ArrowDown className="w-3 h-3" />
        </div>
      </div>

      {/* Row 4: ps_rest_client */}
      <div className="flex justify-center mb-1" style={{ paddingLeft: "88px" }}>
        <div className="border border-orange-500/40 bg-orange-500/5 rounded-lg px-4 py-2.5 text-center min-w-[200px]">
          <p className="text-orange-300 font-bold text-[11px]">ps_rest_client.py</p>
          <p className="text-orange-500 text-[10px] mt-0.5">PeopleSoft REST Client</p>
          <p className="text-gray-600 text-[10px] mt-0.5">ExecuteQuery API  •  Basic/Bearer/OAuth</p>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center mb-1" style={{ paddingLeft: "88px" }}>
        <div className="flex flex-col items-center text-gray-600">
          <div className="w-px h-3 bg-gray-700" />
          <ArrowDown className="w-3 h-3" />
        </div>
      </div>

      {/* Row 5: PeopleSoft */}
      <div className="flex justify-center" style={{ paddingLeft: "88px" }}>
        <div className="border border-green-500/40 bg-green-500/5 rounded-lg px-4 py-2.5 text-center min-w-[200px]">
          <p className="text-green-300 font-bold text-[11px]">PeopleSoft HCM</p>
          <p className="text-green-600 text-[10px] mt-0.5">Component Interface  •  Business Rules</p>
          <p className="text-gray-600 text-[10px]">Integration Broker  •  App Packages</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VISUAL ARCHITECTURE DIAGRAM — AI Code Analyzer
═══════════════════════════════════════════════════════════════ */

function CodeAnalyzerDiagram() {
  const steps = [
    { label: "PeopleCode File (.ppc)", color: "border-purple-500/60 bg-purple-500/10 text-purple-300", sub: "Uploaded via REST API or MCP tool call" },
    { label: "Chunker / Preprocessor", color: "border-white/20 bg-white/[0.03] text-white", sub: "Function boundaries preserved  •  Token-safe splitting" },
    { label: "Claude AI Engine", color: "border-cyan-500/40 bg-cyan-500/5 text-cyan-300", sub: "Intent extraction  •  Business rule detection  •  Pattern recognition" },
    { label: "Structured Output Builder", color: "border-orange-500/40 bg-orange-500/5 text-orange-300", sub: "JSON schema  •  Dependency graph  •  Complexity score" },
    { label: "Documentation Formatter", color: "border-green-500/40 bg-green-500/5 text-green-300", sub: "Markdown docs  •  Function tables  •  Plain-English summaries" },
  ];
  return (
    <div className="flex flex-col items-center gap-0 font-mono text-xs">
      {steps.map((s, i) => (
        <div key={i} className="flex flex-col items-center w-full max-w-xs">
          <div className={`border rounded-lg px-5 py-2.5 text-center w-full ${s.color}`}>
            <p className="font-bold text-[11px]">{s.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{s.sub}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center my-1 text-gray-600">
              <div className="w-px h-3 bg-gray-700" />
              <ArrowDown className="w-3 h-3" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODAL CONTENT DATA  —  Teams Bot Integration
═══════════════════════════════════════════════════════════════ */

const teamsIntegrationDetail = {
  title: "PSONE AI HR Copilot",
  subtitle: "Conversational Employee Services for PeopleSoft",
  author: "Created by Velu Angusamy",
  gradient: "from-blue-600 to-blue-500",
  accentColor: "blue",
  sections: [
    {
      id: "overview",
      label: "Overview",
      icon: Layers,
      content: {
        type: "overview" as const,
        summary:
          "Enterprise systems like PeopleSoft remain the system of record for HR data across many organizations. However, traditional ERP interfaces are often difficult for employees to navigate — tasks such as checking leave balances, viewing payslips, or submitting requests require multiple steps within complex menus. PSONE AI HR Copilot eliminates that friction entirely.",
        vision:
          "The goal is to transform PeopleSoft from a form-driven ERP interface into a conversational HR platform. Employees interact through Microsoft Teams chat rather than navigating multiple screens. The assistant understands intent, retrieves data securely, and performs transactions through approved PeopleSoft APIs. PeopleSoft remains the transaction engine and system of record — AI becomes the modern user interface.",
        highlights: [
          { label: "Interface", value: "Microsoft Teams" },
          { label: "AI Engine", value: "Claude (Anthropic)" },
          { label: "Backend", value: "PeopleSoft REST APIs" },
          { label: "Auth", value: "Azure AD + JWT" },
          { label: "Language", value: "Python 3.11+" },
          { label: "Framework", value: "FastAPI + Uvicorn" },
        ],
        problem: [
          "Employees must navigate deep PeopleSoft menus for simple HR tasks",
          "Every transaction requires screen knowledge — not natural for most users",
          "IT helpdesk is overloaded with basic HR queries",
          "No single self-service interface available in Microsoft Teams",
        ],
        solution: [
          "Natural language request → fully validated PeopleSoft transaction",
          "Azure AD identity automatically maps user to their Employee ID",
          "Zero navigation — employees never leave Microsoft Teams",
          "All PeopleSoft business rules, security, and workflows remain enforced",
        ],
      },
    },
    {
      id: "architecture",
      label: "Architecture",
      icon: GitBranch,
      content: {
        type: "architecture-teams" as const,
        explanation:
          "The architecture strictly separates the conversational AI layer from the PeopleSoft ERP. Teams carries the message. FastAPI validates identity. The AI agent drives the tool-calling loop. PeopleSoft REST APIs (backed by Component Interfaces) execute the actual transaction. No layer can bypass another.",
        components: [
          {
            file: "api.py",
            lines: "304 lines",
            role: "FastAPI HTTP Server",
            endpoints: ["POST /bot", "POST /chat", "GET /health"],
            desc: "Main entrypoint for all HTTP traffic. Validates JWT from Bot Framework, extracts the user's AAD Object ID, resolves it to a PeopleSoft Employee ID via Graph, injects it as a non-modifiable [AUTHORIZED_EMPLID] token, then passes the secured message to agent.py. Session state is maintained in-memory per session ID.",
          },
          {
            file: "agent.py",
            lines: "164 lines",
            role: "Core AI Agent (Agentic Loop)",
            endpoints: ["chat(user_message: str) → str"],
            desc: "Implements PeopleSoftAgent. Receives the user message with the injected EMPLID token. Sends message + full conversation history to Claude with tool definitions. If Claude returns a tool call, executes it via ps_rest_client and feeds results back into the loop. Repeats until Claude returns a final text response. Maintains multi-turn conversation history.",
          },
          {
            file: "tools.py",
            lines: "102 lines",
            role: "Claude Tool Definitions & System Prompt",
            endpoints: ["invoke_peoplesoft_rest"],
            desc: "Defines the invoke_peoplesoft_rest tool schema Claude can call. Declares available services: GET_LEAVE_BALANCE and GET_PAYCHECK. Holds the system prompt that explicitly instructs Claude to always use the [AUTHORIZED_EMPLID] injected in the context and never accept employee IDs from user messages.",
          },
          {
            file: "ps_rest_client.py",
            lines: "170 lines",
            role: "PeopleSoft REST Client",
            endpoints: ["/ExecuteQuery.v1/PUBLIC/*/JSON/NONFILE"],
            desc: "Handles authenticated HTTP calls to PeopleSoft's ExecuteQuery REST API. Supports Basic Auth, Bearer Token, and OAuth. Maps emplid to the prompt_fieldvalue query parameter required by PeopleSoft. Validates all required parameters before calling. Returns JSON wrapped in a status envelope.",
          },
          {
            file: "graph_client.py",
            lines: "153 lines",
            role: "Microsoft Graph API Client",
            endpoints: ["GET /users/{aadObjectId}"],
            desc: "Resolves a Teams user's AAD Object ID to their PeopleSoft Employee ID. Uses OAuth 2.0 Client Credentials flow (app-only) to get an access token. Caches the token until expiry minus a 60-second buffer. Queries Graph API for the user's employeeId attribute — this is the only source of Employee ID in the system.",
          },
          {
            file: "config.py",
            lines: "81 lines",
            role: "Configuration & Service Registry",
            endpoints: ["SERVICE_REGISTRY"],
            desc: "Loads all configuration from .env via python-dotenv. Centralizes PeopleSoft base URL and auth credentials, Claude model selection and API key, Azure Bot Framework app credentials, Microsoft Graph API credentials, and the SERVICE_REGISTRY mapping service names to REST endpoint paths.",
          },
        ],
        serviceRegistry: [
          { name: "GET_LEAVE_BALANCE", endpoint: "/ExecuteQuery.v1/PUBLIC/LEAVE_BALANCE/JSON/NONFILE" },
          { name: "GET_PAYCHECK", endpoint: "/ExecuteQuery.v1/PUBLIC/PAYCHECK/JSON/NONFILE" },
        ],
      },
    },
    {
      id: "howitworks",
      label: "How It Works",
      icon: Zap,
      content: {
        type: "howitworks-teams" as const,
        intro: "A complete end-to-end request — from a Teams message to a PeopleSoft response — travels through 10 discrete, auditable steps. Every step enforces security; no step can be skipped.",
        example: {
          userMessage: "What's my leave balance?",
          steps: [
            { n: "1", actor: "Microsoft Teams", action: "Sends Bot Framework activity to POST /bot endpoint" },
            { n: "2", actor: "api.py", action: "Extracts aadObjectId from the Teams payload" },
            { n: "3", actor: "graph_client.py", action: 'Resolves aadObjectId → employeeId  (e.g. "KU0001") via MS Graph' },
            { n: "4", actor: "api.py", action: 'Prepends [AUTHORIZED_EMPLID: KU0001] to the user message as a non-modifiable token' },
            { n: "5", actor: "agent.py", action: "Sends secured message + conversation history to Claude with tool definitions" },
            { n: "6", actor: "Claude AI", action: 'Decides to call invoke_peoplesoft_rest:\n{ service: "GET_LEAVE_BALANCE", emplid: "KU0001" }' },
            { n: "7", actor: "ps_rest_client.py", action: "Sends authenticated REST request to PeopleSoft ExecuteQuery API" },
            { n: "8", actor: "PeopleSoft", action: "Returns JSON with leave type rows and hour balances" },
            { n: "9", actor: "Claude AI", action: "Formats JSON into a human-readable natural language summary" },
            { n: "10", actor: "api.py", action: "Sends the formatted response back to the employee in Teams" },
          ],
        },
        capabilities: [
          { icon: "📅", title: "Leave Balance Query", example: '"How many days of annual leave do I have?"' },
          { icon: "📄", title: "Payslip Retrieval", example: '"Show me my last paycheck"' },
          { icon: "✈️", title: "Vacation Request", example: '"Take vacation next Friday"' },
          { icon: "👤", title: "Personal Info Update", example: '"Update my contact number"' },
          { icon: "📊", title: "Team Analytics (Future)", example: '"Show pending leave approvals for my team"' },
          { icon: "🔔", title: "Proactive Alerts (Future)", example: "Auto-notify on leave balance thresholds" },
        ],
        zeroNav:
          'A statement like "Take vacation next Friday" is parsed for intent, validated against leave balances and HR policy, and submitted through a Component Interface transaction — all within a single Teams message. The employee never visits PeopleSoft.',
      },
    },
    {
      id: "security",
      label: "Security",
      icon: Lock,
      content: {
        type: "security-teams" as const,
        intro:
          "Security is enforced at every layer of the stack. The AI assistant cannot bypass PeopleSoft security — it operates entirely through authorized, server-validated APIs.",
        layers: [
          {
            layer: "Layer 1 — Bot Framework JWT",
            icon: "🔐",
            desc: "Every request to POST /bot is validated against Azure Bot Framework's JWT signature. Unauthenticated requests are rejected before any business logic executes.",
          },
          {
            layer: "Layer 2 — Microsoft Graph Identity Resolution",
            icon: "🆔",
            desc: "The user's Azure AD identity is resolved to a PeopleSoft Employee ID server-side using app-only credentials. The user cannot supply, modify, or inject their own Employee ID at any point.",
          },
          {
            layer: "Layer 3 — Claude System Prompt Enforcement",
            icon: "🤖",
            desc: "The system prompt explicitly instructs Claude to use only the [AUTHORIZED_EMPLID] token injected by the server. Any employee ID mentioned in user messages is ignored by Claude. This is enforced at the AI instruction level.",
          },
          {
            layer: "Layer 4 — PeopleSoft API Security",
            icon: "🏛️",
            desc: "All PeopleSoft REST calls use server-configured service credentials, not user-provided tokens. All existing PeopleSoft permission lists, row-level security, and business rules remain fully enforced by the Component Interface.",
          },
        ],
        dataFlow: "Teams user authenticated by Azure AD → JWT verified by Bot Framework → AAD Object ID resolved to EMPLID via MS Graph → EMPLID injected as server-side token → Claude instructed to use only that token → PeopleSoft enforces its own row-level security on the query result.",
        designDecisions: [
          { title: "Server-side EMPLID injection", reason: "Prevents Claude from using any user-supplied ID, even if the user tries to ask for someone else's data" },
          { title: "Agentic loop in agent.py", reason: "Claude drives the tool-calling loop — the application stays minimal and Claude decides when and how to fetch data" },
          { title: "Stateless API / Stateful CLI", reason: "/bot and /chat create a fresh agent per session ID; CLI maintains one persistent agent for interactive use" },
          { title: "Mock mode support", reason: "All three external services (PeopleSoft, Graph, DB) support mock mode via env variables for local development without live systems" },
        ],
      },
    },
  ],
  stack: [
    { layer: "Language", tech: "Python 3.11+" },
    { layer: "HTTP Framework", tech: "FastAPI + Uvicorn" },
    { layer: "AI / LLM", tech: "Anthropic Claude (claude-sonnet-4-5)" },
    { layer: "Teams SDK", tech: "Microsoft Bot Framework (botbuilder-core)" },
    { layer: "Identity", tech: "Microsoft Graph API" },
    { layer: "HR Data", tech: "PeopleSoft REST — ExecuteQuery API" },
    { layer: "Bot Auth", tech: "Azure AD Single Tenant, JWT" },
    { layer: "Graph Auth", tech: "OAuth 2.0 Client Credentials" },
    { layer: "PS Auth", tech: "Basic Auth / Bearer Token / OAuth" },
    { layer: "Testing", tech: "pytest" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   MODAL CONTENT DATA  —  AI Code Analyzer
═══════════════════════════════════════════════════════════════ */

const codeAnalyzerDetail = {
  title: "AI Code Analyzer",
  subtitle: "Automatic Documentation & Logic Extraction for PeopleCode",
  author: "Part of PeopleSoft AI Studio",
  gradient: "from-purple-600 to-violet-600",
  accentColor: "purple",
  sections: [
    {
      id: "overview",
      label: "Overview",
      icon: Layers,
      content: {
        type: "overview" as const,
        summary:
          "The AI Code Analyzer is an intelligent documentation and logic extraction engine for PeopleCode. It uses Claude AI to parse complex business logic, generate structured documentation, and expose the intent behind legacy PeopleSoft customizations — without requiring developers to read thousands of lines of undocumented code.",
        vision:
          "Most PeopleSoft environments carry years of undocumented customizations. The AI Code Analyzer transforms that complexity into readable documentation instantly. Developers get business logic summaries, dependency maps, and natural-language explanations — enabling faster debugging, safer upgrades, and confident onboarding for new team members.",
        highlights: [
          { label: "Input", value: "PeopleCode (.ppc files)" },
          { label: "AI Engine", value: "Claude (Anthropic)" },
          { label: "Output", value: "Markdown + JSON" },
          { label: "Protocol", value: "MCP (Model Context Protocol)" },
          { label: "API", value: "REST + Streaming" },
          { label: "Deployment", value: "On-premise / Cloud" },
        ],
        problem: [
          "PeopleSoft customizations are rarely documented — developers inherit black boxes",
          "Understanding a single event handler can take days of manual tracing",
          "Upgrade impact analysis is blind without knowing what custom code does",
          "Onboarding new developers to existing PeopleSoft projects is extremely slow",
        ],
        solution: [
          "Submit any PeopleCode file — receive full documentation in seconds",
          "Business rules extracted as plain-English summaries, not raw code",
          "Dependency maps show every record, CI field, and related function touched",
          "Upgrade risk scoring flags high-complexity customization areas automatically",
        ],
      },
    },
    {
      id: "architecture",
      label: "Architecture",
      icon: GitBranch,
      content: {
        type: "architecture-analyzer" as const,
        explanation:
          "The analyzer is built as a layered pipeline. PeopleCode enters as raw source, is split into token-safe chunks that respect function boundaries, sent through Claude with a structured extraction prompt, and assembled into structured JSON before being rendered as Markdown documentation. The entire pipeline is exposed as both a REST API and an MCP tool for agent-to-agent use.",
        components: [
          {
            file: "analyzer.py",
            lines: "Core Engine",
            role: "Analysis Pipeline Orchestrator",
            endpoints: ["POST /analyze", "POST /analyze/batch"],
            desc: "Coordinates the full analysis loop. Receives PeopleCode input, delegates to the chunker, sends chunks to Claude, collects structured responses, merges outputs, and assembles the final documentation object. Supports both single-file and batch analysis modes.",
          },
          {
            file: "mcp_tool.py",
            lines: "MCP Layer",
            role: "Model Context Protocol Interface",
            endpoints: ["analyze_peoplecode (MCP tool)"],
            desc: "Exposes analyze_peoplecode as a registered MCP tool. Allows Claude and other AI agents to call the analyzer directly as part of a larger agentic workflow — no manual REST calls needed. Follows the MCP tool schema specification for input/output.",
          },
          {
            file: "chunker.py",
            lines: "Preprocessor",
            role: "PeopleCode Chunker & Tokenizer",
            endpoints: ["chunk(source: str) → List[Chunk]"],
            desc: "Splits large PeopleCode files into token-safe chunks. Preserves function and method boundaries — never splits in the middle of a function body. Retains comment blocks adjacent to functions. Outputs metadata (function name, event type, start line) alongside each chunk.",
          },
          {
            file: "formatter.py",
            lines: "Output Layer",
            role: "Documentation Formatter",
            endpoints: ["format_json()", "format_markdown()"],
            desc: "Converts raw Claude output into structured Markdown or JSON. Generates function-level summaries, parameter tables, business rule sections, dependency lists, and complexity scores. Markdown output is GitHub-compatible and can be committed directly to a repository.",
          },
        ],
        integrations: [
          { name: "REST API", desc: "POST /analyze — submit file, receive JSON/Markdown" },
          { name: "MCP Tool", desc: "analyze_peoplecode — callable by Claude agents directly" },
          { name: "CI/CD Hook", desc: "Auto-generate docs on every PeopleCode commit" },
          { name: "VS Code (Planned)", desc: "Inline analysis inside App Designer / VS Code" },
        ],
      },
    },
    {
      id: "howitworks",
      label: "How It Works",
      icon: Zap,
      content: {
        type: "howitworks-analyzer" as const,
        intro: "From PeopleCode file to full documentation in a single API call — the pipeline handles chunking, analysis, and formatting automatically.",
        example: {
          userMessage: "Analyze this PeopleCode SavePostChange event",
          steps: [
            { n: "1", actor: "Developer / CI Pipeline", action: "Submits PeopleCode file via POST /analyze or MCP tool call" },
            { n: "2", actor: "chunker.py", action: "Splits the file at function boundaries. Preserves comment blocks and event metadata (event type, component name, record)" },
            { n: "3", actor: "Claude AI", action: "Receives each chunk with a structured extraction prompt. Identifies: function purpose, input/output parameters, business rules enforced, SQL statements, record and field references" },
            { n: "4", actor: "Claude AI", action: "Detects PeopleSoft-specific patterns: Component Interface calls, SQL exec statements, ScrollSelect, RowSet operations, workflow triggers" },
            { n: "5", actor: "formatter.py", action: "Merges chunk-level analysis into a file-level JSON structure. Computes dependency graph across all functions" },
            { n: "6", actor: "formatter.py", action: "Renders Markdown documentation: function table, business rules section, record dependencies, plain-English summary, upgrade risk score" },
            { n: "7", actor: "REST Response", action: "Returns structured JSON + Markdown. Developer commits docs to repo or views inline" },
          ],
        },
        sampleOutput: {
          title: "Sample Output — SavePostChange Event",
          sections: [
            { label: "Function", value: "SavePostChange — LE_LEAVE_REQUEST" },
            { label: "Purpose", value: "Validates and posts leave request after save. Checks against accrual balance and HR policy rules before allowing the transaction to commit." },
            { label: "Business Rules", value: "Blocks request if leave balance < requested hours. Enforces minimum notice period (48h for vacation). Triggers approval workflow for requests > 5 days." },
            { label: "Records Touched", value: "GP_ABS_EVENT, GP_ABS_BAL_SS, HR_DERIVED, LEAVE_REQUEST_TBL" },
            { label: "Complexity Score", value: "High (7/10) — multiple conditional branches, SQL SELECT inside loop, workflow trigger" },
          ],
        },
        capabilities: [
          { icon: "📝", title: "Auto-Documentation", example: "Function-level + file-level Markdown generated automatically" },
          { icon: "🧠", title: "Business Logic Extraction", example: "What rules does this event enforce? Plain English." },
          { icon: "🔗", title: "Dependency Mapping", example: "Every record, CI field, and function cross-referenced" },
          { icon: "📊", title: "Complexity Scoring", example: "1–10 score with explanation. Flags high-risk areas." },
          { icon: "🔍", title: "Pattern Detection", example: "CI calls, SQL exec, RowSet ops, workflow triggers" },
          { icon: "🔄", title: "Refactor Hints", example: "AI suggestions for cleaner, more maintainable code" },
        ],
      },
    },
    {
      id: "security",
      label: "Integration",
      icon: Terminal,
      content: {
        type: "security-teams" as const,
        intro:
          "The AI Code Analyzer integrates with developer workflows and enterprise tooling through REST APIs, MCP, and CI/CD hooks. It is designed to fit into existing PeopleSoft development pipelines without disruption.",
        layers: [
          {
            layer: "REST API — POST /analyze",
            icon: "🌐",
            desc: "Submit a PeopleCode file and receive structured JSON documentation. Supports batch mode for processing entire codebases. Streaming response available for large files.",
          },
          {
            layer: "MCP Tool — analyze_peoplecode",
            icon: "🤖",
            desc: "Registered as an MCP tool, enabling Claude and other AI agents to call the analyzer directly as part of a larger workflow. An agent can fetch a file, analyze it, and incorporate the result — all in one agentic loop.",
          },
          {
            layer: "CI/CD Pipeline Integration",
            icon: "🔁",
            desc: "Hook into your PeopleCode repository pipeline. Auto-generate and commit documentation on every push. Flag high-complexity changes in pull request reviews before they reach production.",
          },
          {
            layer: "VS Code / App Designer Extension (Planned)",
            icon: "💻",
            desc: "Highlight any PeopleCode block in VS Code or PeopleSoft App Designer. Right-click to analyze inline. Documentation appears in a side panel — no context switching required.",
          },
        ],
        dataFlow: "PeopleCode source → chunker (boundary-aware split) → Claude AI (extraction prompt) → JSON structure (dependencies, rules, complexity) → Markdown docs returned to developer or committed to repo.",
        designDecisions: [
          { title: "Boundary-aware chunking", reason: "Never split mid-function — preserves full context for accurate rule extraction" },
          { title: "MCP-first design", reason: "Exposes the analyzer as an AI-callable tool so it can participate in larger agentic workflows without custom integration code" },
          { title: "Structured JSON output", reason: "Machine-readable output enables downstream tools (dependency dashboards, complexity reports, upgrade impact analysis) to consume results programmatically" },
          { title: "No PeopleSoft connection required", reason: "Works purely on source code — no live PeopleSoft system needed. Safe to use in offline or air-gapped environments" },
        ],
      },
    },
  ],
  stack: [
    { layer: "Language", tech: "Python 3.11+" },
    { layer: "AI / LLM", tech: "Anthropic Claude (claude-sonnet-4-5)" },
    { layer: "Protocol", tech: "MCP (Model Context Protocol)" },
    { layer: "API", tech: "FastAPI + REST + Streaming" },
    { layer: "Input Format", tech: "PeopleCode (.ppc, .pcode)" },
    { layer: "Output Format", tech: "Markdown + JSON" },
    { layer: "Auth", tech: "API Key / OAuth 2.0" },
    { layer: "Deployment", tech: "On-premise / Cloud / Docker" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   TYPE
═══════════════════════════════════════════════════════════════ */
type DetailData = typeof teamsIntegrationDetail | typeof codeAnalyzerDetail | typeof psAiStudioDetail | typeof copilotDetail;

/* ═══════════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════════ */
const STACK_TAB_ID = "__stack__";

function DetailModal({ data, onClose }: { data: DetailData; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState(data.sections[0].id);
  const activeSection = data.sections.find((s) => s.id === activeTab);
  const accent = data.accentColor;
  const accentMap: Record<string, { tab: string; badge: string; dot: string; btn: string }> = {
    blue: { tab: "border-blue-500 text-blue-400", badge: "bg-blue-500/20 text-blue-300", dot: "bg-blue-500", btn: "bg-blue-500/10 border-blue-500/30 text-blue-300" },
    purple: { tab: "border-purple-500 text-purple-400", badge: "bg-purple-500/20 text-purple-300", dot: "bg-purple-500", btn: "bg-purple-500/10 border-purple-500/30 text-purple-300" },
    indigo: { tab: "border-indigo-500 text-indigo-400", badge: "bg-indigo-500/20 text-indigo-300", dot: "bg-indigo-500", btn: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300" },
  };
  const ac = accentMap[accent] ?? accentMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-white/10 bg-[#0c0c14] overflow-hidden shadow-2xl"
      >
        {/* ── Header ── */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-white/8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-2 border ${ac.btn}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${ac.dot}`} />
                Technical Red Paper
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">{data.title}</h2>
              <p className="text-gray-400 text-sm mt-0.5">{data.subtitle}</p>
              <p className="text-gray-600 text-xs mt-0.5">{data.author}</p>
            </div>
            <button onClick={onClose} className="flex-shrink-0 p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-1 mt-4 overflow-x-auto pb-0.5">
            {data.sections.map((s) => {
              const TabIcon = s.icon;
              const isActive = s.id === activeTab;
              return (
                <button key={s.id} onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 border
                    ${isActive ? `${ac.tab} bg-white/5 border-white/15` : "text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5"}`}>
                  <TabIcon className="w-3.5 h-3.5" />
                  {s.label}
                </button>
              );
            })}
            <button
              onClick={() => setActiveTab(STACK_TAB_ID)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 border
                ${activeTab === STACK_TAB_ID ? `${ac.tab} bg-white/5 border-white/15` : "text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5"}`}
            >
              <Layers className="w-3.5 h-3.5" />
              Stack
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              {activeTab === STACK_TAB_ID ? (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Technology Stack</p>
                  {data.stack.map((s) => (
                    <div key={s.layer} className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02]">
                      <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{s.layer}</span>
                      <span className="text-sm font-mono text-white">{s.tech}</span>
                    </div>
                  ))}
                </div>
              ) : activeSection ? (
                <SectionContent section={activeSection} ac={ac} isTeams={data.accentColor === "blue"} />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION CONTENT RENDERER
═══════════════════════════════════════════════════════════════ */
function SectionContent({
  section,
  ac,
  isTeams,
}: {
  section: DetailData["sections"][number];
  ac: { tab: string; badge: string; dot: string; btn: string };
  isTeams: boolean;
}) {
  const { content } = section;

  /* ── OVERVIEW ── */
  if (content.type === "overview") {
    return (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">The Problem</p>
            <ul className="space-y-2">
              {content.problem.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">The Solution</p>
            <ul className="space-y-2">
              {content.solution.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Executive Summary</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.summary}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Project Vision</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.vision}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">At a Glance</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {content.highlights.map((h) => (
              <div key={h.label} className="p-3 rounded-xl border border-white/8 bg-white/[0.03]">
                <p className="text-[10px] text-gray-600 mb-1">{h.label}</p>
                <p className="text-sm font-semibold text-white">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── ARCHITECTURE — TEAMS ── */
  if (content.type === "architecture-teams") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">System Architecture</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">{content.explanation}</p>
          <div className="p-5 rounded-xl border border-white/8 bg-black/20 overflow-x-auto">
            <TeamsBotDiagram />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Service Registry</p>
          <div className="rounded-xl border border-white/8 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.03]">
                  <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">Service Name</th>
                  <th className="text-left px-4 py-2.5 text-gray-500 font-semibold">PeopleSoft Endpoint</th>
                </tr>
              </thead>
              <tbody>
                {content.serviceRegistry.map((r) => (
                  <tr key={r.name} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-2.5 font-mono text-green-400">{r.name}</td>
                    <td className="px-4 py-2.5 font-mono text-gray-500 text-[10px]">{r.endpoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Component Breakdown</p>
          <div className="space-y-3">
            {content.components.map((c) => (
              <div key={c.file} className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="text-sm font-mono font-bold text-white">{c.file}</span>
                    <span className="text-[10px] text-gray-600">{c.lines}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {c.endpoints.map((ep) => (
                      <span key={ep} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/8 text-gray-500">{ep}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-blue-500 font-semibold mb-1">{c.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── ARCHITECTURE — ANALYZER ── */
  if (content.type === "architecture-analyzer") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Pipeline Architecture</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">{content.explanation}</p>
          <div className="p-5 rounded-xl border border-white/8 bg-black/20 overflow-x-auto">
            <CodeAnalyzerDiagram />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Integration Points</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.integrations.map((r) => (
              <div key={r.name} className="p-3 rounded-xl border border-white/8 bg-white/[0.02]">
                <p className="text-sm font-semibold text-white mb-1">{r.name}</p>
                <p className="text-xs text-gray-400">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Component Breakdown</p>
          <div className="space-y-3">
            {content.components.map((c) => (
              <div key={c.file} className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="text-sm font-mono font-bold text-white">{c.file}</span>
                    <span className="text-[10px] text-gray-600">{c.lines}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {c.endpoints.map((ep) => (
                      <span key={ep} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/8 text-gray-500">{ep}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-purple-400 font-semibold mb-1">{c.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── HOW IT WORKS — TEAMS ── */
  if (content.type === "howitworks-teams") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">End-to-End Request Flow</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.intro}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/8 flex items-center gap-2">
            <span className="text-xs text-gray-500">Employee says:</span>
            <span className="font-mono text-sm text-green-400">&quot;{content.example.userMessage}&quot;</span>
          </div>
          <div className="divide-y divide-white/5">
            {content.example.steps.map((s) => (
              <div key={s.n} className="flex items-start gap-3 px-4 py-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-[11px] font-bold text-gray-400">{s.n}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold text-blue-400 mr-2">{s.actor}</span>
                  <span className="text-xs text-gray-400 whitespace-pre-wrap">{s.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Zero-Navigation Design</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.zeroNav}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Supported Capabilities</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.capabilities.map((c) => (
              <div key={c.title} className="p-3 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{c.icon}</span>
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                </div>
                <p className="text-xs text-gray-500 font-mono">{c.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── HOW IT WORKS — ANALYZER ── */
  if (content.type === "howitworks-analyzer") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Analysis Pipeline — Step by Step</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.intro}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/8 flex items-center gap-2">
            <span className="text-xs text-gray-500">Developer submits:</span>
            <span className="font-mono text-sm text-purple-400">&quot;{content.example.userMessage}&quot;</span>
          </div>
          <div className="divide-y divide-white/5">
            {content.example.steps.map((s) => (
              <div key={s.n} className="flex items-start gap-3 px-4 py-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-[11px] font-bold text-gray-400">{s.n}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold text-purple-400 mr-2">{s.actor}</span>
                  <span className="text-xs text-gray-400 whitespace-pre-wrap">{s.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 overflow-hidden">
          <div className="px-4 py-3 border-b border-purple-500/15">
            <p className="text-xs font-semibold text-purple-400">{content.sampleOutput.title}</p>
          </div>
          <div className="divide-y divide-white/5">
            {content.sampleOutput.sections.map((s) => (
              <div key={s.label} className="px-4 py-3">
                <p className="text-[10px] text-gray-600 font-semibold uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Extraction Capabilities</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.capabilities.map((c) => (
              <div key={c.title} className="p-3 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{c.icon}</span>
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                </div>
                <p className="text-xs text-gray-500">{c.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── ARCHITECTURE — PS AI STUDIO TWO-PHASE PIPELINE ── */
  if (content.type === "architecture-psaistudio") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Two-Phase Pipeline</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.explanation}</p>
        </div>

        <div className="p-4 rounded-xl border border-white/8 bg-black/20 overflow-x-auto">
          <TwoPhaseArchDiagram />
        </div>

        {/* Index cache sizes table */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Index Cache Sizes</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 text-gray-500 font-semibold">Index File</th>
                  <th className="text-right py-2 px-3 text-gray-500 font-semibold">Size · Objects · Parse Time</th>
                </tr>
              </thead>
              <tbody>
                {content.serviceRegistry.map((r) => (
                  <tr key={r.name} className="border-b border-white/5">
                    <td className="py-2 px-3 font-mono text-purple-300 font-semibold">{r.name}</td>
                    <td className="py-2 px-3 text-gray-400 text-right">{r.endpoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Component breakdown */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Key Files & Components</p>
          <div className="space-y-3">
            {content.components.map((c) => (
              <div key={c.file} className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Terminal className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="text-sm font-mono font-bold text-white">{c.file}</span>
                    <span className="text-[10px] text-gray-600 border border-white/10 rounded px-1.5 py-0.5">{c.lines}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {c.endpoints.map((ep) => (
                      <span key={ep} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/8 text-gray-500">{ep}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-purple-400 font-semibold mb-1">{c.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── ARCHITECTURE — COPILOT OPTIONS ── */
  if (content.type === "architecture-copilot") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Architecture Overview</p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.explanation}</p>
        </div>

        {/* Options at a glance */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">3 Options at a Glance</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 text-gray-500 font-semibold">Option</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-semibold">Logic Layer</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-semibold">Licensing</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-semibold">Complexity</th>
                  <th className="text-left py-2 px-3 text-gray-500 font-semibold">Scale</th>
                </tr>
              </thead>
              <tbody>
                {content.options.map((opt) => (
                  <tr key={opt.num} className={`border-b border-white/5 ${opt.recommended ? "bg-green-500/5" : ""}`}>
                    <td className="py-2 px-3 font-bold text-white">Option {opt.num}{opt.recommended && <span className="ml-1.5 text-[10px] text-green-400 border border-green-500/30 rounded px-1">★ Recommended</span>}</td>
                    <td className="py-2 px-3 text-gray-300">{opt.title.split(" (")[0]}</td>
                    <td className={`py-2 px-3 font-medium ${opt.licensing === "No premium" ? "text-green-400" : "text-yellow-400"}`}>{opt.licensing}</td>
                    <td className="py-2 px-3 text-gray-400">{opt.complexity}</td>
                    <td className={`py-2 px-3 font-medium ${opt.scale === "Enterprise" ? "text-green-400" : opt.scale === "Good" ? "text-blue-400" : "text-yellow-400"}`}>{opt.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed option cards */}
        {content.options.map((opt) => (
          <div key={opt.num} className={`rounded-2xl border p-5 ${opt.color}`}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-black ${opt.titleColor} border px-2 py-0.5 rounded-full`} style={{ borderColor: "currentColor", opacity: 0.8 }}>Option {opt.num}</span>
                  {opt.recommended && <span className="text-[10px] text-green-400 border border-green-500/30 rounded-full px-2 py-0.5 font-semibold">★ Recommended</span>}
                </div>
                <p className={`text-sm font-bold ${opt.titleColor}`}>{opt.title}</p>
                <p className="text-[11px] text-gray-500 font-mono mt-1">{opt.flow}</p>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                <span className={`text-[10px] px-2 py-0.5 rounded border font-medium ${opt.licensing === "No premium" ? "text-green-300 border-green-500/30 bg-green-500/10" : "text-yellow-300 border-yellow-500/30 bg-yellow-500/10"}`}>{opt.licensing}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded border font-medium ${opt.scale === "Enterprise" ? "text-green-300 border-green-500/30 bg-green-500/10" : "text-blue-300 border-blue-500/30 bg-blue-500/10"}`}>{opt.scale}</span>
              </div>
            </div>

            {/* Component responsibilities */}
            <div className="mb-4">
              <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-2">Component Responsibilities</p>
              <div className="space-y-1.5">
                {opt.responsibilities.map((r) => (
                  <div key={r.component} className="flex gap-2 text-xs">
                    <span className="font-semibold text-gray-300 min-w-[130px] flex-shrink-0">{r.component}</span>
                    <span className="text-gray-500">{r.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] font-semibold text-green-500 uppercase tracking-wider mb-1.5">Pros</p>
                <ul className="space-y-1">
                  {opt.pros.map((p, i) => (
                    <li key={i} className="flex gap-1.5 text-[11px] text-gray-400">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-red-400 uppercase tracking-wider mb-1.5">Cons</p>
                <ul className="space-y-1">
                  {opt.cons.map((c, i) => (
                    <li key={i} className="flex gap-1.5 text-[11px] text-gray-400">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/8">
              <p className="text-[11px] text-gray-500 italic">{opt.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ── SECURITY / INTEGRATION ── */
  if (content.type === "security-teams") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
            {section.label === "Integration" ? "Integration Overview" : "Security Model"}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">{content.intro}</p>
        </div>

        <div className="space-y-3">
          {content.layers.map((l, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
              <span className="text-xl flex-shrink-0">{l.icon}</span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">{l.layer}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-2">Data Flow</p>
          <p className="text-sm text-gray-300 leading-relaxed">{content.dataFlow}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Key Design Decisions</p>
          <div className="space-y-2">
            {content.designDecisions.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-white/6 bg-white/[0.015]">
                <ArrowRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-white">{d.title}</span>
                  <span className="text-gray-600 mx-1.5">—</span>
                  <span className="text-xs text-gray-400">{d.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ═══════════════════════════════════════════════════════════════
   TOOLS DATA
═══════════════════════════════════════════════════════════════ */
const toolGroups = [
  {
    id: "business",
    label: "Business Users",
    description: "HR · Finance · Ops",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    dotColor: "bg-purple-500/60",
    tools: [
      {
        icon: MessageSquare,
        title: "Teams Bot Integration",
        description: "Query PeopleSoft data and trigger workflows directly from Microsoft Teams with natural language.",
        gradient: "from-blue-600 to-blue-500",
        glow: "rgba(59,130,246,0.35)",
        border: "hover:border-blue-500/50",
        tag: "Available",
        tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
        hasDetail: true,
        detailData: teamsIntegrationDetail as DetailData,
      },
      {
        icon: Bot,
        title: "Microsoft Copilot Integration",
        description: "Connect Microsoft Copilot Studio to PeopleSoft HCM via FastAPI middleware. Leave balances, payslips, and HR workflows — inside Teams.",
        gradient: "from-indigo-600 to-purple-600",
        glow: "rgba(99,102,241,0.35)",
        border: "hover:border-indigo-500/50",
        tag: "Available",
        tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
        hasDetail: true,
        detailData: copilotDetail as unknown as DetailData,
      },
      {
        icon: Database,
        title: "NL SQL Execution",
        description: "Ask plain-English questions and get live PeopleSoft data back — no SQL knowledge required.",
        gradient: "from-violet-600 to-purple-600",
        glow: "rgba(124,58,237,0.35)",
        border: "hover:border-violet-500/50",
        tag: "Coming Soon",
        tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        hasDetail: false,
        detailData: null,
      },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    description: "PeopleSoft · App Engineers",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    dotColor: "bg-blue-500/60",
    tools: [
      {
        icon: FileCode,
        title: "PeopleSoft AI Code Analyzer",
        description: "Offline-first, AI-augmented static analysis platform. Parse 100,000+ PS objects, trace payroll logic, and generate documentation — $0.003 per query.",
        gradient: "from-purple-600 to-violet-600",
        glow: "rgba(139,92,246,0.35)",
        border: "hover:border-purple-500/50",
        tag: "Available",
        tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
        hasDetail: true,
        detailData: psAiStudioDetail as unknown as DetailData,
      },
      {
        icon: RefreshCw,
        title: "Classic to Fluid Conversion",
        description: "AI-assisted migration of PeopleSoft Classic pages to modern Fluid UI components. Automated layout mapping and PeopleCode refactoring.",
        gradient: "from-teal-600 to-emerald-600",
        glow: "rgba(20,184,166,0.35)",
        border: "hover:border-teal-500/50",
        tag: "Coming Soon",
        tagColor: "bg-teal-500/20 text-teal-400 border-teal-500/30",
        hasDetail: false,
        detailData: null,
      },
      {
        icon: Puzzle,
        title: "Integration Toolkit",
        description: "Modular adapters to connect any enterprise system — SAP, Workday, ServiceNow — to the AI Studio gateway.",
        gradient: "from-pink-600 to-rose-600",
        glow: "rgba(236,72,153,0.35)",
        border: "hover:border-pink-500/50",
        tag: "Planned",
        tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        hasDetail: false,
        detailData: null,
      },
    ],
  },
  {
    id: "admins",
    label: "Admins",
    description: "DBAs · PeopleSoft Ops",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    dotColor: "bg-cyan-500/60",
    tools: [
      {
        icon: Database,
        title: "SQL Tuning Assistant",
        description: "AI-powered SQL performance analysis for PeopleSoft queries. Identify bottlenecks and get optimization suggestions.",
        gradient: "from-orange-600 to-amber-600",
        glow: "rgba(234,88,12,0.35)",
        border: "hover:border-orange-500/50",
        tag: "Coming Soon",
        tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        hasDetail: false,
        detailData: null,
      },
      {
        icon: Shield,
        title: "Self-Healing psadmin",
        description: "AI-driven PeopleSoft admin assistant that detects, diagnoses, and auto-remediates common system issues.",
        gradient: "from-cyan-600 to-teal-600",
        glow: "rgba(6,182,212,0.35)",
        border: "hover:border-cyan-500/50",
        tag: "Coming Soon",
        tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        hasDetail: false,
        detailData: null,
      },
      {
        icon: GitBranch,
        title: "APIM Gateway",
        description: "Secure enterprise API routing and management. Rate limiting, auth, and routing for all AI interactions.",
        gradient: "from-slate-600 to-gray-600",
        glow: "rgba(100,116,139,0.35)",
        border: "hover:border-slate-500/50",
        tag: "Coming Soon",
        tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        hasDetail: false,
        detailData: null,
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function ToolsGrid() {
  const [activeModal, setActiveModal] = useState<DetailData | null>(null);
  const [githubNotice, setGithubNotice] = useState<string | null>(null);

  const showGithubNotice = (toolTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGithubNotice(toolTitle);
    setTimeout(() => setGithubNotice(null), 2800);
  };

  return (
    <>
      <section id="tools" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
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
              A growing ecosystem of tools, each designed to solve real enterprise problems with real AI capabilities.
            </p>
          </motion.div>

          <div className="space-y-14">
            {toolGroups.map((group, groupIdx) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${group.borderColor} ${group.bgColor}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${group.dotColor}`} />
                    <span className={`text-xs font-semibold ${group.accentColor} tracking-wide`}>{group.label}</span>
                  </div>
                  <span className="text-xs text-gray-600">{group.description}</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* Tools grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.tools.map((tool, i) => {
                    const Icon = tool.icon;
                    return (
                      <motion.div
                        key={tool.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIdx * 0.1 + i * 0.08 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className={`group relative flex flex-col p-7 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${tool.border} ${tool.hasDetail ? "cursor-pointer" : ""}`}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${tool.glow}`; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                        onClick={() => tool.hasDetail && tool.detailData && setActiveModal(tool.detailData)}
                      >
                        {tool.hasDetail && (
                          <div className="absolute top-3 right-14 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] text-gray-600 tracking-wide">click for details</span>
                          </div>
                        )}

                        <div className="flex items-start justify-between mb-5">
                          <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${tool.gradient}`}>
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tool.gradient} opacity-20 group-hover:opacity-40 blur-sm transition-opacity`} />
                            <Icon className="relative w-5 h-5 text-white" />
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${tool.tagColor}`}>{tool.tag}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{tool.description}</p>

                        <div className="flex items-center gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                          {"codeComingSoon" in tool && tool.codeComingSoon ? (
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-white/8 px-3 py-1.5 rounded-lg cursor-default select-none">
                              <Clock className="w-3.5 h-3.5" />
                              Code Coming Soon
                            </span>
                          ) : (
                            <button
                              onClick={(e) => showGithubNotice(tool.title, e)}
                              className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-lg transition-all duration-200"
                            >
                              <Github className="w-3.5 h-3.5" />
                              GitHub
                            </button>
                          )}
                          {tool.hasDetail ? (
                            <button onClick={() => tool.detailData && setActiveModal(tool.detailData)}
                              className="flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 border border-purple-500/25 hover:border-purple-500/50 px-3 py-1.5 rounded-lg transition-all duration-200">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Learn More
                            </button>
                          ) : (
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700 border border-white/5 px-3 py-1.5 rounded-lg cursor-default">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Learn More
                            </span>
                          )}
                        </div>

                        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${tool.gradient} opacity-[0.04] rounded-2xl pointer-events-none group-hover:opacity-[0.08] transition-opacity`} />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeModal && <DetailModal data={activeModal} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>

      {/* GitHub notice toast */}
      <AnimatePresence>
        {githubNotice && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border border-white/15 bg-[#13131f] shadow-2xl"
          >
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Open Source — Code Coming Soon</p>
              <p className="text-xs text-gray-500">{githubNotice} will be published to GitHub shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
