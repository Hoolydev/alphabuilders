"use client";

import { motion } from "framer-motion";

const kpis = [
  { label: "Em Estoque",    value: "127",     color: "#4285f4" },
  { label: "Leads Ativos",  value: "84",      color: "#22c55e" },
  { label: "Vendas/Mês",   value: "23",      color: "#e3fd79" },
  { label: "Faturamento",  value: "R$ 2.4M", color: "#a855f7" },
];

const bars = [40, 55, 48, 70, 62, 80, 74, 90, 85, 95, 88, 92];

const topSellers = [
  { name: "Carlos M.", sales: 8,  initials: "CM" },
  { name: "Ana P.",    sales: 6,  initials: "AP" },
  { name: "Pedro S.",  sales: 5,  initials: "PS" },
];

export default function ERPMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3" style={{ minHeight: 220 }}>
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-2">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className="rounded-lg p-2 border border-card-border"
            style={{ background: k.color + "10" }}
          >
            <p className="text-[9px] text-black-ribbon mb-1 leading-tight">{k.label}</p>
            <p className="text-sm font-bold" style={{ color: k.color }}>{k.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart + Top Sellers */}
      <div className="flex gap-3 flex-1 min-h-0">
        {/* Bar chart */}
        <div className="flex-1 rounded-lg border border-card-border bg-bg-surface-alt p-3">
          <p className="text-[9px] text-black-ribbon mb-2">Vendas Mensais</p>
          <div className="flex items-end gap-1 h-16">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
                style={{ height: `${h}%`, originY: 1, background: i >= 8 ? "#e3fd79" : "#e3fd7940" }}
                className="flex-1 rounded-sm"
              />
            ))}
          </div>
        </div>

        {/* Top sellers */}
        <div className="w-28 rounded-lg border border-card-border bg-bg-surface-alt p-3">
          <p className="text-[9px] text-black-ribbon mb-2">Top Vendedores</p>
          <div className="flex flex-col gap-2">
            {topSellers.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-1.5"
              >
                <div className="w-5 h-5 rounded-full bg-reno-sand/30 flex items-center justify-center text-[8px] font-bold text-reno-sand flex-shrink-0">
                  {s.initials}
                </div>
                <div>
                  <p className="text-[9px] text-beryl-pearl/80 font-semibold leading-none">{s.name}</p>
                  <p className="text-[8px] text-black-ribbon">{s.sales} vendas</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
