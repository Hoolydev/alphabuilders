"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────── ORGANISM ORB (canvas) ─────────────────── */
function OrganismOrb({ isActive, isSpeaking }: { isActive: boolean; isSpeaking: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const N = 220;
    const BASE_R = W * 0.27;

    const pts = Array.from({ length: N }).map((_, i) => {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / N);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(theta),
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.9,
        amp: 0.06 + Math.random() * 0.14,
        colorT: i / N,
      };
    });

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    function getColor(t: number, alpha: number) {
      if (t < 0.5) {
        const r = Math.round(lerp(0, 255, t * 2));
        const b = Math.round(lerp(255, 128, t * 2));
        return `rgba(${r},0,${b},${alpha})`;
      } else {
        const g = Math.round(lerp(0, 128, (t - 0.5) * 2));
        const b = Math.round(lerp(128, 0, (t - 0.5) * 2));
        return `rgba(255,${g},${b},${alpha})`;
      }
    }

    function draw() {
      timeRef.current += 0.012;
      const t = timeRef.current;
      const pulse = isActive ? 1.08 + Math.sin(t * 4) * 0.08 : 1;
      const breathe = 1 + Math.sin(t * 0.7) * 0.04;
      const excite = isActive ? (isSpeaking ? 0.22 : 0.14) : 0.07;

      ctx.clearRect(0, 0, W, H);

      pts.forEach((p) => {
        const wave = Math.sin(t * p.speed + p.phase) * p.amp * (1 + excite * 3);
        const dist = BASE_R * breathe * pulse * (1 + wave);
        const rotX = t * 0.15;
        const rotY = t * 0.22;
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const y1 = p.y * cosX - p.z * sinX;
        const z1 = p.y * sinX + p.z * cosX;
        const x1 = p.x * cosY + z1 * sinY;
        const z2 = -p.x * sinY + z1 * cosY;
        const sx = cx + x1 * dist;
        const sy = cy + y1 * dist;
        const depth = (z2 + 1) / 2;
        const baseAlpha = 0.2 + depth * 0.7;
        const size = (1.5 + depth * 3.5) * (1 + wave * 2.5);

        if (isActive && depth > 0.6) {
          ctx.beginPath();
          ctx.arc(sx, sy, size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = getColor(p.colorT, 0.08);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = getColor(p.colorT, baseAlpha * (isActive ? 1.3 : 1));
        ctx.fill();
      });

      if (isActive) {
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, BASE_R * 0.6);
        grd.addColorStop(0, `rgba(150,100,255,${0.12 + Math.sin(t * 6) * 0.04})`);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [isActive, isSpeaking]);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={320}
      className="cursor-pointer select-none"
      style={{ maxWidth: "280px", maxHeight: "280px" }}
    />
  );
}

/* ─────────────────── SDR VOICE WIDGET ─────────────────── */
const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";

