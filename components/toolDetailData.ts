import { Layers, Lock, Zap, GitBranch, Terminal } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   AI CODE ANALYZER  —  PeopleSoft AI Studio Red Paper v1.0
   Created by Velu Angusamy | March 2026
═══════════════════════════════════════════════════════════════ */
export const codeAnalyzerDetail = {
  title: "PeopleSoft AI Studio",
  subtitle: "Offline-First, AI-Augmented Static Analysis Platform for PeopleSoft HCM/Financials",
  author: "Created by Velu Angusamy · Version 2.1 · March 2026",
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
          "Enterprise PeopleSoft environments are among the most complex software ecosystems on the planet. A single HCM installation can contain over 50,000 application objects, 12 GB of source XML, hundreds of COBOL payroll programs, and thousands of SQR reports — all tightly interconnected, poorly documented, and increasingly difficult to maintain as institutional knowledge walks out the door.",
        vision:
          "PeopleSoft AI Studio is not a chatbot wrapper around an LLM. It is a precision context engine that makes AI genuinely useful for enterprise ERP analysis — feeding it exactly the right information, never more, never less. A question like 'How is paycheck calculated?' produces a structured answer tracing Application Engine orchestration, COBOL gross-to-net logic, PeopleCode validations, and SQR reports in under three seconds, for less than one cent.",
        highlights: [
          { label: "PS Objects Indexed", value: "100,000+" },
          { label: "Cost per AI Query", value: "$0.003" },
          { label: "Code Coverage", value: "5 Layers" },
          { label: "Python Codebase", value: "40 Files" },
          { label: "Primary AI", value: "Anthropic Claude" },
          { label: "Design", value: "Offline-First" },
        ],
        problem: [
          "Source code scattered across XML exports, COBOL files, SQR scripts, and Oracle packages",
          "No single person understands the whole system — onboarding takes months",
          "Impact analysis for a single field change can take days of manual tracing",
          "Documentation is absent or outdated across every PeopleSoft environment",
        ],
        solution: [
          "Parse entire codebase offline once into compact inverted indexes (pickle files)",
          "Cherry-pick only the most relevant snippets per AI query — never the full codebase",
          "Natural language answers tracing AE → COBOL → PeopleCode → SQR in seconds",
          "Offline-first: no source code ever leaves the machine — safe for payroll environments",
        ],
      },
    },
    {
      id: "architecture",
      label: "Architecture",
      icon: GitBranch,
      content: {
        type: "architecture-psaistudio" as const,
        explanation:
          "The system is organized around a clear two-phase separation of concerns. Phase 1 parses all source artifacts once into compact, queryable inverted indexes serialized as pickle files. Phase 2 loads those indexes in seconds and uses targeted search to build minimal AI context, then invokes Claude to synthesize intelligent answers. The two phases are independently executable — a team member can re-parse source files while analysts continue using the existing pickle cache.",
        components: [
          {
            file: "static_analyzer.py",
            lines: "Phase 1 — Run Once",
            role: "Offline Parsing Orchestrator",
            endpoints: ["python static_analyzer.py"],
            desc: "Presents interactive menu to select which analyzer to run. Each analyzer follows the BaseAnalyzer interface: detect source files, check for existing cache, parse if needed, serialize to pickle. Parsers: SyntheticRootWrapper (64KB streaming for 12GB XML), COBOL column-oriented parser (cols 1–6: seq, col 7: indicator, cols 8–72: code), SQR regex line parser, DMS SQL store extractor, ALL_SOURCE CSV grouper.",
          },
          {
            file: "psaistudio.py",
            lines: "Phase 2 — Interactive",
            role: "AI Analysis Engine",
            endpoints: ["python psaistudio.py"],
            desc: "Loads all available pickle files at startup (1–10 seconds for 2.9 GB index). Identifies primary IndexBuilder explicitly to prevent COBOL index from being misidentified. Supports multi-turn conversations — history maintained as role/content message pairs included in every subsequent request.",
          },
          {
            file: "ai_provider.py",
            lines: "v2.1",
            role: "LLM Provider Abstraction Layer",
            endpoints: ["AI_PROVIDER env var"],
            desc: "Clean adapter pattern isolating all vendor-specific API calls behind a single chat(system, messages, max_tokens) interface. Factory function create_provider() reads AI_PROVIDER at startup. Switch between Anthropic Claude, OpenAI GPT, Azure OpenAI, or Google Gemini with one env variable — zero code changes.",
          },
          {
            file: "peoplesoft_metadata.pkl",
            lines: "2.9 GB",
            role: "PeopleSoft Object Index",
            endpoints: ["50,000+ objects · 8–10 min parse"],
            desc: "RDM (Record: fields, indexes, keys), PCM (PeopleCode: full source, event type, cross-references), PGM (Component: search record, page list), PDM (Page: field list, scroll levels), AEM/AES (App Engine: state records, steps, SQL text), SRM (SQL definitions), MDM (Menus). CrossReferenceBuilder merges table-to-program relationships across all five layers.",
          },
          {
            file: "sqr.pkl + cobol.pkl",
            lines: "136 MB + 81 MB",
            role: "SQR & COBOL Program Indexes",
            endpoints: ["SQR: ~5s · COBOL: ~3.7s parse"],
            desc: "SQR: 847 files → 4,231 procedures. procedure_index, call_graph, include_graph, sql_table_usage. COBOL: 858 .cbl + 384 .dms files → 13,865 paragraphs, 5,855 SQL stores. DMS naming convention decoded: PSPPYNET_S_PAY_CHECK → program PSPPYNET, Select type, operating on PS_PAY_CHECK.",
          },
          {
            file: "db.pkl + security_matrix.pkl",
            lines: "~8MB + ~2MB",
            role: "Oracle DB & Security Indexes",
            endpoints: ["DB: ~0.8s · Security: ~2s parse"],
            desc: "Oracle: all_source.csv → 1,516 objects, 121 procs/funcs grouped by (OWNER, NAME, TYPE). Security: PSROLEUSER/PSROLECLASS/PSAUTHITEM join → 305 users, 508 roles. Bi-directional: user→roles→components and component→who has access. AUTH_ACTIONS bitmask decoded (1=Display, 2=Add, 4=Update, 8=Delete, 16=Correction).",
          },
        ],
        serviceRegistry: [
          { name: "peoplesoft_metadata.pkl", endpoint: "2.9 GB  |  50,000+ objects  |  8–10 min parse" },
          { name: "sqr.pkl", endpoint: "136 MB  |  4,231 procedures  |  ~5 sec parse" },
          { name: "cobol.pkl", endpoint: "81 MB  |  13,865 paragraphs  |  ~3.7 sec parse" },
          { name: "db.pkl", endpoint: "~8–50 MB  |  1,516 objects  |  ~0.8 sec parse" },
          { name: "security_matrix.pkl", endpoint: "~2 MB  |  305 users, 508 roles  |  ~2 sec parse" },
        ],
      },
    },
    {
      id: "howitworks",
      label: "How It Works",
      icon: Zap,
      content: {
        type: "howitworks-teams" as const,
        intro: "The most important design decision is how context is assembled for Claude. The full pickle is never sent. A precision pipeline extracts only what is relevant, keeping input tokens in the 3,000–8,000 range per query — roughly 10x less than a naive approach — while providing richer, more targeted information than dumping raw source files ever could.",
        example: {
          userMessage: "How is paycheck calculated?",
          steps: [
            { n: "01", actor: "User Question", action: '"How is paycheck calculated?"' },
            { n: "02", actor: "Keyword Extraction", action: 'Remove stop words → ["paycheck", "calculated"]' },
            { n: "03", actor: "Targeted Index Search", action: "Query PSFT + SQR + COBOL + DB indexes in memory simultaneously" },
            { n: "04", actor: "Cherry-Pick Context", action: "2–3 objects (1,500 chars each) + 5–10 snippets (800 chars each)" },
            { n: "05", actor: "Build System Prompt", action: "Static architect persona (~300 tokens) + dynamic context ≈ 5,000 tokens total" },
            { n: "06", actor: "LLM Provider Call", action: "Configured provider (Anthropic/OpenAI/Azure/Gemini) | max_tokens: 4,096 | cost ≈ $0.003" },
            { n: "07", actor: "Structured Response", action: "Process flow · Tables touched · Programs involved · Calculations traced" },
          ],
        },
        zeroNav:
          "Cross-analyzer result for 'How is paycheck calculated?': PeopleSoft Metadata finds PAY_CHECK record (245 fields) + 23 PeopleCode matches. SQR finds paygl02.sqr (173 matches — GL posting) + pay003.sqr (45 matches — check printing). COBOL finds PSPPYNET.cbl (GROSS TO NET CALCULATION) + PSPDEDTN.cbl (DEDUCTION CALCULATION). Claude receives ~5,000 tokens of targeted context and answers exactly as a senior PeopleSoft architect would reason — following the architecture order of truth.",
        capabilities: [
          { icon: "🔍", title: "Object Lookup", example: "Full metadata for any PeopleSoft object by name" },
          { icon: "🔎", title: "Code Search", example: "Full-text search across all PeopleCode and SQL definitions" },
          { icon: "📌", title: "Field Usage", example: "Everywhere a given field is referenced across the system" },
          { icon: "🔗", title: "Record Dependencies", example: "All objects that reference a given record/table" },
          { icon: "⚠️", title: "Impact Analysis", example: "Direct + indirect impact with risk scoring (High/Medium/Low)" },
          { icon: "📝", title: "Documentation Generator", example: "Static-only technical documentation — zero API cost" },
          { icon: "🔄", title: "Process Trace", example: "End-to-end business process trace using keyword matching" },
          { icon: "💡", title: "Change Suggestion", example: "Risk assessment for proposed modifications" },
        ],
      },
    },
    {
      id: "security",
      label: "Cost & Setup",
      icon: Terminal,
      content: {
        type: "security-teams" as const,
        intro:
          "Estimated cost per query: ~$0.003 (less than one-third of a cent). A developer running 100 analysis sessions per day spends approximately $0.30. Monthly cost for a 5-person team with heavy usage: under $50. Static analysis tools operate on local indexes with zero API cost — AI queries are opt-in and precisely scoped.",
        layers: [
          {
            layer: "Step 1 — Export Source Files",
            icon: "📁",
            desc: "App Designer: psidex command-line tool → single .XML export. SQR: copy .sqr/.sqc/.cod from PS_HOME/sqr/. COBOL: copy .cbl/.dms from PS_HOME/src/cbl/. Oracle: SELECT owner,name,type,line,text FROM all_source → export CSV. Security: run PSROLEUSER/PSROLECLASS/PSAUTHITEM join → export CSV.",
          },
          {
            layer: "Step 2 — Parse and Index",
            icon: "⚙️",
            desc: "Run: python static_analyzer.py. Select each analyzer (1–5) in turn. Parsers run autonomously with real-time progress: '34.2% (3891/11274 MB) | 45,000 objects | 195 MB/s | ETA: 38s'. Write .pkl files to pickles/ directory. Total time for full HCM: under 15 minutes.",
          },
          {
            layer: "Step 3 — Analyze",
            icon: "🤖",
            desc: "Run: python psaistudio.py. Indexes load in seconds (even for 2.9 GB). Choose: Analyze code with prompt | Ask a question | Generate documentation. AI is immediately available. Multi-turn conversation: ask 'Explain payroll flow', follow up 'What tables are updated in step 3?', then 'Show me the COBOL code for deductions'.",
          },
          {
            layer: "Step 4 — Configure LLM Provider",
            icon: "🔧",
            desc: "Set AI_PROVIDER in .env: 'anthropic' (default, ANTHROPIC_API_KEY + CLAUDE_MODEL) | 'openai' (OPENAI_API_KEY + OPENAI_MODEL) | 'azure' (AZURE_OPENAI_KEY + ENDPOINT + DEPLOYMENT) | 'gemini' (GEMINI_API_KEY + GEMINI_MODEL). No code changes required — switch providers with one env variable.",
          },
        ],
        dataFlow: "Business Case: A platform migration that traditionally requires 6 months and a team of 10 consultants becomes a 2-month project for a team of 3, with AI handling the analysis work that used to require the most expensive expertise.",
        designDecisions: [
          { title: "Offline-First Design", reason: "All parsing runs locally — no code sent to cloud. Security and compliance for sensitive payroll code. Source code never leaves the machine." },
          { title: "Parse Once, Query Many", reason: "Pickle-serialized indexes survive session restarts. 12 GB XML loads in 10 min; reloads in 8 seconds. Re-parse and query are independently executable." },
          { title: "Minimal Token Usage", reason: "Cherry-picked snippets only — never the full index. Objects truncated to 1,500 chars, snippets to 800 chars. Max 5–10 matches per search type. Full 3 GB+ index is never sent to the API." },
          { title: "Architecture Order of Truth", reason: "Static system prompt establishes AE → COBOL → PeopleCode → SQR hierarchy (~300 tokens). AI answers follow real-world authority structure, not surface-level keyword matches." },
        ],
      },
    },
  ],
  stack: [
    { layer: "Language", tech: "Python 3.11+  ·  40 files" },
    { layer: "Primary AI", tech: "Anthropic Claude (claude-haiku-4-5)" },
    { layer: "AI Providers", tech: "Anthropic | OpenAI | Azure OpenAI | Google Gemini" },
    { layer: "Parse Engine", tech: "SyntheticRootWrapper  ·  COBOL column parser  ·  SQR regex" },
    { layer: "Index Format", tech: "Pickle-serialized inverted indexes (O(1) lookup)" },
    { layer: "Static Tools", tech: "8 zero-cost analysis tools (no API calls)" },
    { layer: "Coverage", tech: "PSFT XML + SQR + COBOL + Oracle DB + Security Matrix" },
    { layer: "Deployment", tech: "Offline / Air-gapped / On-premise" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   COPILOT INTEGRATION  —  Microsoft Copilot for PeopleSoft Red Paper
   Created by Velu Angusamy | March 2026
═══════════════════════════════════════════════════════════════ */
export const copilotDetail = {
  title: "Microsoft Copilot for PeopleSoft",
  subtitle: "Architecture Options & Decision Guide — Power Automate · Custom Connector · FastAPI Middleware",
  author: "Created by Velu Angusamy · HR Pulse for PeopleSoft · March 2026",
  gradient: "from-indigo-600 to-purple-600",
  accentColor: "indigo",
  sections: [
    {
      id: "overview",
      label: "Overview",
      icon: Layers,
      content: {
        type: "overview" as const,
        summary:
          "Microsoft Copilot Studio can be connected to PeopleSoft HCM through three integration patterns. Each pattern places 'intelligence' — identity resolution, orchestration, and data transformation — in a different layer of the stack. Choosing the wrong pattern results in excessive licensing costs, brittle flows, or an architecture that cannot scale beyond a proof-of-concept.",
        vision:
          "All three options share the same end-user experience — a conversational agent inside Microsoft Teams — but differ significantly in how requests flow between Copilot and PeopleSoft. Four design principles apply to all options: Zero-trust identity (EMPLID resolved server-side via Azure AD), No data replication (all reads go directly to PeopleSoft via Integration Broker REST), Copilot-native (built on Copilot Studio Tools and custom connectors), and AI-enriched responses (Generative AI summarises raw PeopleSoft data into human-readable answers).",
        highlights: [
          { label: "Platform", value: "PeopleSoft HCM 9.2" },
          { label: "PeopleTools", value: "8.60+" },
          { label: "Option 1 Logic", value: "Power Automate" },
          { label: "Option 2 Logic", value: "APIM Policies" },
          { label: "Option 3 Logic", value: "FastAPI Middleware" },
          { label: "Recommended", value: "Option 3 — FastAPI" },
        ],
        problem: [
          "Three distinct integration patterns exist — choosing wrong means licensing waste or scale ceilings",
          "Power Automate adds 1–3 seconds latency per request and requires Premium licensing for HTTP connectors",
          "APIM-only logic is vendor-locked to Azure and difficult to test or debug",
          "Employee ID must always be resolved server-side — never trusted from user input or caller",
        ],
        solution: [
          "Option 3 (FastAPI Middleware) eliminates Power Automate Premium — no extra licensing required",
          "Stateless Python middleware is fully testable with pytest and debuggable with any IDE",
          "services.json config-driven: add new PeopleSoft services with zero code changes or redeployment",
          "Standard response envelope: every endpoint returns the same JSON shape — Copilot tools are predictable",
        ],
      },
    },
    {
      id: "architecture",
      label: "3 Architecture Options",
      icon: GitBranch,
      content: {
        type: "architecture-copilot" as const,
        explanation:
          "Three architecturally distinct options are documented. All three share the same end-user experience in Teams but differ in where orchestration logic lives — and what that means for licensing cost, latency, scalability, and operational complexity.",
        options: [
          {
            num: "1",
            title: "Power Automate (Logic Brain)",
            flow: "Copilot Studio → Power Automate → APIM → PeopleSoft HCM",
            color: "border-yellow-500/40 bg-yellow-500/5",
            titleColor: "text-yellow-300",
            licensing: "Premium required",
            complexity: "Low",
            scale: "Limited",
            recommended: false,
            bestFor: "Pilot deployments, demos, or small organisations where Premium licensing is already in place and developer resources are limited. Not recommended as a long-term production architecture.",
            responsibilities: [
              { component: "Copilot Studio", role: "Intent detection, tool selection, response rendering via Adaptive Cards" },
              { component: "Power Automate", role: "Flow orchestration, user identity fetch (O365 connector), EMPLID mapping, JSON transformation, conditional logic" },
              { component: "APIM", role: "HTTP gateway — SSL termination, basic auth header injection, rate limiting" },
              { component: "PeopleSoft IB REST", role: "Listening Connector exposing ExecuteQuery.v1 and CI REST endpoints" },
            ],
            pros: ["Low-code, rapid prototyping — no Python or Java required", "Visual flow designer reduces onboarding time for new developers", "Native integration with Microsoft 365 connectors (Users, SharePoint, Teams)", "Suitable for quick demos and proof-of-concept deployments"],
            cons: ["Requires Power Automate Premium licensing for HTTP and Dataverse connectors", "Adds 1–3 seconds of additional latency per flow execution", "Flow logic becomes brittle at scale — error handling and retries require manual wiring", "Not suitable for high-concurrency enterprise use — flow throttling limits apply", "EMPLID mapping in a flow is a non-trivial identity security risk if not carefully implemented"],
          },
          {
            num: "2",
            title: "APIM Policies (Logic Brain)",
            flow: "Copilot Studio → Custom Connector → APIM (Logic Brain) → PeopleSoft HCM",
            color: "border-blue-500/40 bg-blue-500/5",
            titleColor: "text-blue-300",
            licensing: "Premium required",
            complexity: "Medium",
            scale: "Good",
            recommended: false,
            bestFor: "Organisations already invested in Azure API Management with Premium licensing in place, where centralising gateway logic in one Microsoft-native tool is a priority. Good middle ground between low-code and full custom development.",
            responsibilities: [
              { component: "Copilot Studio", role: "Intent detection, tool selection, Generative AI completion, response rendering" },
              { component: "Custom Connector", role: "HTTP transport bridge — holds OAuth 2.0 credentials, injects Bearer token, surfaces 3 operations to Copilot" },
              { component: "APIM (Logic Brain)", role: "validate-jwt (RS256 against Azure AD JWKS) → send-request (MS Graph OID → employeeId) → set-query-parameter (inject EMPLID) → set-body outbound (transform PS JSON)" },
              { component: "PeopleSoft IB REST", role: "Listening Connector — ExecuteQuery.v1 for leave/paycheck, CI REST for leave application" },
            ],
            pros: ["Cleaner architecture — no Power Automate runtime dependency", "Reduced end-to-end latency vs. Option 1 (no flow engine overhead)", "APIM policies are version-controlled and auditable", "Centralised rate limiting, caching, and analytics via APIM"],
            cons: ["Still requires Power Platform Premium licensing for Custom Connector HTTP calls", "APIM policy XML is C# expression-based — steep learning curve without APIM expertise", "Complex transformation logic (nested JSON, conditional mapping) becomes unwieldy in policy XML", "Vendor lock-in: logic embedded in APIM cannot be reused outside the Azure ecosystem"],
          },
          {
            num: "3",
            title: "FastAPI Middleware — HR Pulse Architecture (Recommended)",
            flow: "Copilot Studio → Custom Connector → APIM (Gateway) → FastAPI Middleware (Brain) → PeopleSoft HCM",
            color: "border-green-500/40 bg-green-500/5",
            titleColor: "text-green-300",
            licensing: "No premium",
            complexity: "Higher",
            scale: "Enterprise",
            recommended: true,
            bestFor: "Enterprise production deployments where scale, maintainability, security, and licensing cost are priorities. This is the recommended architecture for HR Pulse and any PeopleSoft Copilot integration intended for more than a handful of users.",
            responsibilities: [
              { component: "Copilot Studio", role: "Intent detection, tool selection, Generative AI completion, Adaptive Card rendering in Teams" },
              { component: "Custom Connector", role: "HTTP transport — holds OAuth 2.0 credentials, injects Bearer token, surfaces operations (no Premium required for connector-only)" },
              { component: "APIM (Gateway only)", role: "SSL termination, route forwarding to FastAPI, optional rate limiting and usage analytics — zero business logic" },
              { component: "FastAPI Middleware", role: "JWT validation (PyJWT + Azure JWKS), MS Graph identity resolution, services.json service registry, ordered PS parameter construction, response transformation, standard envelope" },
              { component: "PeopleSoft IB", role: "ExecuteQuery.v1 REST (leave, paycheck), CI REST (leave application), Component Interface mutations" },
            ],
            pros: ["No Power Automate Premium licensing required — only Standard Copilot Studio + APIM", "Pure Python: fully testable with pytest, debuggable with any IDE, no vendor tooling dependency", "services.json config-driven: add new PeopleSoft services with zero code changes", "Standard envelope: every endpoint returns the same JSON shape — Copilot tools are predictable", "Horizontally scalable: stateless FastAPI behind Azure App Service or Container Apps", "Zero data replication: all reads go directly to live PeopleSoft data"],
            cons: ["Requires development effort: Python, FastAPI, JWT handling, and MS Graph integration", "Requires infrastructure management: hosting, TLS, monitoring, and scaling of the FastAPI service", "More moving parts than Options 1 and 2 — four layers vs. three"],
          },
        ],
      },
    },
    {
      id: "howitworks",
      label: "How It Works",
      icon: Zap,
      content: {
        type: "howitworks-teams" as const,
        intro: "Option 3 (FastAPI Middleware) processes every inbound request through six sequential stages within the FastAPI middleware. Each stage has a single responsibility and fails fast with a structured error envelope. The services.json pattern means main.py is a pure generic engine — adding a new PeopleSoft service requires only a JSON entry, no Python changes, no redeployment.",
        example: {
          userMessage: "What is my leave balance?",
          steps: [
            { n: "1", actor: "Copilot Studio", action: "User sends natural language query inside Microsoft Teams" },
            { n: "2", actor: "Custom Connector", action: "Injects Azure AD Bearer token and forwards request to APIM" },
            { n: "3", actor: "APIM (Gateway)", action: "SSL termination and route forwarding to FastAPI — zero business logic" },
            { n: "4", actor: "FastAPI — JWT Validation", action: "PyJWT verifies RS256 signature against Azure AD JWKS, extracts oid claim. Reject 401 if invalid." },
            { n: "5", actor: "FastAPI — Identity Resolution", action: "Call MS Graph /v1.0/users/{oid}. Extract employeeId → EMPLID. Never trust caller-supplied ID." },
            { n: "6", actor: "FastAPI — Service Registry", action: "Load service definition from services.json: path, method, field_map, query param order, computed fields" },
            { n: "7", actor: "FastAPI — Backend Call", action: "Build ordered PS parameter tuple. Call PeopleSoft IB with Basic auth. Handle PS error codes." },
            { n: "8", actor: "FastAPI — Transform", action: "Apply value_map (PLAN_TYPE codes → labels), evaluate computed_fields, strip exclude_fields, flatten nested PS JSON" },
            { n: "9", actor: "FastAPI — Standard Envelope", action: 'Wrap as { status, service, emplid, count, data[] }. Same shape for every endpoint.' },
            { n: "10", actor: "Copilot Studio", action: "Generative AI completion formats JSON into natural language + Adaptive Card displayed in Teams" },
          ],
        },
        zeroNav:
          "PLAN_TYPE Code Mapping: PeopleSoft stores leave plan types as numeric codes. Always translate before returning to Copilot Studio — the AI cannot reliably interpret raw codes. Codes: 50=Sick Leave, 51=Annual Leave, 52=Casual Leave, 53=Maternity Leave, 54=Paternity Leave, 55=Compensatory Leave. ExecuteQuery.v1 requires ordered parameters: isconnectedquery, maxrows, prompt_uniquepromptname, prompt_fieldvalue (EMPLID — server-resolved), json_resp.",
        capabilities: [
          { icon: "📅", title: "Leave Balance", example: "getLeaveBalance (GET) — ExecuteQuery.v1" },
          { icon: "📄", title: "Paycheck History", example: "getPaycheck (GET) — ExecuteQuery.v1" },
          { icon: "✈️", title: "Leave Application", example: "applyLeave (POST) — CI REST Component Interface" },
          { icon: "🔐", title: "Zero-Trust Identity", example: "EMPLID always resolved server-side via MS Graph" },
          { icon: "⚙️", title: "Config-Driven Services", example: "Add new PS service with JSON entry only — no code" },
          { icon: "📦", title: "Standard Envelope", example: '{ status, service, emplid, count, data[] } — always' },
        ],
      },
    },
    {
      id: "security",
      label: "Decision Matrix",
      icon: Lock,
      content: {
        type: "security-teams" as const,
        intro: "Use the following decision matrix to select the appropriate architecture based on your organisation's constraints and priorities. All three options share zero-trust identity principles — EMPLID is always resolved server-side and never trusted from user input.",
        layers: [
          {
            layer: "Proof of Concept / Demo (< 50 users) → Option 1",
            icon: "🟡",
            desc: "Power Automate Logic Brain. Premium licensing required. Development effort: Low (no-code). Latency: High (+1–3s). Scalability: Limited. Fastest path to a working demo with minimal technical investment.",
          },
          {
            layer: "Mid-scale Deployment (50–500 users) → Option 2",
            icon: "🔵",
            desc: "APIM Policies Logic Brain. Premium licensing required. Development effort: Medium (policy XML). Latency: Low. Scalability: Good (APIM scaling). Better performance with centralised gateway control. Good middle ground.",
          },
          {
            layer: "Enterprise Production (500+ users) → Option 3 ✓ Recommended",
            icon: "🟢",
            desc: "FastAPI Middleware. No Premium licensing required. Development effort: Higher (Python). Latency: Low. Scalability: Enterprise. Only option that scales without licensing penalty and supports the full config-driven service registry.",
          },
          {
            layer: "Adding New PeopleSoft Services",
            icon: "🔧",
            desc: "Option 1: New flow required in Power Automate. Option 2: New APIM policy required. Option 3: JSON entry only in services.json — no Python changes, no redeployment of application code.",
          },
        ],
        dataFlow: "Recommended flow (Option 3): Teams → Copilot Studio → Custom Connector (OAuth 2.0 Bearer) → APIM (SSL/routing only) → FastAPI (JWT validate → MS Graph resolve → services.json → PeopleSoft IB → transform → standard envelope) → PeopleSoft HCM.",
        designDecisions: [
          { title: "Premium License Required", reason: "Option 1: Yes (PA + Connector) | Option 2: Yes (Connector HTTP) | Option 3: No — only Standard Copilot Studio + APIM needed" },
          { title: "Testability / Debuggability", reason: "Option 1: Limited (run history only) | Option 2: Trace mode only | Option 3: Full pytest coverage, standard IDE debugger" },
          { title: "Logic Portability", reason: "Option 1: Power Automate only | Option 2: Azure APIM only | Option 3: Any cloud or on-premise — pure Python, no vendor dependency" },
          { title: "Identity Security (zero-trust)", reason: "Option 1: Manual mapping (security risk) | Option 2: APIM validate-jwt policy | Option 3: PyJWT + MS Graph — never trusts caller-supplied EMPLID" },
        ],
      },
    },
  ],
  stack: [
    { layer: "Copilot Interface", tech: "Microsoft Copilot Studio + Teams" },
    { layer: "Transport", tech: "Power Platform Custom Connector (OAuth 2.0)" },
    { layer: "Gateway", tech: "Azure API Management (APIM)" },
    { layer: "Middleware (Opt 3)", tech: "FastAPI + Python 3.11+ + PyJWT + httpx" },
    { layer: "Identity", tech: "Azure AD + Microsoft Graph API" },
    { layer: "HR Data", tech: "PeopleSoft HCM 9.2 — Integration Broker REST" },
    { layer: "JWT Auth", tech: "RS256 + Azure AD JWKS endpoint" },
    { layer: "AI Enrichment", tech: "Generative AI completion via Copilot Studio" },
  ],
};
