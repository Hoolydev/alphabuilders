"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "O que é a Alpha Builders e quais produtos oferece?",
    a: "A Alpha Builders é uma plataforma de Agentes de IA e software personalizado para empresas. Oferecemos Alpha AI (plataforma de agentes), Alpha Voice (agentes de voz), Alpha Bots (chatbots no-code) e Alpha Chat (central omnichannel), além de desenvolvimento de software sob medida.",
  },
  {
    q: "A Alpha Builders funciona para empresas de qualquer tamanho?",
    a: "Sim. Atendemos desde startups e PMEs até grandes corporações. Temos planos escaláveis que crescem junto com o seu negócio, sem necessidade de contratar uma equipe técnica dedicada.",
  },
  {
    q: "Preciso saber programar para usar?",
    a: "Não. Nossos produtos são projetados para equipes sem conhecimento técnico. O Alpha Bots, por exemplo, é 100% no-code. Para customizações avançadas, nossa equipe de especialistas cuida de tudo.",
  },
  {
    q: "Integra com WhatsApp e outras ferramentas?",
    a: "Sim! Integra com WhatsApp, Instagram, Telegram, Discord, Slack, Gmail, Facebook Messenger, Microsoft Teams e muito mais. Também conectamos com CRMs, ERPs e ferramentas via API ou webhooks.",
  },
  {
    q: "Quanto tempo leva para implementar?",
    a: "Agentes prontos podem ser ativados em menos de 48 horas. Projetos de software sob medida têm cronograma de 2 a 8 semanas, dependendo da complexidade. Após a demo, você recebe um plano detalhado.",
  },
  {
    q: "A plataforma é segura e compatível com a LGPD?",
    a: "Sim. Todos os dados são tratados em conformidade com a Lei Geral de Proteção de Dados (LGPD). Utilizamos criptografia em trânsito e em repouso, e não compartilhamos dados com terceiros sem autorização.",
  },
  {
    q: "Qual o ROI esperado?",
    a: "Nossos clientes reportam redução de 60-80% no custo de atendimento e aumento de até 3x na taxa de conversão de leads. O retorno sobre investimento geralmente ocorre nos primeiros 2-3 meses de uso.",
  },
  {
    q: "Oferece período de teste gratuito?",
    a: "Oferecemos uma demonstração gratuita e personalizada para o seu negócio. Durante a demo, você vê os agentes em ação com dados reais da sua empresa. Entre em contato para agendar.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Todos os planos incluem suporte via WhatsApp em horário comercial. Planos Pro e Enterprise incluem suporte prioritário 24/7 e um gerente de sucesso dedicado para garantir os melhores resultados.",
  },
  {
    q: "Quais modelos de IA são utilizados?",
    a: "Utilizamos os modelos mais avançados do mercado, incluindo GPT-4o, Claude 3.5 Sonnet e Gemini Pro. A escolha do modelo é feita de acordo com o caso de uso — priorizando qualidade, velocidade e custo.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm md:text-base font-medium text-gray-900 group-hover:text-black transition-colors">
          {item.q}
        </span>
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
          {open ? <Minus size={13} className="text-gray-600" /> : <Plus size={13} className="text-gray-600" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.44, 0, 0.56, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-400 leading-relaxed pb-5 pr-10">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ({ pricingFAQ = false }: { pricingFAQ?: boolean }) {
  const pricingFaqs = [
    {
      q: "Os planos têm contrato de fidelidade?",
      a: "Não há fidelidade. Todos os planos são mensais e você pode cancelar a qualquer momento sem multa.",
    },
    {
      q: "O que acontece se eu precisar de mais agentes?",
      a: "Você pode fazer upgrade do seu plano a qualquer momento pelo painel. A cobrança é feita de forma proporcional ao período restante.",
    },
    {
      q: "Existe taxa de setup ou implementação?",
      a: "Para planos de Agentes de IA, não há taxa de setup. Projetos de software sob medida podem ter um custo de discovery dependendo da complexidade.",
    },
    {
      q: "Posso testar antes de pagar?",
      a: "Sim! Agende uma demo gratuita e veja os agentes funcionando com dados do seu negócio antes de qualquer compromisso financeiro.",
    },
    {
      q: "Aceitam pagamento via boleto ou PIX?",
      a: "Sim. Aceitamos PIX, boleto bancário, cartão de crédito e débito. Planos anuais têm desconto de até 20%.",
    },
  ];

  const items = pricingFAQ ? pricingFaqs : faqs;

  return (
    <section id="faq" className="py-8 md:py-12 bg-white scroll-mt-24">
      <div className="max-w-3xl px-4 md:container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <div className="bg-[#F9F9F9] rounded-[24px] px-6 md:px-8">
          {items.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5562982683262"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
