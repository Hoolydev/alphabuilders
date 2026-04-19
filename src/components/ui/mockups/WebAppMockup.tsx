"use client";

import { motion } from "framer-motion";

const navItems = ["Dashboard", "Usuários", "Relatórios", "Config"];
const metrics = [
  { label: "Usuários Ativos", value: "2.4k", delta: "+12%", color: "#22c55e" },
  { label: "Conversão",       value: "8.3%", delta: "+2.1%", color: "#e3fd79" },
  { label: "Receita MRR",     value: "R$ 84k", delta: "+18%", color: "#a855f7" },
];
const rows = ["Plano Pro", "Plano Basic", "Plano Enterprise", "Plano Starter"];

export default function WebAppMockup() {
  return (
    <div className="w-full h-full flex" style={{ minHeight: 220 }}>
      {/* Sidebar */}
      <div className="w-28 flex-shrink-0 border-r border-card-border p-3 flex flex-col gap-1">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-4 h-4 rounded bg-reno-sand/80" />
          <span className="text-[10px] font-bold text-beryl-pearl/80">AppPanel</span>
        </div>
        {navItems.map((item, i) => (
          <div
            key={item}
            className={`text-[10px] px-2 py-1.5 rounded-lg ${i === 0 ? "bg-reno-sand/15 text-reno-sand" : "text-black-ribbon"}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-3 flex flex-col gap-2.5 min-w-0">
        <p className="text-[10px] font-semibold text-beryl-pearl/80">Dashboard</p>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className="rounded-lg p-2 border border-card-border bg-bg-surface-alt"
            >
              <p className="text-[8px] text-black-ribbon mb-1">{m.label}</p>
              <p className="text-sm font-bold text-beryl-pearl">{m.value}</p>
              <p className="text-[9px]" style={{ color: m.color }}>{m.delta}</p>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-lg border border-card-border bg-bg-surface-alt overflow-hidden">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-card-border">
            <span className="text-[9px] text-black-ribbon font-semibold uppercase tracking-wide">Planos</span>
            <span className="text-[9px] text-black-ribbon">Receita</span>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex items-center justify-between px-3 py-1.5 border-b border-card-border/50 last:border-0"
            >
              <span className="text-[9px] text-beryl-pearl/70">{row}</span>
              <div className="flex-1 mx-3 h-1 bg-bg-elevated rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-reno-sand/50" style={{ width: `${80 - i * 15}%` }} />
              </div>
              <span className="text-[9px] text-reno-sand font-semibold">R$ {(40 - i * 8)}k</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
