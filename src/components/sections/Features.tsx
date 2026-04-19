"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

const features = [
  {
    icon: "🔍",
    title: "Você nunca fica sem saber o que está acontecendo",
    description:
      "Nada de sumir por semanas e aparecer com uma surpresa. Você acompanha cada sprint semanalmente, com entregáveis reais, não reuniões de status que não levam a nada.",
  },
  {
    icon: "🏗️",
    title: "O sistema que construímos hoje aguenta o que vier amanhã",
    description:
      "Arquitetura pensada para crescer. Não importa se você tem 100 ou 100.000 usuários: o código não precisa ser reescrito quando você escalar.",
  },
  {
    icon: "🤝",
    title: "A gente entende de negócio, não só de tecnologia",
    description:
      "Antes de escrever uma linha de código, entendemos seu processo, seu cliente e o resultado que você precisa. Software que ninguém usa não resolve nada.",
  },
  {
    icon: "⚡",
    title: "Automações que eliminam trabalho manual de verdade",
    description:
      "Integrações, fluxos automáticos, IA aplicada onde faz sentido. Identificamos onde sua equipe perde tempo e construímos sistemas que devolvem essas horas.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] as const } },
};

export default function Features() {
  return (
    <section id="servicos" className="py-24 bg-black-metal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beryl-pearl mb-4 max-w-2xl">
            Por que empresas que já tentaram outras agências{" "}
            <span className="text-reno-sand">escolhem a Alpha Builders?</span>
          </h2>
          <p className="text-black-ribbon max-w-xl">
            Combinamos processo claro com visão de negócio: entregamos resultado, não horas faturadas.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full">
                <div className="text-3xl mb-5">{feature.icon}</div>
                <h3 className="text-base font-semibold text-beryl-pearl mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-black-ribbon leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