export function SDRVoiceWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected" | "speaking">("idle");
  const [permErr, setPermErr] = useState(false);
  const convRef = useRef<{ endSession: () => void } | null>(null);

  const handleToggle = useCallback(async () => {
    if (!AGENT_ID) { setOpen(v => !v); return; }
    if (status !== "idle") {
      if (convRef.current) { convRef.current.endSession(); convRef.current = null; }
      setStatus("idle");
      return;
    }
    try {
      setStatus("connecting");
      const { Conversation } = await import("@elevenlabs/client");
      convRef.current = await Conversation.startSession({
        agentId: AGENT_ID,
        onConnect: () => setStatus("connected"),
        onDisconnect: () => { setStatus("idle"); convRef.current = null; },
        onModeChange: ({ mode }: { mode: string }) => setStatus(mode === "speaking" ? "speaking" : "connected"),
        onError: (err: string) => { console.error(err); setPermErr(true); setStatus("idle"); },
      });
    } catch (e) {
      console.error(e);
      setPermErr(true);
      setStatus("idle");
    }
  }, [status]);

  const isActive = status !== "idle";
  const isSpeaking = status === "speaking";

  return (
    <div className="fixed bottom-6 right-6 z-[900] flex flex-col items-end gap-3 select-none">

      <AnimatePresence>
        {open && !AGENT_ID && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-1"
          >
            <div className="bg-[#050C13] px-4 py-3 flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img src="/images/avatares/icon_sdr.png" alt="SDR" className="w-9 h-9 rounded-full object-cover" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050C13]" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-white">Vendedor SDR IA</div>
                <div className="text-[10px] text-emerald-400">● Atendimento 24h · Online</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white text-xl leading-none">×</button>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2.5 text-xs text-gray-700 border border-gray-100 leading-relaxed shadow-sm">
                Olá! 👋 Sou o SDR IA da Alpha Builders. Posso te ajudar a encontrar o agente certo para o seu negócio. Como você prefere me chamar?
              </div>
            </div>
            <div className="px-3 pb-3 bg-gray-50">
              <a href="https://wa.me/5562982683262" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 w-full h-9 px-3 rounded-xl bg-black text-white text-xs font-medium justify-center hover:bg-gray-800 transition-colors">
                Continuar no WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-[#050C13] rounded-2xl px-4 py-3 text-center border border-white/10 mb-1">
            <p className="text-white/60 text-xs mb-2">
              {status === "connecting" ? "Conectando..." : isSpeaking ? "Falando..." : "Ouvindo.."}
            </p>
            <button onClick={handleToggle}
              className="text-xs px-3 py-1.5 rounded-full border border-red-500/40 text-red-400 hover:bg-red-500/10 transition-colors">
              × Desligar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {permErr && (
        <div className="text-xs text-red-400 bg-red-50 border border-red-100 rounded-xl px-3 py-2 text-center">
          Permissão de microfone necessária
        </div>
      )}

      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
        className={`relative flex items-center gap-2.5 text-white pl-2 pr-4 py-2 rounded-full shadow-xl border transition-colors ${
          isActive ? "bg-gray-900 border-blue-500/30" : "bg-[#050C13] border-white/10 hover:bg-gray-900"
        }`}
      >
        {isActive && <span className="absolute -inset-1 rounded-full border border-blue-400/30 animate-ping" />}
        <div className="relative">
          <img src="/images/avatares/icon_sdr.png" alt="SDR" className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
          <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#050C13] ${isActive ? "bg-blue-400" : "bg-emerald-400"}`} />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-semibold leading-tight">Vendedor SDR IA</div>
          <div className="text-[10px] text-white/50 flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full inline-block ${isActive ? "bg-blue-400 animate-pulse" : "bg-emerald-400"}`} />
            {isActive ? (isSpeaking ? "Falando..." : "Ouvindo...") : "Atendimento 24h"}
          </div>
        </div>
        <div className="flex items-center gap-1.5 ml-1">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-blue-500/20" : "bg-white/10"}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V22H9v2h6v-2h-2v-1.06A9 9 0 0 0 21 12v-2h-2z"/>
            </svg>
          </div>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

/* ─────────────────── TYPEWRITER HOOK ─────────────────── */
const WORDS = ["Agentes de IA", "Automações", "Chatbots", "Agentes de Voz"];
const BADGE_ITEMS = [
  { emoji: "🚀", text: "Agente de IA no WhatsApp" },
  { emoji: "🤖", text: "GPT-4o disponível na plataforma" },
  { emoji: "💬", text: "Agentes no Discord e Telegram" },
  { emoji: "⚡", text: "Nova integração com Slack" },
  { emoji: "🎙️", text: "Alpha Voice: ligações com IA" },
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

/* ─────────────────── HERO BANNER ─────────────────── */
export default function HeroBanner() {
  const typeword = useTypewriter(WORDS);
  const [badgeIdx, setBadgeIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBadgeIdx((i) => (i + 1) % BADGE_ITEMS.length), 3000);
    return () => clearInterval(id);
  }, []);

  const badge = BADGE_ITEMS[badgeIdx];

  return (
    <>
      <SDRVoiceWidget />

      <section className="relative w-full bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center pt-10 pb-4 md:pt-14">

            {/* Badge rotativo */}
            <div className="h-9 mb-6 relative overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={badgeIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 cursor-pointer hover:border-gray-300 transition-colors"
                >
                  <span>{badge.emoji}</span>
                  <span className="text-xs font-medium text-gray-700">Novo!!</span>
                  <span className="text-xs text-gray-400">{badge.text}</span>
                  <span className="text-xs text-green-500">●</span>
                  <span className="text-gray-300 text-xs">›</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Headline com typewriter */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
              className="text-[40px] md:text-[58px] lg:text-[68px] font-bold text-center leading-[1.06] tracking-[-2px] text-[#09090B] mb-4"
            >
              SuperApp de{" "}
              <span className="gradient-text">
                <b>{typeword}</b>
                <span className="typewriter-cursor">|</span>
              </span>
              <br />
              para empresas
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center text-[15px] md:text-[17px] text-gray-400 max-w-[520px] leading-relaxed mb-8"
            >
              Plataforma de Agentes de IA e automações para empresas.
              <br className="hidden md:block" />
              Do atendimento automático ao fechamento de vendas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
            >
              <a href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Agendar Demo Gratuita
              </a>
              <a href="https://wa.me/5562982683262" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Orb + annotation */}
            <div className="relative w-full flex justify-center pb-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute right-[6%] md:right-[14%] top-8 flex flex-col items-center gap-0.5 pointer-events-none"
              >
                <span className="text-xs md:text-sm text-gray-500 font-medium whitespace-nowrap">Teste a IA SDR ✨</span>
                <svg width="52" height="40" viewBox="0 0 52 40" fill="none" className="text-gray-300 -scale-x-100 rotate-[-15deg]">
                  <path d="M4 4 C 20 0, 44 16, 48 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M48 36 L40 30 M48 36 L40 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0, 0.3, 0.2, 1] }}
                className="flex flex-col items-center gap-2"
              >
                <OrganismOrb isActive={false} isSpeaking={false} />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
