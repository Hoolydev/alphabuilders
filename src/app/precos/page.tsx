"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Calendar, MessageSquare } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientsLogoStrip from "@/components/sections/ClientsLogoStrip";
import FAQ from "@/components/sections/FAQ";

const categories = [
  {
    id: "agentes",
    icon: <Bot size={28} />,
    title: "Agentes de IA",
    subtitle: "Pronto para usar",
    desc: "IAs treinadas para automatizar e escalar sua operação de vendas, suporte e marketing.",
    features: [
      "Agentes prontos em 48h",
      "WhatsApp, Instagram, Telegram e mais",
      "Sem limite de conversas",
      "Dashboard de resultados em tempo real",
    ],
    cta: "Conhecer planos",
    href: "#agentes-planos",
    gradient: "from-blue-500/10 to-purple-500/5",
    border: "border-blue-100",
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "software",
    icon: <Code2 size={28} />,
    title: "Software Sob Medida",
    subtitle: "Desenvolvimento personalizado",
    desc: "Desenvolvimento personalizado para sua empresa. Sistemas, integrações e automações únicas.",
    features: [
      "Escopo definido em discovery",
      "Stack moderno (Next.js, Node, Python)",
      "Integrações com qualquer sistema",
      "Suporte e manutenção incluídos",
    ],
    cta: "Conhecer planos",
    href: "#software-planos",
    gradient: "from-emerald-500/10 to-cyan-500/5",
    border: "border-emerald-100",
    iconColor: "text-emerald-600 bg-emerald-50",
  },
];

const suggestions = [
  "Automatizar atendimento",
  "Gerar leads no WhatsApp",
  "Integrar com meu CRM",
  "Criar chatbot para e-commerce",
  "Agente de voz para call center",
];

const contactTabs = ["Agendar Demo", "Falar no WhatsApp"];

export default function PrecosPage() {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* ── Header ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs text-gray-400 uppercase tracking-widest mb-4"
            >
              Preços
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
              className="text-[38px] md:text-[54px] font-bold text-gray-900 leading-tight tracking-tight mb-4"
            >
              Planos e{" "}
              <span className="gradient-text">preços</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-[16px] md:text-[18px] text-gray-400 leading-relaxed max-w-lg mx-auto"
            >
              Escolha o modelo ideal para escalar sua operação com inteligência artificial.
            </motion.p>
          </div>
        </section>

        {/* ── Category Cards ── */}
        <section className="pb-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-[24px] border ${cat.border} bg-gradient-to-br ${cat.gradient} p-8 flex flex-col gap-6`}
                >
                  <div>
                    <div className={`inline-flex p-3 rounded-2xl ${cat.iconColor} mb-4`}>
                      {cat.icon}
                    </div>
                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">{cat.subtitle}</span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="text-emerald-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={cat.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
                  >
                    {cat.cta} <ArrowRight size={15} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ClientsLogoStrip />

        {/* ── CTA Diagnóstico ── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">IA Consultora</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Precisa de uma solução personalizada?
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Descreva seu desafio e veja qual solução Alpha Builders resolve.
              </p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ex: Quero automatizar meu atendimento no WhatsApp..."
                  className="flex-1 h-11 px-4 rounded-full border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors"
                />
                <a
                  href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center"
                >
                  Gerar Diagnóstico
                </a>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contato" className="py-10 md:py-14 bg-[#F9F9F9]">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Vamos conversar sobre{" "}
                <span className="gradient-text">seu projeto?</span>
              </h2>
              <p className="text-sm text-gray-400">
                Escolha como prefere iniciar sua conversa com nossa equipe.
              </p>
            </motion.div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 justify-center">
              {contactTabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 h-10 px-5 rounded-full text-sm font-medium transition-all ${
                    activeTab === i
                      ? "bg-black text-white"
                      : "border border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {i === 0 ? <Calendar size={14} /> : <MessageSquare size={14} />}
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-white rounded-[24px] p-8 text-center">
              {activeTab === 0 ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-2">
                    <Calendar size={24} className="text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Agende uma Demo Gratuita</h3>
                  <p className="text-sm text-gray-400 max-w-sm">
                    30 minutos com um especialista para entender seu negócio e mostrar a solução ideal.
                  </p>
                  <a
                    href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <Calendar size={14} />
                    Escolher horário
                  </a>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Falar no WhatsApp</h3>
                  <p className="text-sm text-gray-400 max-w-sm">
                    Resposta em até 2 horas durante horário comercial. Sem chatbot, direto com a equipe.
                  </p>
                  <a
                    href="https://wa.me/5562982683262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5a] transition-colors"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ Pricing ── */}
        <FAQ pricingFAQ={true} />

      </main>
      <Footer />
    </>
  );
}
