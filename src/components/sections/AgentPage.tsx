"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AgentData {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  desc: string;
  longDesc: string;
  avatar: string;
  image: string;
  features: { icon: string; title: string; desc: string }[];
  channels: string[];
  useCases: string[];
  color: string;
}

export default function AgentPage({ agent }: { agent: AgentData }) {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-0">
        {/* Back nav */}
        <div className="max-w-6xl md:container mx-auto px-4 mb-8">
          <Link href="/#agentes" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors">
            <ArrowLeft size={14} /> Todos os Agentes
          </Link>
        </div>

        <div className="max-w-6xl md:container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-16"
          >
            {/* Role badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: `${agent.color}18`, color: agent.color }}
            >
              {agent.role}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.08] tracking-[-1.5px] mb-4">
              {agent.name}
            </h1>
            <p className="text-xl text-gray-400 font-medium mb-3">{agent.tagline}</p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-lg">
              {agent.longDesc}
            </p>

            {/* Channels */}
            <div className="flex flex-wrap gap-2 mb-8">
              {agent.channels.map((ch) => (
                <span key={ch} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                  {ch}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-all active:scale-95"
              >
                Contratar este Agente <ArrowRight size={15} />
              </a>
              <a
                href="https://wa.me/5562982683262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-all"
              >
                💬 Conversar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative min-h-[400px] lg:min-h-[500px] rounded-t-[32px] overflow-hidden bg-[#F9F9F9]"
            style={{ background: `linear-gradient(160deg, ${agent.color}15 0%, #F9F9F9 60%)` }}
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-full object-cover object-top"
              style={{ minHeight: 400 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl md:container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              O que este agente faz
            </h2>
            <p className="text-gray-400">Capacidades que você ativa ao contratar o {agent.name}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agent.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#F9F9F9] rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{feat.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{feat.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-6xl md:container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Casos de Uso</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Para quem é o {agent.name}?
              </h2>
              <ul className="space-y-4">
                {agent.useCases.map((uc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 bg-white rounded-xl px-4 py-3.5 border border-gray-100"
                  >
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-gray-600 leading-relaxed">{uc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-[#050C13] rounded-3xl p-8 md:p-10">
              <div className="mb-6">
                <img src={agent.avatar} alt={agent.name} className="w-14 h-14 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Pronto para implantar o {agent.name}?
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Fazemos o setup completo em até 48h. Demo gratuita, sem compromisso.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors"
                >
                  📅 Agendar Demo Gratuita
                </a>
                <a
                  href="https://wa.me/5562982683262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  💬 Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other agents ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl md:container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Outros Agentes da Alpha Builders</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Agente SDR", href: "/agentes/sdr", icon: "🎯" },
              { name: "Agente Suporte", href: "/agentes/suporte", icon: "💬" },
              { name: "Agente CRM", href: "/agentes/crm", icon: "📊" },
              { name: "Agente Agendamento", href: "/agentes/agendamento", icon: "📅" },
              { name: "Agente Closer", href: "/agentes/closer", icon: "🤝" },
              { name: "Agente Outbound", href: "/agentes/outbound", icon: "🚀" },
              { name: "Agente Blog", href: "/agentes/blog", icon: "✍️" },
            ].filter((a) => !a.href.includes(agent.slug)).map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <span>{a.icon}</span> {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
