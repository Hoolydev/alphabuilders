"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Linkedin } from "lucide-react";

const values = [
  {
    icon: "⚡",
    title: "Velocidade com qualidade",
    description: "Entregamos rápido porque temos processo, não porque cortamos atalhos. Sprint semanais com entregas incrementais e código que você pode levar para qualquer lugar.",
  },
  {
    icon: "🔍",
    title: "Transparência total",
    description: "Você sabe o que está sendo feito, por quê e como. Sem caixa preta, sem jargão, sem surpresas no orçamento. Comunicação direta, sempre.",
  },
  {
    icon: "🏗️",
    title: "Construído para durar",
    description: "Código limpo, documentado e com arquitetura que escala. Não construímos para impressionar no demo. Construímos para que você não precise nos contratar de volta para manutenção básica.",
  },
  {
    icon: "🎯",
    title: "Resultado sobre tecnologia",
    description: "Não somos apaixonados por tecnologia pela tecnologia. Somos apaixonados por resolver o problema certo da forma mais simples e eficaz possível.",
  },
];

const stats = [
  { value: "40+",    label: "Projetos entregues" },
  { value: "15+",    label: "Empresas atendidas" },
  { value: "3 anos", label: "No mercado" },
  { value: "98%",    label: "Taxa de retenção" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] as const } },
};

export default function SobrePage() {
  return (
    <div className="bg-black-metal min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-8" style={{ background: "#e3fd79" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            >
              <span className="text-xs text-reno-sand uppercase tracking-widest mb-6 block">Sobre nós</span>
              <h1 className="text-5xl sm:text-6xl font-bold text-beryl-pearl mb-6 leading-[1.1]">
                Nascemos da<br />
                <span className="text-reno-sand">frustração</span><br />
                com software ruim
              </h1>
              <p className="text-xl text-black-ribbon leading-relaxed">
                A Alpha Builders nasceu porque os fundadores cansaram de ver empresas pagando caro por sistemas que não entregavam, projetos que nunca terminavam, e tecnologia que complicava em vez de simplificar.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.44, 0, 0.56, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-tile p-6 border border-card-border">
                  <p className="text-3xl font-bold text-reno-sand mb-1">{stat.value}</p>
                  <p className="text-sm text-black-ribbon">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-beryl-pearl mb-8">Nossa história</h2>
            <div className="flex flex-col gap-6 text-black-ribbon leading-relaxed">
              <p>
                Tudo começou com projetos que quebravam em produção, prazos que nunca eram cumpridos, e clientes que pagavam muito para ter sistemas que mal funcionavam. Nossos fundadores passaram anos vendo esse padrão se repetir: em agências, em grandes empresas, em startups.
              </p>
              <p>
                A conclusão foi simples: o problema não era falta de tecnologia. Era falta de processo, de comunicação honesta, e de compromisso com resultado em vez de horas faturadas.
              </p>
              <p>
                A Alpha Builders foi construída em torno de uma premissa diferente: <strong className="text-beryl-pearl/90">o software só tem valor quando resolve o problema do cliente</strong>. Isso parece óbvio, mas surpreendentemente raro na prática.
              </p>
              <p>
                Hoje trabalhamos com empresas de diferentes segmentos: saúde, finanças, logística, varejo, sempre com o mesmo foco: entender o problema real antes de escrever a primeira linha de código.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold text-beryl-pearl mb-3">Como trabalhamos</h2>
            <p className="text-black-ribbon max-w-xl">Os princípios que guiam todas as nossas decisões técnicas e de negócio.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={itemVariants}
                className="flex gap-5 bg-card rounded-card p-7 border border-card-border hover:border-reno-sand/20 transition-all duration-450"
              >
                <span className="text-3xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="text-base font-semibold text-beryl-pearl mb-2">{v.title}</h3>
                  <p className="text-sm text-black-ribbon leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold text-beryl-pearl mb-3">O time</h2>
            <p className="text-black-ribbon max-w-xl">
              Dois fundadores com histórico real em produto, escala e entrega. Sem cargo vazio, sem consultor de slide.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">

            {/* Silfarney */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-card border border-card-border rounded-2xl overflow-hidden"
            >
              <div className="relative h-72 w-full bg-[#1a1a1a]">
                <Image
                  src="/equipe/silfarney.jpeg"
                  alt="Silfarney Oliveira"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-beryl-pearl">Silfarney Oliveira</h3>
                    <span className="text-xs font-semibold text-reno-sand uppercase tracking-widest">Founder & CEO</span>
                  </div>
                  <a
                    href="https://behoolydev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-reno-sand/10 border border-reno-sand/20 flex items-center justify-center text-reno-sand hover:bg-reno-sand/20 transition-colors flex-shrink-0"
                  >
                    <Globe size={14} />
                  </a>
                </div>
                <p className="text-sm text-black-ribbon leading-relaxed">
                  Designer, desenvolvedor e estrategista de produto. Combina visão de negócio com execução técnica. Antes de fundar a Alpha Builders, trabalhou construindo produtos digitais do zero para empresas de saúde, finanças e varejo. Especialista em automações com IA e sistemas que escalam sem reescrever do zero.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Produto", "IA & Automações", "Full Stack", "Design System"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-[#242424] border border-card-border text-black-ribbon">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Haysllan */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-card border border-card-border rounded-2xl overflow-hidden"
            >
              <div className="relative h-72 w-full bg-[#1a1a1a]">
                <Image
                  src="/equipe/haysllan.jpeg"
                  alt="Haysllan Carneiro"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-beryl-pearl">Haysllan Carneiro</h3>
                    <span className="text-xs font-semibold text-reno-sand uppercase tracking-widest">Co-Founder & CTO</span>
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-reno-sand/10 border border-reno-sand/20 flex items-center justify-center text-reno-sand hover:bg-reno-sand/20 transition-colors flex-shrink-0"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
                <p className="text-sm text-black-ribbon leading-relaxed">
                  Diretor Técnico da Hapvida, uma das maiores redes de saúde do Brasil. Especialista em arquitetura de sistemas de alta escala, infraestrutura crítica e engenharia de plataforma. Traz para a Alpha Builders o rigor de quem operou sistemas com milhões de usuários simultâneos, sem margem para falha.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Arquitetura", "Alta Escala", "Infraestrutura", "Hapvida"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-[#242424] border border-card-border text-black-ribbon">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black-metal">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-beryl-pearl mb-4">
              Trabalhe com quem entende<br />o problema antes de codificar
            </h2>
            <p className="text-black-ribbon mb-8">
              Conte seu desafio. Em 30 minutos, temos clareza se faz sentido trabalharmos juntos.
            </p>
            <a
              href="https://cal.com/silfarney-oliveira-oliveira-kpzhle/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-reno-sand text-black font-semibold hover:bg-reno-sand/90 transition-all duration-300"
            >
              Iniciar conversa
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
