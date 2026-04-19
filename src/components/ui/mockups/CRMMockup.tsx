"use client";

import { motion } from "framer-motion";

const pipeline = [
  {
    stage: "Leads",
    color: "#c4a896",
    cards: [
      { name: "Carlos M.", value: "R$ 12k", initials: "CM" },
      { name: "Beatriz S.", value: "R$ 8k",  initials: "BS" },
    ],
  },
  {
    stage: "Qualificado",
    color: "#e3fd79",
    cards: [
      { name: "Ana P.",    value: "R$ 45k", initials: "AP" },
      { name: "Rafael L.", value: "R$ 32k", initials: "RL" },
    ],
  },
  {
    stage: "Proposta",
    color: "#a855f7",
    cards: [
      { name: "Marcos T.", value: "R$ 80k", initials: "MT" },
    ],
  },
  {
    stage: "Fechado",
    color: "#22c55e",
    cards: [
      { name: "Julia R.", value: "R$ 120k", initials: "JR" },
    ],
  },
];

export default function CRMMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3" style={{ minHeight: 220 }}>
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-beryl-pearl/80">Pipeline de Vendas</span>
        <div className="flex gap-1.5">
          {["Semana", "Mês", "Q3"].map((t, i) => (
            <span key={t} className={`text-[10px] px-2 py-0.5 rounded-md ${i === 2 ? "bg-reno-sand/20 text-reno-sand" : "text-black-ribbon"}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* Kanban columns */}
      <div className="flex gap-2 flex-1 overflow-hidden">
        {pipeline.map((col, ci) => (
          <div key={col.stage} className="flex-1 flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: col.color }} />
              <span className="text-[10px] text-black-ribbon truncate">{col.stage}</span>
            </div>
            {col.cards.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.08 + i * 0.05, duration: 0.3 }}
                className="bg-bg-elevated rounded-lg p-2 border border-card-border"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-black" style={{ background: col.color }}>
                    {card.initials}
                  </div>
                  <span className="text-[10px] text-beryl-pearl/80 truncate">{card.name}</span>
                </div>
                <span className="text-[10px] font-semibold" style={{ color: col.color }}>{card.value}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom metric */}
      <div className="flex items-center justify-between pt-2 border-t border-card-border">
        <span className="text-[10px] text-black-ribbon">Total pipeline</span>
        <span className="text-xs font-bold text-reno-sand">R$ 297k</span>
      </div>
    </div>
  );
}
