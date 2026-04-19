"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico & Mapeamento",
    description:
      "Antes de qualquer proposta, entendemos o que você precisa de verdade, não o que você acha que precisa de tecnologia.",
    delivers: "Mapa de processos, identificação de gargalos e escopo realista",
    eliminates: "O medo de contratar algo errado ou superdimensionado",
  },
  {
    number: "02",
    title: "Proposta Fechada, sem surpresas",
    description:
      "Escopo claro, prazo definido, valor fixo. O que foi combinado é o que será entregue.",
    delivers: "Proposta detalhada com cronograma semana a semana",
    eliminates: "O medo de o projeto explodir no meio do caminho",
  },
  {
    number: "03",
    title: "Desenvolvimento em Sprints Semanais",
    description:
      "Você vê o produto sendo construído a cada semana. Feedback contínuo, ajustes em tempo real. Não descobriremos problemas só no dia do lançamento.",
    delivers: "Demos semanais + canal direto com o dev responsável",
    eliminates: "O medo de sumir por 3 meses e aparecer com algo errado",
  },
  {
    number: "04",
    title: "Lançamento, Treinamento e Suporte",
    description:
      "Deploy com monitoramento ativo. Treinamos seu time para usar o sistema. E ficamos do lado para garantir que tudo funciona depois que vai ao ar.",
    delivers: "Sistema em produção + documentação + suporte pós-lançamento",
    eliminates: "O medo de ficar refém de um código que ninguém além dos devs entende",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] as const } },
};

export default function HowItWorks() {
  return (
    <section id="empresa" className="py-24 bg-black-metal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beryl-pearl mb-4">
            Como transformamos seu problema em um{" "}
            <span className="text-reno-sand">sistema que funciona</span>
          </h2>
          <p className="text-black-ribbon max-w-xl">
            Processo transparente, sem caixas pretas, sem promessa que some depois da venda.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative bg-card border border-card-border rounded-2xl p-8 group hover:border-reno-sand/20 transition-all duration-450"
            >
              {/* Number decoration */}
              <div className="mb-6 relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-surface border border-white/10 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-1 bg-gradient-to-br from-bg-surface-alt to-bg-surface border border-reno-sand/20 rounded-lg -rotate-3 group-hover:-rotate-6 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-reno-sand font-bold text-base">{step.number}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-beryl-pearl mb-3">{step.title}</h3>
              <p className="text-sm text-black-ribbon leading-relaxed mb-5">{step.description}</p>

              {/* Deliverables */}
              <div className="flex flex-col gap-2 pt-4 border-t border-card-border">
                <div className="flex items-start gap-2">
                  <Check size={13} className="text-reno-sand mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-black-ribbon">
                    <span className="text-beryl-pearl/70 font-medium">Você recebe: </span>
                    {step.delivers}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={13} className="text-reno-sand mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-black-ribbon">
                    <span className="text-beryl-pearl/70 font-medium">Isso elimina: </span>
                    {step.eliminates}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
