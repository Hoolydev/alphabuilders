"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { name: "Alpha AI",    href: "/ai",    desc: "Plataforma de Agentes de IA",  icon: "/images/icons/ai.svg"    },
  { name: "Alpha Voice", href: "/voice", desc: "Agentes de Voz com IA",         icon: "/images/icons/voice.svg" },
  { name: "Alpha Bots",  href: "/bots",  desc: "Chatbots no-code",              icon: "/images/icons/bots.svg"  },
  { name: "Alpha Chat",  href: "/chat",  desc: "Central omnichannel",           icon: "/images/icons/chat.svg"  },
];

const agentLinks = [
  { name: "Agente SDR",         href: "/agentes/sdr" },
  { name: "Agente Suporte",     href: "/agentes/suporte" },
  { name: "Agente CRM",         href: "/agentes/crm" },
  { name: "Agente Agendamento", href: "/agentes/agendamento" },
  { name: "Agente Closer",      href: "/agentes/closer" },
  { name: "Agente Outbound",    href: "/agentes/outbound" },
  { name: "Agente Blog",        href: "/agentes/blog" },
];

function Dropdown({ items, isOpen }: { items: { name: string; href: string; desc?: string; icon?: string }[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.97 }}
          transition={{ duration: 0.15, ease: [0.44, 0, 0.56, 1] }}
          className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-[600]"
        >
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                {item.icon && <img src={item.icon} alt="" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" />}
                <div>
                  <div className="text-[13px] font-medium text-gray-900 group-hover:text-black transition-colors">
                    {item.name}
                  </div>
                  {item.desc && (
                    <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className="sticky top-0 z-[500] w-full"
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.9)", borderBottom: "1px solid #f0f0f0" }}
    >
      {/* ── Desktop ── */}
      <nav ref={navRef} className="hidden md:flex items-center justify-between min-h-[62px] container mx-auto px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 flex-shrink-0">
          <img src="/logo.svg" alt="Alpha Builders" className="h-8 w-auto" />
          <span className="text-[15px]">Alpha Builders</span>
        </Link>

        {/* Center nav */}
        <div className="flex items-center gap-0.5">
          {/* Products */}
          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "produtos" ? null : "produtos")}
              className="flex items-center gap-1 py-2 px-3 rounded-lg text-[12.5px] font-normal text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              SuperApp
              <ChevronDown size={12} className={`transition-transform text-gray-900 ${openMenu === "produtos" ? "rotate-180" : ""}`} />
            </button>
            <Dropdown items={products} isOpen={openMenu === "produtos"} />
          </div>

          {/* Alpha AI */}
          <Link href="/ai" className="py-2 px-3 rounded-lg text-[12.5px] text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <span className="font-normal">Alpha </span><span className="font-bold">AI</span>
          </Link>

          {/* Agentes dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "agentes" ? null : "agentes")}
              className="flex items-center gap-1 py-2 px-3 rounded-lg text-[12.5px] font-normal text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Agentes de <span className="font-bold ml-1">IA</span>
              <ChevronDown size={12} className={`transition-transform text-gray-900 ${openMenu === "agentes" ? "rotate-180" : ""}`} />
            </button>
            <Dropdown items={agentLinks} isOpen={openMenu === "agentes"} />
          </div>

          <Link href="/voice" className="py-2 px-3 rounded-lg text-[12.5px] text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <span className="font-normal">Alpha </span><span className="font-bold">Voice</span>
          </Link>
          <Link href="/bots" className="py-2 px-3 rounded-lg text-[12.5px] text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <span className="font-normal">Alpha </span><span className="font-bold">Bots</span>
          </Link>
          <Link href="/chat" className="py-2 px-3 rounded-lg text-[12.5px] text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <span className="font-normal">Alpha </span><span className="font-bold">Chat</span>
          </Link>
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/precos">
            <button className="h-9 px-4 rounded-full text-[12.5px] font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors">
              Ver Planos
            </button>
          </Link>
          <a
            href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-9 px-4 rounded-full text-[12.5px] font-medium bg-black text-white hover:bg-gray-800 transition-colors">
              Agendar Demo
            </button>
          </a>
        </div>
      </nav>

      {/* ── Mobile ── */}
      <nav className="md:hidden flex items-center justify-between min-h-[54px] px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <img src="/logo.svg" alt="Alpha Builders" className="h-7 w-auto" />
          <span className="text-[15px]">Alpha Builders</span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold bg-black text-white px-4 py-2 rounded-full"
          >
            Agendar Demo
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest px-3 mb-1">Produtos</p>
              {products.map((p) => (
                <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50">
                  <img src={p.icon} alt="" className="w-4 h-4 object-contain" /> {p.name}
                </Link>
              ))}
              <div className="my-2 border-t border-gray-100" />
              <p className="text-[10px] text-gray-400 uppercase tracking-widest px-3 mb-1">Agentes de IA</p>
              {agentLinks.map((a) => (
                <Link key={a.name} href={a.href} onClick={() => setMobileOpen(false)}
                  className="text-sm px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50">
                  {a.name}
                </Link>
              ))}
              <div className="my-2 border-t border-gray-100" />
              <a href="https://wa.me/5562982683262" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                className="block text-center text-sm text-gray-700 px-5 py-2.5 rounded-full border border-gray-200 mb-2">
                Falar no WhatsApp
              </a>
              <a href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-semibold bg-black text-white px-5 py-2.5 rounded-full">
                Agendar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
