"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export interface ProductPageData {
  name: string;
  tagline: string;
  headline: React.ReactNode;
  subline: string;
  description: string;
  heroImage?: string;
  heroBg?: string;
  accentColor: string;
  features: { icon: string; title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  relatedAgents: { name: string; href: string; icon: string }[];
}

export default function ProductPage({ data }: { data: ProductPageData }) {
  const darkHero = !!data.heroBg;

  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: data.heroBg ?? "white" }}
      >
        <div className="max-w-6xl md:container mx-auto px-4 pt-10 pb-0">
          {/* Back */}
          <div className="mb-6">
            <Link href="/"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${darkHero ? "text-white/40 hover:text-white" : "text-gray-400 hover:text-gray-900"}`}>
              <ArrowLeft size={14} /> Voltar ao início
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pb-14"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: `${data.accentColor}22`, color: data.accentColor }}
              >
                {data.tagline}
              </div>
              <h1 className={`text-[38px] md:text-[54px] font-bold leading-[1.06] tracking-[-1.8px] mb-4 ${darkHero ? "text-white" : "text-gray-900"}`}>
                {data.headline}
              </h1>
              <p className={`text-base leading-relaxed mb-6 max-w-lg ${darkHero ? "text-white/60" : "text-gray-400"}`}>
                {data.description}
              </p>
              <p className={`text-sm mb-8 ${darkHero ? "text-white/40" : "text-gray-500"}`}>{data.subline}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all"
                >
                  Agendar Demo Gratuita <ArrowRight size={15} />
                </a>
                <a
                  href="https://wa.me/5562982683262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 h-12 px-7 rounded-full font-medium text-sm transition-all ${
                    darkHero
                      ? "border border-white/20 text-white hover:bg-white/10"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  💬 WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Image */}
            {data.heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-t-3xl overflow-hidden min-h-[380px] lg:min-h-[440px] flex items-end"
                style={{ background: darkHero ? "rgba(255,255,255,0.04)" : "#F9F9F9" }}
              >
                <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover object-top" style={{ minHeight: 380 }} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl md:container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Funcionalidades</h2>
            <p className="text-gray-400">O que você ganha ao usar o {data.name}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#F9F9F9] rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-6xl md:container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.howItWorks.map((hw, i) => (
              <motion.div
                key={hw.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-4"
                  style={{ background: data.accentColor }}>
                  {hw.step}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{hw.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{hw.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl md:container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Para quem é?</h2>
              <div className="space-y-3">
                {data.useCases.map((uc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 bg-[#F9F9F9] rounded-2xl px-4 py-3.5 border border-gray-100"
                  >
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{uc.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{uc.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA dark */}
            <div className="bg-[#050C13] rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-3">Comece agora com o {data.name}</h3>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                Setup em até 48h. Demo gratuita sem compromisso.
              </p>
              <div className="flex flex-col gap-3">
                <a href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 px-6 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">
                  📅 Agendar Demo Gratuita
                </a>
                <a href="https://wa.me/5562982683262" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 px-6 rounded-full border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">
                  💬 Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related agents ── */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-6xl md:container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Agentes que usam o {data.name}</h2>
          <div className="flex flex-wrap gap-3">
            {data.relatedAgents.map((a) => (
              <Link key={a.href} href={a.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all">
                {a.icon} {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
