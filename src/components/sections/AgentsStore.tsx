"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    id: "sdr",
    name: "Agente SDR AI",
    role: "IA de Vendas",
    desc: "Qualifica leads e agenda reuniões no WhatsApp 24/7.",
    avatar: "/images/avatares/icon_sdr.png",
    image: "/images/agents-blob/1764697053462-rc2zft2hydc.png",
    href: "/agentes/sdr",
    large: true,
    gradient: "from-blue-500/15",
  },
  {
    id: "suporte",
    name: "Agente Suporte",
    role: "IA de Atendimento",
    desc: "Resolve tickets automaticamente com triagem inteligente.",
    avatar: "/images/avatares/suporte-full.png",
    image: "/images/agents-blob/1764793159327-cdjhriqznt.png",
    href: "/agentes/suporte",
    large: false,
    gradient: "from-purple-500/15",
  },
  {
    id: "crm",
    name: "Agente CRM AI",
    role: "IA de CRM",
    desc: "Coleta dados e atualiza seu CRM em tempo real.",
    avatar: "/images/avatares/icon_crm.png",
    image: "/images/agents-grid/1775081486141-8svjtn63wqa.png",
    href: "/agentes/crm",
    large: false,
    gradient: "from-pink-500/15",
  },
  {
    id: "agendamento",
    name: "Agente Agendamento",
    role: "IA de Agenda",
    desc: "Marca reuniões e envia lembretes automáticos.",
    avatar: "/images/avatares/icon_agendamento.png",
    image: "/images/agents-grid/1775511115982-hwg10mo90s.png",
    href: "/agentes/agendamento",
    large: false,
    gradient: "from-orange-400/15",
  },
  {
    id: "closer",
    name: "Agente Closer AI",
    role: "IA de Fechamento",
    desc: "Conduz negociações e fecha propostas.",
    avatar: "/images/avatares/icon_closer.png",
    image: "/images/agents-blob/1764703946922-g6ifsxxyl1i.png",
    href: "/agentes/closer",
    large: false,
    gradient: "from-green-500/15",
  },
  {
    id: "outbound",
    name: "Agente Outbound",
    role: "IA de Prospecção",
    desc: "Prospecção ativa no LinkedIn + WhatsApp.",
    avatar: "/images/avatares/icon_outbound.png",
    image: "/images/agents-blob/1764704032434-sglopbb8fpl.png",
    href: "/agentes/outbound",
    large: true,
    gradient: "from-cyan-500/15",
  },
  {
    id: "blog",
    name: "Agente Blog AI",
    role: "IA de Conteúdo",
    desc: "Pesquisa e publica artigos otimizados para SEO automaticamente.",
    avatar: "/images/avatares/icon_blog.png",
    image: "/images/agents-grid/1775511257747-rvjddhhtq1k.png",
    href: "/agentes/blog",
    large: false,
    gradient: "from-amber-400/15",
  },
  {
    id: "influencer",
    name: "Agente Influencer AI",
    role: "IA de Social Media",
    desc: "Cria e agenda posts para redes sociais com engajamento alto.",
    avatar: "/images/avatares/icon_influencer.png",
    image: "/images/agents-grid/1775511274854-2weac1klg8s.png",
    href: "/agentes/influencer",
    large: false,
    gradient: "from-pink-400/15",
  },
  {
    id: "ldr",
    name: "Agente LDR AI",
    role: "IA de Desenvolvimento",
    desc: "Nutre leads frios até o momento certo de passar para o SDR.",
    avatar: "/images/avatares/icon_outbound.png",
    image: "/images/agents-grid/1775511340861-4s3c57jfxdr.png",
    href: "/agentes/ldr",
    large: false,
    gradient: "from-indigo-400/15",
  },
  {
    id: "follow",
    name: "Agente Follow AI",
    role: "IA de Follow-up",
    desc: "Envia follow-ups automáticos e reativa leads que pararam de responder.",
    avatar: "/images/avatares/icon_sdr.png",
    image: "/images/agents-grid/1775511344204-in80tewkv9.png",
    href: "/agentes/follow",
    large: false,
    gradient: "from-rose-400/15",
  },
];

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link href={agent.href} className="group block h-full">
        <div className="bg-[#F9F9F9] rounded-[24px] overflow-hidden hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className={`relative overflow-hidden flex-1 min-h-[260px] bg-gradient-to-b ${agent.gradient} to-[#F9F9F9]`}>
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
              style={{ minHeight: 240 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F9] via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div className="px-5 pb-5 pt-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs text-gray-400 mb-0.5">{agent.role}</div>
                <h3 className="text-[15px] font-semibold text-gray-900">{agent.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-1">{agent.desc}</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-black text-white group-hover:bg-gray-800 transition-colors">
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function AgentsStore() {
  const [sdr, suporte, crm, agendamento, closer, outbound, blog, influencer, ldr, follow] = agents;

  return (
    <section id="agentes" className="py-8 md:py-12 bg-white scroll-mt-24">
      <div className="max-w-6xl px-4 md:container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Store</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Loja de{" "}
              <span className="gradient-text">Agentes de IA</span>
            </h2>
          </div>
          <a
            href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Avatar strip */}
        <div className="overflow-x-auto scrollbar-none -mx-4 px-4 mb-8">
          <div className="flex gap-3 w-max pb-2">
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={agent.href}
                className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-gray-50 transition group min-w-[72px]"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-100 group-hover:ring-gray-300 transition-all">
                  <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] text-gray-400 text-center whitespace-nowrap">{agent.role}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bento grid */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1 – SDR (2/3) + Suporte (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-2"><AgentCard agent={sdr} index={0} /></div>
            <div className="md:col-span-1"><AgentCard agent={suporte} index={1} /></div>
          </div>
          {/* Row 2 – CRM + Agendamento + Closer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <AgentCard agent={crm} index={2} />
            <AgentCard agent={agendamento} index={3} />
            <AgentCard agent={closer} index={4} />
          </div>
          {/* Row 3 – Outbound (2/3) + CTA (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-2"><AgentCard agent={outbound} index={5} /></div>
            <div className="bg-[#050C13] rounded-[24px] p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Custom</p>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  Precisa de um agente personalizado?
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Treinamos com os dados do seu negócio e integramos com seus sistemas.
                </p>
              </div>
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors w-fit"
              >
                Falar com especialista
              </a>
            </div>
          </div>
          {/* Row 4 – Blog + Influencer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <AgentCard agent={blog} index={6} />
            <AgentCard agent={influencer} index={7} />
          </div>
          {/* Row 5 – LDR + Follow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <AgentCard agent={ldr} index={8} />
            <AgentCard agent={follow} index={9} />
          </div>
        </div>

      </div>
    </section>
  );
}
