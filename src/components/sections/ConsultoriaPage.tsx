"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    icon: "🗺️",
    title: "Mapeamento de Processos",
    description: "Documentamos como sua empresa opera hoje, identificamos gargalos, redundâncias e oportunidades de automação. Entregamos um diagnóstico claro do que deve ser feito.",
  },
  {
    icon: "🏗️",
    title: "Arquitetura de Software",
    description: "Definimos a stack tecnológica certa para o seu contexto: banco de dados, infraestrutura, APIs, microserviços ou monolito. A decisão certa no início evita reescritas caras no futuro.",
  },
  {
    icon: "🤖",
    title: "Estratégia de IA e Automação",
    description: "Avaliamos quais processos têm maior ROI para automação, qual ferramenta usar (n8n, Make, custom) e como integrar agentes de IA sem criar complexidade desnecessária.",
  },
  {
    icon: "📋",
    title: "Roadmap Técnico",
    description: "Traduzimos objetivos de negócio em um plano de desenvolvimento priorizado, com estimativas realistas, dependências claras e milestones mensuráveis.",
  },
  {
    icon: "🔍",
    title: "Due Diligence de Código",
    description: "Auditamos sistemas existentes antes de você contratar um time ou comprar uma empresa. Entregamos relatório detalhado sobre qualidade, débito técnico e riscos.",
  },
  {
    icon: "🎓",
    title: "Capacitação de Time",
    description: "Treinamos seu time interno nas ferramentas e práticas corretas, desde engenheiros até gestores que precisam tomar decisões técnicas com confiança.",
  },
];

const deliverables = [
  "Documento de diagnóstico técnico",
  "Mapa de processos atual vs. ideal",
  "Recomendação de stack e ferramentas",
  "Roadmap priorizado com estimativas",
  "Análise de build vs. buy",
  "Identificação de quick wins",
];

const faq = [
  {
    q: "Quando faz sentido contratar consultoria técnica?",
    a: "Quando você vai fazer uma decisão técnica importante: escolher uma tecnologia, contratar um time, iniciar um projeto grande, ou quando sente que o sistema atual está limitando o crescimento.",
  },
  {
    q: "Qual é a diferença para desenvolvimento?",
    a: "Na consultoria, entregamos orientação, diagnóstico e planejamento, não código. É para quem precisa de clareza antes de começar a executar, ou de uma segunda opinião técnica independente.",
  },
  {
    q: "Quanto tempo leva uma consultoria?",
    a: "Depende do escopo. Um diagnóstico inicial leva de 1 a 2 semanas. Um mapeamento completo de processos com roadmap pode levar de 3 a 6 semanas.",
  },
  {
    q: "Vocês recomendam contratar a Alpha Builders para o desenvolvimento depois?",
    a: "Somente se fizer sentido para você. A consultoria é independente do desenvolvimento. Nosso objetivo é orientar bem, não gerar projetos para nós.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] as const } },
};

export default function ConsultoriaPage() {
  return (
    <div className="bg-black-metal min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: "#e3fd79" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs text-reno-sand uppercase tracking-widest mb-6 block">Consultoria Técnica</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-beryl-pearl mb-6 leading-[1.1]">
              Clareza técnica antes<br />
              de <span className="text-reno-sand">qualquer decisão</span>
            </h1>
            <p className="text-xl text-black-ribbon leading-relaxed mb-10 max-w-2xl">
              Ajudamos empresas a mapear processos, escolher tecnologias e definir o roadmap certo.
              Sem viés de venda, só orientação técnica honesta para você decidir com confiança.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-btn bg-reno-sand text-black font-semibold hover:bg-reno-sand/90 transition-all duration-300"
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold text-beryl-pearl mb-3">O que fazemos</h2>
            <p className="text-black-ribbon max-w-xl">Cada serviço entrega um resultado tangível, não apenas recomendações vagas.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="bg-card rounded-card p-7 border border-card-border hover:border-reno-sand/20 transition-all duration-450 group"
              >
                <span className="text-3xl mb-5 block">{s.icon}</span>
                <h3 className="text-base font-semibold text-beryl-pearl mb-3">{s.title}</h3>
                <p className="text-sm text-black-ribbon leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-beryl-pearl mb-4">
                O que você recebe ao final
              </h2>
              <p className="text-black-ribbon mb-8 leading-relaxed">
                Toda consultoria entrega documentação clara que você leva para qualquer time ou fornecedor
                sem criar dependência.
              </p>
              <ul className="flex flex-col gap-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-reno-sand/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-reno-sand" />
                    </div>
                    <span className="text-sm text-black-ribbon">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-card p-8 border border-card-border"
            >
              <h3 className="text-lg font-bold text-beryl-pearl mb-6">FAQ</h3>
              <div className="flex flex-col gap-6">
                {faq.map((item, i) => (
                  <div key={i} className={i > 0 ? "pt-6 border-t border-card-border" : ""}>
                    <p className="text-sm font-semibold text-beryl-pearl mb-2">{item.q}</p>
                    <p className="text-sm text-black-ribbon leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 bg-card/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-beryl-pearl mb-4">
              Agende uma conversa inicial
            </h2>
            <p className="text-black-ribbon mb-8">
              A primeira conversa é gratuita. Em 30 minutos, entendemos seu contexto e explicamos o que faz sentido para você.
            </p>
            <a
              href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-reno-sand text-black font-semibold hover:bg-reno-sand/90 transition-all duration-300"
            >
              Agendar conversa gratuita
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
