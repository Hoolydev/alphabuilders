"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    label: "N1",
    name: "Chatbot",
    desc: "Triagem automática e autoatendimento para dúvidas e pedidos frequentes",
    color: "bg-blue-500",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: "N2",
    name: "Agente de IA",
    desc: "Conversas complexas com memória, contexto e raciocínio avançado",
    color: "bg-purple-500",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    bgLight: "bg-purple-50",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        <path d="M12 2v2M12 14v8"/>
      </svg>
    ),
  },
  {
    label: "N3",
    name: "Humano",
    desc: "Escalação inteligente para atendimento humano nos casos críticos",
    color: "bg-emerald-500",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-600",
    bgLight: "bg-emerald-50",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function BotsAIHumansSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl px-4 md:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: dark card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[24px] bg-[#050C13] p-8 md:p-12 flex flex-col justify-between min-h-[420px] overflow-hidden"
          >
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative z-10">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Atendimento em camadas</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                Agentes de IA,{" "}
                <span className="gradient-text">Chatbots</span>
                {" "}e Humanos{" "}
                <br className="hidden md:block" />
                trabalhando juntos
              </h2>
              <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
                Configure regras de escalação inteligentes. Cada conversa é resolvida
                no nível certo — automático quando possível, humano quando necessário.
              </p>
              <ul className="space-y-3">
                {[
                  "Triagem automática por intenção e urgência",
                  "Transferência com contexto completo da conversa",
                  "Relatórios de performance por nível",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="text-emerald-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 mt-8">
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver demonstração
              </a>
            </div>
          </motion.div>

          {/* Right: flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F9F9F9] rounded-[24px] p-8 flex flex-col justify-center gap-4"
          >
            <div className="mb-2">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Fluxo de atendimento</p>
              <h3 className="text-xl font-bold text-gray-900">3 níveis de suporte</h3>
              <p className="text-sm text-gray-400 mt-1">Da triagem ao fechamento, sem perder nenhum cliente</p>
            </div>

            <div className="flex flex-col gap-3">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={`flex items-start gap-4 bg-white rounded-2xl p-4 border ${tier.borderColor} border-opacity-60`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${tier.bgLight} ${tier.textColor} flex items-center justify-center`}>
                      {tier.svg}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-bold ${tier.textColor} uppercase tracking-wider`}>{tier.label}</span>
                        <span className="text-sm font-semibold text-gray-900">{tier.name}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{tier.desc}</p>
                    </div>
                  </div>
                  {i < tiers.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-0.5 h-3 bg-gray-200 rounded" />
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1l4 4 4-4" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
