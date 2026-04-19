"use client";

import { motion } from "framer-motion";

export default function SiteMockup() {
  return (
    <div className="w-full h-full flex flex-col" style={{ minHeight: 220 }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-surface border-b border-card-border flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 ml-2 bg-bg-elevated rounded-md px-2 py-0.5 flex items-center">
          <span className="text-[9px] text-black-ribbon">app.exemplo.com.br</span>
        </div>
      </div>

      {/* Page preview */}
      <div className="flex-1 overflow-hidden bg-bg-surface-alt relative">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-card-border/50">
          <div className="w-12 h-2.5 bg-reno-sand/60 rounded-full" />
          <div className="flex gap-3">
            {[28, 24, 22, 20].map((w, i) => (
              <div key={i} className="h-1.5 bg-card-border rounded-full" style={{ width: w }} />
            ))}
          </div>
          <div className="h-5 w-16 rounded-full border border-reno-sand/40 flex items-center justify-center">
            <span className="text-[8px] text-reno-sand">Contato</span>
          </div>
        </div>

        {/* Hero */}
        <div className="px-4 pt-4 pb-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="w-24 h-2 bg-beryl-pearl/50 rounded-full mb-2" />
            <div className="w-40 h-1.5 bg-beryl-pearl/30 rounded-full mb-1" />
            <div className="w-32 h-1.5 bg-beryl-pearl/20 rounded-full mb-4" />
            <div className="flex gap-2">
              <div className="h-6 w-20 rounded-lg bg-reno-sand/80 flex items-center justify-center">
                <span className="text-[8px] text-black font-semibold">Começar</span>
              </div>
              <div className="h-6 w-20 rounded-lg border border-card-border flex items-center justify-center">
                <span className="text-[8px] text-black-ribbon">Ver mais</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards row */}
        <div className="px-4 flex gap-2">
          {["⚡ Rápido", "🔒 Seguro", "📈 Escalável"].map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex-1 rounded-lg border border-card-border bg-bg-elevated p-2 text-center"
            >
              <span className="text-[9px] text-black-ribbon">{f}</span>
            </motion.div>
          ))}
        </div>

        {/* Decorative gradient glow */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl opacity-20" style={{ background: "#e3fd79" }} />
      </div>
    </div>
  );
}
