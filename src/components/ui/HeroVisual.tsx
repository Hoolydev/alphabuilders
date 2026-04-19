"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Zap, CheckCircle2, Globe, BellRing } from "lucide-react";

/* ─── Typing code window ─── */
const CODE_LINES = [
  { text: "// Alpha Builders · config.ts", type: "comment" },
  { text: "import { createApp } from '@alpha/core';", type: "keyword" },
  { text: "import { database, auth, api } from '@alpha/modules';", type: "keyword" },
  { text: "", type: "empty" },
  { text: "const app = createApp({", type: "default" },
  { text: "  modules: [database(), auth(), api()],", type: "dim" },
  { text: "  config: {", type: "dim" },
  { text: "    cache: true, rateLimit: 1000,", type: "dim" },
  { text: "    region: 'sa-east-1', // São Paulo", type: "accent" },
  { text: "  },", type: "dim" },
  { text: "});", type: "default" },
  { text: "", type: "empty" },
  { text: "await app.deploy({ env: 'production' });", type: "keyword" },
  { text: "console.log('Sistema no ar! 🚀');", type: "accent" },
];

function lineColor(type: string) {
  if (type === "comment") return "#484d52";
  if (type === "keyword") return "#e3fd79";
  if (type === "accent") return "#e3fd79bb";
  if (type === "dim") return "#5a6370";
  return "#c8bfb8";
}

function CodeWindow() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= CODE_LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 700 : 155);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #1d1d1d 0%, #161616 100%)",
        border: "1px solid #363636",
        boxShadow: "0 0 0 1px rgba(252,110,32,0.08), 0 24px 64px rgba(0,0,0,0.7), 0 0 40px rgba(252,110,32,0.04)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: "linear-gradient(180deg, #252525 0%, #202020 100%)",
          borderBottom: "1px solid #2e2e2e",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] text-[#484d52] font-mono tracking-wider">config.ts</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
          <span className="text-[9px] font-mono text-emerald-400/70">live</span>
        </div>
      </div>

      {/* Line numbers + code */}
      <div className="px-4 py-3 font-mono text-[10px] leading-[20px]" style={{ minHeight: 290 }}>
        {CODE_LINES.slice(0, count).map((line, i) => (
          <div key={i} className="flex gap-3.5 group">
            <span className="text-[#2e2e2e] select-none w-3.5 text-right shrink-0 group-hover:text-[#484d52] transition-colors">
              {i + 1}
            </span>
            <span style={{ color: lineColor(line.type) }}>
              {line.text || "\u00a0"}
              {i === count - 1 && count < CODE_LINES.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity }}
                  className="inline-block w-[5px] h-[12px] bg-[#e3fd79] ml-px align-middle rounded-[1px]"
                />
              )}
            </span>
          </div>
        ))}
        {count >= CODE_LINES.length && (
          <div className="flex gap-3.5 mt-0.5">
            <span className="text-[#2e2e2e] select-none w-3.5 text-right shrink-0">{CODE_LINES.length + 1}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block w-[5px] h-[12px] bg-[#e3fd79]/50 align-middle rounded-[1px]"
            />
          </div>
        )}
      </div>

      {/* Bottom status bar */}
      <div
        className="flex items-center gap-3 px-4 py-2"
        style={{ borderTop: "1px solid #242424", background: "#181818" }}
      >
        <span className="text-[9px] font-mono text-[#333]">TypeScript</span>
        <span className="text-[#2a2a2a]">·</span>
        <span className="text-[9px] font-mono text-[#e3fd79]/50">UTF-8</span>
        <span className="ml-auto text-[9px] font-mono text-[#333]">Ln 14, Col 1</span>
      </div>
    </div>
  );
}

