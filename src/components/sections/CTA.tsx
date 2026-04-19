"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <>
      {/* Benefits row */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl px-4 md:container mx-auto">
          <div className="bg-[#F9F9F9] rounded-[24px] p-8 md:p-14 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
                Quanto seu time perde em tarefas que um{" "}
                <span className="gradient-text">agente de IA</span>{" "}
                poderia fazer?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                Mapeamos seus processos, identificamos o que pode ser automatizado e implementamos agentes que trabalham enquanto você dorme.
              </p>
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95"
              >
                Quero mapear meus processos
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              {[
                "Agentes que vendem e atendem 24/7 no WhatsApp",
                "Integração com seu CRM, ERP e ferramentas existentes",
                "Setup em menos de 48h, com suporte hands-on",
                "ROI mensurável: leads qualificados + horas economizadas",
                "Sem lock-in: você tem controle total dos dados e fluxos",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100"
                >
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

          </div>
        </div>
      </section>

      {/* Final CTA – dark section */}
      <section id="contato" className="relative py-24 md:py-32 bg-[#050C13] overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,128,255,0.08)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[250px] rounded-full blur-[100px]"
          style={{ background: "rgba(255,0,128,0.08)" }} />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Disponível para novos projetos
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pronto para ter agentes de IA{" "}
              <span className="gradient-text">trabalhando pelo seu negócio?</span>
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Comece com uma demo gratuita. Em até 48h você recebe uma proposta com escopo fechado e ROI estimado.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all active:scale-95"
              >
                📅 Agendar Demo Gratuita
              </a>
              <a
                href="https://wa.me/5562982683262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-white font-semibold border border-white/10 hover:bg-white/5 transition-all"
              >
                💬 WhatsApp
              </a>
            </div>
            <p className="text-xs text-white/25 tracking-wide">
              Sem compromisso · Demo em até 48h · Proposta com escopo fechado
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
