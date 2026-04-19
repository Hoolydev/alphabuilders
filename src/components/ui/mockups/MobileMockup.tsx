"use client";

import { motion } from "framer-motion";

export default function MobileMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center py-4" style={{ minHeight: 220 }}>
      {/* Phone frame */}
      <div className="relative rounded-[28px] border-2 border-card-border bg-bg-surface-alt overflow-hidden shadow-xl"
        style={{ width: 148, height: 260 }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-bg-surface-alt rounded-b-xl z-10" />

        {/* Screen */}
        <div className="pt-5 px-2.5 pb-2 h-full flex flex-col gap-2">
          {/* Status bar */}
          <div className="flex justify-between items-center px-1">
            <span className="text-[7px] text-black-ribbon">9:41</span>
            <div className="flex gap-1">
              {[3,2,2].map((w,i) => <div key={i} className="h-1.5 bg-black-ribbon/50 rounded-sm" style={{width: w*3}}/>)}
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-beryl-pearl">Olá, João 👋</span>
            <div className="w-5 h-5 rounded-full bg-reno-sand/30 flex items-center justify-center text-[7px] font-bold text-reno-sand">JR</div>
          </div>

          {/* Metric card */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl p-2.5 text-black"
            style={{ background: "linear-gradient(135deg, #e3fd79, #ff9a5c)" }}
          >
            <p className="text-[7px] opacity-80 mb-0.5">Calorias hoje</p>
            <p className="text-base font-bold leading-none">1.842</p>
            <p className="text-[7px] opacity-80 mt-0.5">Meta: 2.200 kcal</p>
            <div className="mt-1.5 h-1 bg-black/20 rounded-full">
              <div className="h-full w-4/5 bg-white/60 rounded-full" />
            </div>
          </motion.div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { label: "Proteína", value: "142g", color: "#a855f7" },
              { label: "Treinos",  value: "4",    color: "#22c55e" },
              { label: "Água",     value: "1.8L",  color: "#4285f4" },
              { label: "Streak",   value: "12d",   color: "#e3fd79" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="rounded-lg p-1.5 border border-card-border bg-bg-elevated"
              >
                <p className="text-[7px] text-black-ribbon">{s.label}</p>
                <p className="text-[10px] font-bold" style={{ color: s.color }}>{s.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex justify-around border-t border-card-border pt-1.5">
            {["🏠","📊","🍎","👤"].map((icon, i) => (
              <div key={i} className={`text-sm ${i===0 ? "opacity-100":"opacity-30"}`}>{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
