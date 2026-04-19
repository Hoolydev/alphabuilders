"use client";

import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/IconCloud";

const iconSlugs = [
  "react",
  "nextdotjs",
  "nodedotjs",
  "typescript",
  "python",
  "go",
  "swift",
  "kotlin",
  "postgresql",
  "mongodb",
  "redis",
  "docker",
  "amazonaws",
  "googlecloud",
  "kubernetes",
  "graphql",
  "prisma",
  "supabase",
  "figma",
  "tailwindcss",
  "flutter",
  "ReactNative",
];

export default function TechStackMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-black-metal overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Nossas tecnologias
          </h2>
          <p className="text-black-ribbon text-sm">
            Utilizamos as melhores ferramentas do mercado
          </p>
        </div>

        <div className="relative">
          {/* Subtle radial fade on the edges */}
          <div className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 60%, #0c0c0c 100%)"
            }}
          />
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </motion.section>
  );
}
