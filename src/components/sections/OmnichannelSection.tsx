"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const channels = [
  { id: "whatsapp",   label: "WhatsApp",        img: "/images/meta/whatsapp-selector.png",  color: "#25D366" },
  { id: "instagram",  label: "Instagram",       img: "/images/meta/instagram-selector.png", color: "#E1306C" },
  { id: "meta",       label: "Facebook",        img: "/images/meta/facebook-selector.png",  color: "#0084FF" },
  { id: "telegram",   label: "Telegram",        img: "/images/uploads/1775463837370-7km4lh8ri1.png",  color: "#2CA5E0" },
  { id: "discord",    label: "Discord",         img: "/images/uploads/1775463884311-v31b27bjcql.png", color: "#5865F2" },
  { id: "gmail",      label: "Gmail",           img: "/images/uploads/1775464489150-xnp5tewopmo.png", color: "#EA4335" },
  { id: "slack",      label: "Slack",           img: "/images/uploads/1775469363558-osvfc04qmqf.png", color: "#4A154B" },
  { id: "messenger",  label: "Messenger",       img: null, color: "#0084FF" },
  { id: "teams",      label: "Teams",           img: null, color: "#6264A7" },
  { id: "shopify",    label: "Shopify",         img: null, color: "#96BF48" },
  { id: "mercadolivre", label: "Mercado Livre", img: null, color: "#FFE600" },
  { id: "alexa",      label: "Alexa",           img: null, color: "#00CAFF" },
] as { id: string; label: string; img: string | null; color: string }[];

const features = [
  "IA que vende e atende no WhatsApp 24/7",
  "Identifica produtos em fotos enviadas",
  "Analisa vídeos para dar suporte técnico",
  "Transcreve e responde áudios em segundos",
  "Roteamento inteligente para atendentes humanos",
];

export default function OmnichannelSection() {
  const [active, setActive] = useState("whatsapp");
  const ch = channels.find((c) => c.id === active)!;

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl px-4 md:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          {/* ── Left: dark card ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[24px] overflow-hidden bg-[#050C13] flex flex-col justify-between min-h-[420px] p-8 md:p-12"
              style={{
                background: `radial-gradient(ellipse at 85% 85%, ${ch.color}1a 0%, #050C13 50%)`,
              }}
            >
              {/* Grid texture */}
              <div className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              <div className="relative z-10">
                {/* Channel icon */}
                <div className="mb-6">
                  {ch.img ? (
                    <img src={ch.img} alt={ch.label} className="h-10 w-auto object-contain" />
                  ) : (
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: ch.color }}
                    >
                      {ch.label[0]}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                  AI omnichannel para{" "}
                  <span className="gradient-text">{ch.label}</span>
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  Automatize conversas, ofereça respostas inteligentes e personalize o atendimento.
                </p>

                <ul className="space-y-2.5">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="text-emerald-400">✓</span>
                      {f}
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
                  Ver como funciona
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Right: channel picker ── */}
          <div className="bg-[#F9F9F9] rounded-[24px] p-6 md:p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Integre com</p>
              <h3 className="text-xl font-bold text-gray-900">Qualquer canal</h3>
              <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                Escolha onde seus agentes vão trabalhar. Um agente, vários canais.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {channels.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-200 text-sm font-medium ${
                    active === c.id
                      ? "bg-white border-gray-200 shadow-sm text-gray-900"
                      : "border-transparent bg-white/50 text-gray-500 hover:bg-white hover:border-gray-100"
                  }`}
                >
                  {c.img ? (
                    <img src={c.img} alt={c.label} className="h-5 w-5 object-contain flex-shrink-0" />
                  ) : (
                    <div className="h-5 w-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: c.color }}>{c.label[0]}</div>
                  )}
                  <span className="truncate text-xs">{c.label}</span>
                </button>
              ))}
            </div>

            {/* Demo chat preview */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-4 space-y-3 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-gray-400">Agente Alpha · {ch.label} · Online</span>
              </div>
              {[
                { r: true,  t: "Olá! Quero saber mais sobre os planos." },
                { r: false, t: "Olá! Sou o assistente Alpha 🤖. Qual plano te interessa?" },
                { r: true,  t: "O Pro. Quantos agentes inclui?" },
                { r: false, t: "O plano Pro inclui até 5 agentes de IA simultâneos, com relatórios completos! Posso te mostrar?" },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.r ? "justify-end" : "justify-start"}`}>
                  <div className={`text-xs px-3 py-2 rounded-xl max-w-[80%] leading-relaxed ${
                    msg.r ? "bg-gray-100 text-gray-700" : "bg-black text-white"
                  }`}>
                    {msg.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