/* ─── Card with gradient border ─── */
function Card({
  icon: Icon,
  title,
  sub,
  badge,
  extra,
  pulse = false,
  delay = 0,
  fromDir = "left",
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  badge?: string;
  extra?: React.ReactNode;
  pulse?: boolean;
  delay?: number;
  fromDir?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromDir === "left" ? -20 : 20, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.34, 1.2, 0.64, 1] }}
    >
      {/* Gradient border via padding wrapper */}
      <div
        className="p-[1px] rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(252,110,32,0.35) 0%, rgba(60,60,60,0.5) 50%, rgba(30,30,30,0.3) 100%)",
        }}
      >
        <div
          className="rounded-[15px] p-4"
          style={{
            background: "linear-gradient(145deg, #1e1e1e 0%, #181818 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(252,110,32,0.22) 0%, rgba(252,110,32,0.06) 100%)",
                  border: "1px solid rgba(252,110,32,0.15)",
                }}
              >
                <Icon size={13} className="text-[#e3fd79]" />
              </div>
              <span className="text-[11px] font-semibold text-[#ddd5cc] tracking-wide">{title}</span>
            </div>
            {pulse && (
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="absolute w-3 h-3 rounded-full bg-emerald-400"
                />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            )}
          </div>

          {/* Sub */}
          <p className="text-[10px] text-[#4a4a4a] leading-snug mb-2.5">{sub}</p>

          {/* Extra / badge row */}
          {(badge || extra) && (
            <div className="flex items-center justify-between gap-2">
              {badge && (
                <span
                  className="text-[9px] font-mono px-2 py-0.5 rounded-md"
                  style={{
                    background: "rgba(252,110,32,0.1)",
                    border: "1px solid rgba(252,110,32,0.18)",
                    color: "#e3fd79",
                  }}
                >
                  {badge}
                </span>
              )}
              {extra}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mini bar chart ─── */
function MiniBar({ heights }: { heights: number[] }) {
  return (
    <div className="flex items-end gap-[2px] h-[18px]">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-[1px] bg-[#e3fd79]"
          animate={{ height: [`${h}px`, `${Math.max(3, h * 0.5 + Math.random() * 4)}px`] }}
          transition={{
            duration: 0.7 + i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.08,
          }}
          style={{ height: `${h}px`, opacity: 0.5 + (h / 18) * 0.5 }}
        />
      ))}
    </div>
  );
}

/* ─── Traveling dot along a line ─── */
function Dot({ x1, y1, x2, y2, delay = 0, reverse = false }: {
  x1: number; y1: number; x2: number; y2: number; delay?: number; reverse?: boolean;
}) {
  const from = reverse ? [x2, y2] : [x1, y1];
  const to = reverse ? [x1, y1] : [x2, y2];
  return (
    <motion.circle
      r={2.5}
      fill="#e3fd79"
      filter="url(#dotglow)"
      animate={{ cx: [from[0], to[0]], cy: [from[1], to[1]] }}
      transition={{ duration: 2.2, delay, repeat: Infinity, repeatDelay: 1.2, ease: "linear" }}
    />
  );
}

/* ─── Node ring at connection point ─── */
function NodeRing({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <g>
      <motion.circle
        cx={cx} cy={cy} r={5}
        stroke="#e3fd79"
        strokeWidth="1"
        fill="none"
        animate={{ r: [4, 8], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, delay, repeat: Infinity, repeatDelay: 0.6 }}
      />
      <circle cx={cx} cy={cy} r={2.5} fill="#e3fd79" opacity={0.7} />
    </g>
  );
}

