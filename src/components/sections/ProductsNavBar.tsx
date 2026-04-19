"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { name: "Alpha One",  label: "One",   href: "/ai",    icon: "/images/icons/one.svg",   desc: "SuperApp"         },
  { name: "Alpha AI",   label: "AI",    href: "/ai",    icon: "/images/icons/ai.svg",    desc: "Agentes de IA"    },
  { name: "Alpha Voice",label: "Voice", href: "/voice", icon: "/images/icons/voice.svg", desc: "Agentes de Voz"   },
  { name: "Alpha Bots", label: "Bots",  href: "/bots",  icon: "/images/icons/bots.svg",  desc: "Chatbots no-code" },
  { name: "Alpha Chat", label: "Chat",  href: "/chat",  icon: "/images/icons/chat.svg",  desc: "Omnichannel"      },
];

export default function ProductsNavBar() {
  return (
    <section className="py-8 md:py-10 bg-white border-y border-gray-100">
      <div className="max-w-6xl px-4 md:container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6"
        >
          SuperApp Alpha Builders
        </motion.p>
        <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
          <div className="flex items-center justify-start md:justify-center gap-3 w-max md:w-full mx-auto">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <Link
                  href={p.href}
                  className="flex flex-col items-center gap-2 group px-5 py-4 rounded-2xl hover:bg-gray-50 transition-colors min-w-[90px]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F9F9F9] group-hover:bg-white group-hover:shadow-md transition-all flex items-center justify-center border border-gray-100">
                    <img
                      src={p.icon}
                      alt={p.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-900">
                      <span className="font-normal text-gray-500">Alpha </span>
                      {p.label}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{p.desc}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
