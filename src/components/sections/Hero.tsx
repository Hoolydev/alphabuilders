"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ticker = [
  { emoji: "🚀", text: "23 SISTEMAS ENTREGUES" },
  { emoji: "⚡", text: "200+ FLUXOS N8N EM PRODUÇÃO" },
  { emoji: "📈", text: "R$2M+ EM RECEITA GERADA" },
  { emoji: "🤖", text: "IA APLICADA AO NEGÓCIO" },
  { emoji: "🏗️", text: "3 ANOS CONSTRUINDO PRODUTOS REAIS" },
  { emoji: "💼", text: "SAÚDE · FINANÇAS · LOGÍSTICA · VAREJO" },
];


const doubled = [...ticker, ...ticker];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0c0c0c] overflow-hidden flex flex-col">

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow blob */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#e3fd79]/5 blur-[140px]" />

      {/* ── Main layout ── */}
      <div className="relative flex flex-col flex-1 max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-16">

        {/* Spacer */}
        <div className="flex-1 pt-32 lg:pt-36" />

        {/* ── Stats ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden border-t border-b border-white/[0.06] py-3 my-10"
        >
          <div className="flex animate-marquee-left whitespace-nowrap">
            {doubled.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 mr-16 text-[11px] font-mono uppercase tracking-[0.15em] text-white/35"
              >
                <span className="text-base">{item.emoji}</span>
                {item.text}
                <span className="text-[#e3fd79]/40 text-lg leading-none">·</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom: headline + description ── */}
        <div className="pb-20 lg:pb-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">

          {/* Left: headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.44, 0, 0.56, 1] }}
          >
            <h1
              className="font-black leading-[0.92] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(40px, 5vw, 76px)" }}
            >
              <span className="text-white block">A maioria das software houses</span>
              <span className="text-white block">entrega <span className="text-[#e3fd79]">código.</span></span>
              <span className="text-white block">A gente entrega o</span>
              <span className="text-white block">problema resolvido.</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#e3fd79] text-black font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#d4f55a] transition-all duration-300 active:scale-95"
              >
                Diagnóstico Gratuito
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="https://wa.me/5562982683262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4"
              >
                Falar no WhatsApp
              </a>
            </div>

            <p className="mt-8 text-xs text-white/25 tracking-widest uppercase">
              Sem compromisso · Resposta em até 48h · Proposta com escopo fechado
            </p>
          </motion.div>

          {/* Right: description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.44, 0, 0.56, 1] }}
            className="lg:text-right"
          >
            <p
              className="text-white/50 leading-relaxed max-w-md lg:ml-auto"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
            >
              Do diagnóstico ao deploy, construímos sistemas e automações sob medida que eliminam gargalos reais, no prazo combinado, sem código que você vai precisar jogar fora em 2 anos.
            </p>

            {/* Stats cards */}
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              {[
                { value: "23+", label: "projetos entregues" },
                { value: "200+", label: "automações em produção" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center lg:justify-end gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-3"
                >
                  <span className="text-2xl font-black text-[#e3fd79]">{stat.value}</span>
                  <span className="text-sm text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
