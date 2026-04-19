"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cols = [
  {
    title: "Produtos IA",
    links: [
      { label: "Alpha AI",    href: "/ai" },
      { label: "Alpha Voice", href: "/voice" },
      { label: "Alpha Bots",  href: "/bots" },
      { label: "Alpha Chat",  href: "/chat" },
    ],
  },
  {
    title: "Agentes de IA",
    links: [
      { label: "Agente SDR",         href: "/agentes/sdr" },
      { label: "Agente Suporte",     href: "/agentes/suporte" },
      { label: "Agente CRM",         href: "/agentes/crm" },
      { label: "Agente Agendamento", href: "/agentes/agendamento" },
      { label: "Agente Closer",      href: "/agentes/closer" },
      { label: "Agente Outbound",    href: "/agentes/outbound" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós",   href: "/sobre" },
      { label: "Planos",      href: "/precos" },
      { label: "Blog",        href: "/blog" },
      { label: "Consultoria", href: "/consultoria" },
      { label: "Termos",      href: "#" },
      { label: "LGPD",        href: "#" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "silfrancys92@gmail.com", href: "mailto:silfrancys92@gmail.com" },
      { label: "WhatsApp",               href: "https://wa.me/5562982683262" },
      { label: "Agendar Demo",           href: "https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min" },
      { label: "FAQ",                    href: "/#faq" },
    ],
  },
  {
    title: "Seja Nosso Parceiro",
    links: [
      { label: "Parceria Estratégica", href: "#" },
      { label: "Programa de Revenda",  href: "#" },
      { label: "Afiliados",            href: "#" },
      { label: "Integração via API",   href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 z-[900] flex flex-col gap-3">
        <a
          href="https://wa.me/5562982683262"
          target="_blank"
          rel="noopener noreferrer"
          title="Falar no WhatsApp"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a
          href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
          target="_blank"
          rel="noopener noreferrer"
          title="Agendar Demo"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:scale-110 transition-transform"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl md:container mx-auto px-4 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-2 font-bold text-gray-900 text-[16px] mb-3">
                <img src="/logo.svg" alt="Alpha Builders" className="h-6 w-auto" />
                Alpha Builders
              </a>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-4">
                Agentes de IA e software personalizado para empresas.
              </p>
              <div className="flex gap-2 mb-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold bg-black text-white h-9 px-4 rounded-full w-fit hover:bg-gray-800 transition-colors"
                >
                  📅 Agendar Demo
                </a>
              </div>
            </div>

            {/* Columns */}
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-300">
              © {new Date().getFullYear()} Alpha Builders. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-300">
              Agentes de IA · Software Sob Medida · Automações n8n
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
