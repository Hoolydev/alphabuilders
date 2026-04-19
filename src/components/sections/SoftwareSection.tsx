"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "agentes-ia",
    icon: "🤖",
    label: "Agentes de IA",
    description: "Agentes customizados treinados com o contexto do seu negócio",
    accent: "#0080ff",
    projects: [
      {
        id: "sdr-custom",
        title: "SDR IA Customizado",
        description: "Agente de vendas treinado com seu playbook. Qualifica leads, agenda reuniões e nutre prospects no WhatsApp 24/7.",
        tags: ["WhatsApp", "GPT-4", "CRM Integration", "n8n"],
      },
      {
        id: "atendimento",
        title: "Atendimento Omnichannel",
        description: "Central de atendimento com IA que redireciona para humanos quando necessário. Integra WhatsApp, Instagram e e-mail.",
        tags: ["Omnichannel", "Triagem IA", "SLA Tracking"],
      },
    ],
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xs bg-[#0d0d0d] rounded-2xl border border-white/[0.08] overflow-hidden">
          <div className="bg-[#161616] px-4 py-3 flex items-center gap-2 border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0080ff]" />
            <span className="text-xs text-white/40">Alpha SDR AI · Ativo</span>
          </div>
          <div className="p-4 space-y-3">
            {[
              { side: "right", text: "Olá! Tenho interesse no produto." },
              { side: "left", text: "Perfeito! Qual é o tamanho da sua equipe de vendas?" },
              { side: "right", text: "Somos 5 vendedores." },
              { side: "left", text: "Ótimo! Posso agendar uma demo para amanhã às 10h?" },
            ].map((msg, i) => (
              <div key={i} className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`text-xs px-3 py-2 rounded-xl max-w-[80%] leading-relaxed ${
                    msg.side === "right" ? "bg-[#0080ff]/20 text-blue-300" : "bg-white/[0.06] text-white/60"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-1 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0080ff] animate-bounce" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0080ff] animate-bounce" style={{ animationDelay: "0.15s" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0080ff] animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "automacoes",
    icon: "⚡",
    label: "Automações n8n",
    description: "Fluxos de automação que eliminam trabalho manual repetitivo",
    accent: "#e3fd79",
    projects: [
      {
        id: "flow-leads",
        title: "Pipeline de Leads Automático",
        description: "Capta leads do formulário, enriquece com dados do LinkedIn, qualifica via IA e distribui para o vendedor certo no CRM.",
        tags: ["n8n", "OpenAI", "HubSpot", "LinkedIn"],
      },
      {
        id: "flow-reports",
        title: "Relatórios Gerenciais IA",
        description: "Consolida dados de múltiplos sistemas, gera análise com GPT-4 e envia relatório executivo todo dia às 7h.",
        tags: ["GPT-4", "Google Sheets", "Slack", "Cron"],
      },
    ],
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-xs text-white/30 uppercase tracking-widest">Fluxo n8n em produção</div>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <div className="text-xs text-[#e3fd79]/60">● Live</div>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {["Formulário", "Apolo.io", "GPT-4", "HubSpot", "Slack"].map((node, i, arr) => (
              <div key={node} className="flex items-center gap-3">
                <div className="px-3 py-2 rounded-xl bg-[#1a1a1a] border border-white/[0.08] text-xs text-white/60 whitespace-nowrap">
                  {node}
                </div>
                {i < arr.length - 1 && (
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                    <path d="M0 4h20M16 0l4 4-4 4" stroke="#e3fd79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "Leads/mês", value: "2.847" },
              { label: "Qualificados", value: "68%" },
              { label: "Tempo economiz.", value: "42h" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111] rounded-xl p-3 border border-white/[0.06] text-center">
                <div className="text-lg font-bold text-[#e3fd79]">{stat.value}</div>
                <div className="text-[10px] text-white/30 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sistemas",
    icon: "🏗️",
    label: "Sistemas Web",
    description: "Sistemas SaaS, CRMs e dashboards sob medida para seu negócio",
    accent: "#ff0080",
    projects: [
      {
        id: "crm-custom",
        title: "CRM Personalizado",
        description: "CRM construído especificamente para o seu processo de vendas. Funil visual, automações e relatórios do jeito que você precisa.",
        tags: ["Next.js", "PostgreSQL", "Tailwind", "Prisma"],
      },
      {
        id: "saas",
        title: "Plataforma SaaS",
        description: "Do MVP ao produto escalável. Construímos com arquitetura que cresce junto com seu negócio — auth, billing, multi-tenant.",
        tags: ["Next.js", "Stripe", "Supabase", "Vercel"],
      },
    ],
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full bg-[#0d0d0d] rounded-2xl border border-white/[0.08] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#131313] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-xs text-white/30">Dashboard · CRM Alpha</span>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            {[
              { label: "MRR", value: "R$ 87k", change: "+12%" },
              { label: "Leads Ativos", value: "1.284", change: "+8%" },
              { label: "Taxa Conversão", value: "24%", change: "+3%" },
              { label: "Ticket Médio", value: "R$ 4.200", change: "+18%" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-[#111] rounded-xl p-3 border border-white/[0.06]">
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">{kpi.label}</div>
                <div className="text-base font-bold text-white">{kpi.value}</div>
                <div className="text-xs text-[#ff0080] mt-0.5">{kpi.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mobile",
    icon: "📱",
    label: "Apps Mobile",
    description: "Apps iOS e Android com qualidade premium e entrega em semanas",
    accent: "#8b00ff",
    projects: [
      {
        id: "app-field",
        title: "App de Campo",
        description: "App para equipes externas com coleta offline, fotos georreferenciadas, checklists e sincronização automática.",
        tags: ["React Native", "SQLite offline", "Maps API", "Push Notifications"],
      },
      {
        id: "app-cliente",
        title: "App do Cliente",
        description: "Portal mobile para seus clientes acompanharem pedidos, abrirem chamados e consumirem conteúdo exclusivo.",
        tags: ["Expo", "Supabase", "Stripe", "Analytics"],
      },
    ],
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-44 bg-[#0d0d0d] rounded-[2rem] border border-white/[0.08] overflow-hidden shadow-2xl">
          <div className="h-6 flex items-center justify-center">
            <div className="w-16 h-1.5 bg-white/10 rounded-full" />
          </div>
          <div className="px-3 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50">Alpha App</span>
              <div className="w-6 h-6 rounded-full bg-[#8b00ff]/20 flex items-center justify-center">
                <span className="text-[10px]">🔔</span>
              </div>
            </div>
            <div className="bg-[#8b00ff]/10 rounded-2xl p-3 border border-[#8b00ff]/20">
              <div className="text-[10px] text-[#8b00ff] mb-1">Pedido #1847</div>
              <div className="text-xs text-white/70">Em transporte</div>
              <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-[#8b00ff] rounded-full" />
              </div>
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="bg-[#111] rounded-xl p-2.5 border border-white/[0.06]">
                <div className="h-2 w-3/4 bg-white/10 rounded mb-1.5" />
                <div className="h-1.5 w-1/2 bg-white/[0.06] rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function SoftwareSection() {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [activeProject, setActiveProject] = useState(categories[0].projects[0]);

  const category = categories.find((c) => c.id === activeCat)!;

  function selectCategory(id: string) {
    setActiveCat(id);
    const cat = categories.find((c) => c.id === id)!;
    setActiveProject(cat.projects[0]);
  }

  return (
    <section id="servicos" className="py-20 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-white/50 mb-4">
            Desenvolvimento Personalizado
          </div>
          <h2
            className="font-bold text-white mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Software feito sob{" "}
            <span className="text-[#e3fd79]">medida</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl">
            Do agente de IA ao sistema enterprise. Construímos o que resolve o seu problema, no prazo combinado.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile horizontal scroll */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all border ${
                  activeCat === cat.id
                    ? "bg-white/[0.06] border-white/[0.15] text-white"
                    : "border-transparent text-white/40 bg-white/[0.02]"
                }`}
              >
                <span>{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Desktop vertical list */}
          <div className="hidden lg:flex flex-col gap-2 lg:w-64 flex-shrink-0">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onClick={() => selectCategory(cat.id)}
                className={`flex items-start gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group ${
                  activeCat === cat.id
                    ? "bg-white/[0.06] border border-white/[0.1]"
                    : "hover:bg-white/[0.03] border border-transparent"
                }`}
              >
                <span className="text-xl mt-0.5 flex-shrink-0">{cat.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-semibold transition-colors ${
                    activeCat === cat.id ? "text-white" : "text-white/50 group-hover:text-white"
                  }`}>
                    {cat.label}
                  </p>
                  <p className="text-xs text-white/30 leading-relaxed mt-0.5 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                {activeCat === cat.id && (
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.accent }} />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111] border border-white/[0.08] rounded-2xl overflow-hidden"
              >
                {/* Tab bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm font-semibold text-white">{category.label}</span>
                    <span className="text-xs text-white/30 ml-1">({category.projects.length})</span>
                  </div>
                  <div className="flex gap-1 overflow-x-auto scrollbar-none">
                    {category.projects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveProject(p)}
                        className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                          activeProject.id === p.id
                            ? "text-white bg-white/[0.1]"
                            : "text-white/30 hover:text-white/60"
                        }`}
                        style={activeProject.id === p.id ? { borderBottom: `1px solid ${category.accent}` } : {}}
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Mockup */}
                  <div className="md:flex-1 relative bg-[#0d0d0d] overflow-hidden" style={{ minHeight: 260 }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCat}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0"
                      >
                        {category.mockup}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Project info */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.3 }}
                      className="md:w-64 flex-shrink-0 p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/[0.08]"
                    >
                      <div>
                        <h3 className="text-base font-semibold text-white mb-2">
                          {activeProject.title}
                        </h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                          {activeProject.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-md bg-white/[0.04] text-white/40 border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center gap-2 text-xs font-semibold text-white px-4 py-2.5 rounded-xl w-fit transition-all duration-300 hover:opacity-80"
                        style={{ background: `${category.accent}18`, color: category.accent, border: `1px solid ${category.accent}30` }}
                      >
                        Solicitar orçamento <ArrowRight size={13} />
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
