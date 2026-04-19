"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "ai",
    label: "Alpha AI",
    tagline: "Plataforma de Agentes de IA",
    desc: "Crie sua IA no WhatsApp e treine com seu conteúdo",
    img: "/images/solutions/solution--ai-1.png",
    icon: "/images/icons/ai.svg",
    href: "/ai",
    large: true,
  },
  {
    id: "suporte",
    label: "Agente de Suporte",
    tagline: "IA de Atendimento",
    desc: "Atendimento ao cliente com IA avançada",
    img: "/images/agents-blob/1764793159327-cdjhriqznt.png",
    icon: "/images/icons/ai.svg",
    href: "/agentes/suporte",
    large: false,
  },
  {
    id: "bots",
    label: "Alpha Bots",
    tagline: "Chatbots no-code",
    desc: "Crie chatbots em minutos, sem código",
    img: "/images/avatares/icon_sdr.png",
    icon: "/images/icons/bots.svg",
    href: "/bots",
    large: false,
  },
  {
    id: "voice",
    label: "Alpha Voice",
    tagline: "Agentes de Voz com IA",
    desc: "Agentes que fazem e recebem ligações com IA",
    img: "/images/solutions/solution--voice.png",
    icon: "/images/icons/voice.svg",
    href: "/voice",
    large: false,
  },
  {
    id: "chat",
    label: "Alpha Chat",
    tagline: "Central de Atendimento",
    desc: "Plataforma omnichannel com IA",
    img: "/images/solutions/chat-test.png",
    icon: "/images/icons/chat.svg",
    href: "/chat",
    large: false,
  },
];

function SolutionCard({ sol, index }: { sol: typeof solutions[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="block h-full"
    >
      <Link href={sol.href} className="block h-full group">
        <div className="bg-[#F9F9F9] cursor-pointer hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-shadow duration-300 rounded-[24px] flex flex-col justify-between h-full overflow-hidden">
          {/* Top info */}
          <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">{sol.tagline.split(" ")[0]}</span>
                <span className="text-sm font-semibold text-gray-900 ml-1">{sol.label.split(" ").slice(-1)[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="h-8 px-3.5 rounded-full text-[12px] font-medium bg-black text-white hover:bg-gray-800 transition-colors">
                  Falar com Comercial
                </button>
                <button className="h-8 px-3.5 rounded-full text-xs font-medium border border-gray-200 text-gray-700 hover:bg-white transition-colors flex items-center gap-1">
                  Ver mais <ArrowRight size={12} />
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-medium text-gray-900">{sol.tagline}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mt-1">{sol.desc}</p>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden relative flex items-center justify-center h-[220px] md:h-[300px]">
            <img
              src={sol.img}
              alt={sol.label}
              className="object-contain w-full h-full object-bottom group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function SolutionsGrid() {
  const [ai, suporte] = solutions.slice(0, 2);
  const bottom = solutions.slice(2);

  return (
    <section id="solucoes" className="py-8 md:py-12 bg-white scroll-mt-24">
      <div className="max-w-6xl px-4 md:container mx-auto space-y-4 sm:space-y-6">

        {/* Row 1: AI (large) + Suporte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <SolutionCard sol={ai} index={0} />
          <SolutionCard sol={suporte} index={1} />
        </div>

        {/* Row 2: Bots + Voice + Chat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {bottom.map((sol, i) => (
            <SolutionCard key={sol.id} sol={sol} index={i + 2} />
          ))}
        </div>

      </div>
    </section>
  );
}