/* ─── Main component ─── */
export default function HeroVisual() {
  /**
   * Container: w-full h-[620px]   (SVG viewBox "0 0 580 620")
   *
   * Main window: left=155 top=80 w=270   (right=425, bottom~=430)
   *   Corners: TL(155,80)  TR(425,80)  BL(155,430)  BR(425,430)
   *
   * Cards (w=132):
   *   TL: left=0 top=40   → card center ≈ (66,  95)  → right-center (132, 95)
   *   BL: left=0 bot=40   → top=620-40-110=470  → center (66, 525) → right-center (132,525)
   *   TR: right=0 top=40  → left=448 center(514, 95) → left-center (448, 95)
   *   BR: right=0 bot=40  → center(514,525) → left-center (448, 525)
   *
   * Lines: card-center → MW corner (passes under card, creates drama)
   *   (66,95)→(155,80)   (514,95)→(425,80)
   *   (66,525)→(155,430) (514,525)→(425,430)
   */

  return (
    <div className="relative w-full h-[620px] select-none">

      {/* ── Background glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[380px] h-[280px] rounded-full bg-[#e3fd79]/5 blur-[100px]" />
        <div className="absolute top-[10%] left-[15%] w-[160px] h-[160px] rounded-full bg-[#e3fd79]/4 blur-[70px]" />
        <div className="absolute bottom-[15%] right-[15%] w-[160px] h-[160px] rounded-full bg-[#e3fd79]/4 blur-[70px]" />
      </div>

      {/* ── SVG connection layer ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 580 620"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="dotglow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Gradient for lines */}
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e3fd79" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e3fd79" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e3fd79" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e3fd79" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <line x1="66" y1="95" x2="155" y2="80" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="514" y1="95" x2="425" y2="80" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="66" y1="525" x2="155" y2="430" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="514" y1="525" x2="425" y2="430" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="5 4" />

        {/* Node rings at MW corners */}
        <NodeRing cx={155} cy={80} delay={1.0} />
        <NodeRing cx={425} cy={80} delay={1.6} />
        <NodeRing cx={155} cy={430} delay={2.1} />
        <NodeRing cx={425} cy={430} delay={0.8} />

        {/* Traveling dots — inward */}
        <Dot x1={66} y1={95} x2={155} y2={80} delay={0.4} />
        <Dot x1={514} y1={95} x2={425} y2={80} delay={1.2} />
        <Dot x1={155} y1={430} x2={66} y2={525} delay={0.9} reverse />
        <Dot x1={425} y1={430} x2={514} y2={525} delay={1.7} reverse />
      </svg>

      {/* ── Cards ── */}

      {/* Top-left: Webhook */}
      <div className="absolute left-0 top-[40px] w-[132px]">
        <Card
          icon={Globe}
          title="Webhook"
          sub="POST /api/eventos"
          badge="200 OK"
          pulse
          delay={0.35}
          fromDir="left"
          extra={<MiniBar heights={[6, 10, 7, 14, 9, 12, 8, 16, 11, 13]} />}
        />
      </div>

      {/* Bottom-left: Security */}
      <div className="absolute left-0 bottom-[40px] w-[132px]">
        <Card
          icon={Shield}
          title="Segurança"
          sub="SSL · JWT · OAuth2"
          badge="Ativo"
          delay={0.55}
          fromDir="left"
          extra={
            <div className="flex items-center gap-1">
              {["TLS", "AES"].map((t) => (
                <span key={t} className="text-[8px] font-mono text-[#484d52] bg-[#242424] px-1 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          }
        />
      </div>

      {/* Top-right: Integrations */}
      <div className="absolute right-0 top-[40px] w-[132px]">
        <Card
          icon={Zap}
          title="Integrações"
          sub="n8n · Make · Zapier"
          badge="12 ativos"
          pulse
          delay={0.45}
          fromDir="right"
          extra={<MiniBar heights={[8, 14, 11, 16, 9, 13, 10, 15, 12, 14]} />}
        />
      </div>

      {/* Bottom-right: Deploy */}
      <div className="absolute right-0 bottom-[40px] w-[132px]">
        <Card
          icon={CheckCircle2}
          title="Deploy"
          sub="sa-east-1 · prod"
          badge="v2.4.1"
          delay={0.65}
          fromDir="right"
          extra={
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] font-mono text-[#484d52]">99.9% up</span>
            </div>
          }
        />
      </div>

      {/* ── Floating notification toast ── */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.92 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-10, 0, 0, -6] }}
        transition={{ delay: 4, duration: 3.5, times: [0, 0.15, 0.8, 1], repeat: Infinity, repeatDelay: 6 }}
        className="absolute left-1/2 -translate-x-1/2 top-[26px] z-10"
        style={{ width: 210 }}
      >
        <div
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
          style={{
            background: "linear-gradient(135deg, #1e1e1e, #171717)",
            border: "1px solid rgba(252,110,32,0.25)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(252,110,32,0.06)",
          }}
        >
          <div
            className="w-6 h-6 rounded-lg shrink-0 flex items-center justify-center"
            style={{ background: "rgba(252,110,32,0.15)" }}
          >
            <BellRing size={11} className="text-[#e3fd79]" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#ddd5cc]">Nova requisição</p>
            <p className="text-[9px] text-[#484d52]">POST · agora mesmo</p>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
          />
        </div>
      </motion.div>

      {/* ── Main code window ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.44, 0, 0.56, 1] }}
        className="absolute top-[80px] w-[270px]"
        style={{ left: "155px" }}
      >
        <CodeWindow />
      </motion.div>

      {/* ── Bottom uptime bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ width: 220 }}
      >
        <div
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full"
          style={{
            background: "linear-gradient(135deg, #1e1e1e, #181818)",
            border: "1px solid #303030",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
            style={{ background: "rgba(252,110,32,0.12)" }}
          >
            <div className="w-[3px] h-[3px] rounded-full bg-[#e3fd79]" />
          </div>
          <MiniBar heights={[5, 9, 6, 13, 8, 11, 7, 16, 10, 12, 9, 14, 11]} />
          <span className="text-[9px] font-mono text-[#484d52] ml-auto whitespace-nowrap">99.9% uptime</span>
        </div>
      </motion.div>
    </div>
  );
}
