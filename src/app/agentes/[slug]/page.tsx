import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgentPage from "@/components/sections/AgentPage";

const agents: Record<string, {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  desc: string;
  longDesc: string;
  avatar: string;
  image: string;
  features: { icon: string; title: string; desc: string }[];
  channels: string[];
  useCases: string[];
  color: string;
}> = {
  sdr: {
    slug: "sdr",
    name: "Agente SDR AI",
    role: "IA de Vendas",
    tagline: "Vendedor que nunca dorme",
    desc: "Agente focado em otimizar a conversão de leads.",
    longDesc: "O Agente SDR AI da Alpha Builders qualifica leads automaticamente, responde no WhatsApp 24/7 e agenda reuniões com os melhores prospects do seu pipeline. Treinado com o playbook da sua empresa.",
    avatar: "/images/avatares/icon_sdr.png",
    image: "/images/agents-blob/1764697053462-rc2zft2hydc.png",
    features: [
      { icon: "🎯", title: "Qualificação Automática", desc: "Classifica leads por BANT e ICP em tempo real" },
      { icon: "💬", title: "WhatsApp 24/7", desc: "Responde e nutre leads a qualquer hora" },
      { icon: "📅", title: "Agendamento Inteligente", desc: "Marca reuniões direto na agenda dos vendedores" },
      { icon: "🔗", title: "Integração com CRM", desc: "Atualiza HubSpot, Pipedrive ou qualquer CRM" },
      { icon: "📊", title: "Relatórios de Performance", desc: "Dashboard com taxa de qualificação e conversão" },
      { icon: "🧠", title: "Memória Contextual", desc: "Lembra de conversas anteriores com o lead" },
    ],
    channels: ["WhatsApp", "Instagram DM", "E-mail"],
    useCases: [
      "Times de vendas que recebem muitos leads e não conseguem responder todos",
      "Empresas que perdem leads por demora no primeiro contato",
      "Negócios com ciclo de venda longo que precisam de follow-up constante",
      "Startups que querem escalar vendas sem contratar mais SDRs humanos",
    ],
    color: "#0080ff",
  },
  suporte: {
    slug: "suporte",
    name: "Agente de Suporte",
    role: "IA de Atendimento",
    tagline: "Suporte que nunca faz você esperar",
    desc: "Atendimento ao cliente com IA avançada.",
    longDesc: "O Agente de Suporte da Alpha Builders resolve tickets automaticamente, faz triagem inteligente e direciona casos complexos para sua equipe humana. Treinado com sua base de conhecimento.",
    avatar: "/images/avatares/suporte-full.png",
    image: "/images/agents-blob/1764793159327-cdjhriqznt.png",
    features: [
      { icon: "⚡", title: "Resolução Instantânea", desc: "Responde +80% das dúvidas sem intervenção humana" },
      { icon: "🔀", title: "Triagem Inteligente", desc: "Escala apenas o que really precisa de humano" },
      { icon: "📚", title: "Base de Conhecimento", desc: "Treinado com seus FAQs, manuais e docs" },
      { icon: "🌐", title: "Multi-canal", desc: "WhatsApp, Instagram, e-mail e chat web" },
      { icon: "⏱️", title: "SLA Zero", desc: "Primeiro contato em menos de 3 segundos" },
      { icon: "📈", title: "CSAT Automático", desc: "Pesquisa de satisfação após cada atendimento" },
    ],
    channels: ["WhatsApp", "Instagram", "E-mail", "Chat Web"],
    useCases: [
      "E-commerces com alto volume de perguntas sobre pedidos e entregas",
      "SaaS que precisam de suporte técnico de primeiro nível",
      "Clínicas e consultórios com dúvidas repetitivas sobre consultas",
      "Bancos e fintechs com queries de conta e transações",
    ],
    color: "#8b00ff",
  },
  crm: {
    slug: "crm",
    name: "Agente CRM AI",
    role: "IA de CRM",
    tagline: "CRM que se atualiza sozinho",
    desc: "Coleta dados e atualiza o CRM da sua empresa automaticamente.",
    longDesc: "O Agente CRM AI captura dados de interações com clientes e atualiza seu CRM automaticamente, elimina inputs manuais e garante que a base de dados esteja sempre atualizada e confiável.",
    avatar: "/images/avatares/icon_crm.png",
    image: "/images/agents-grid/1775081486141-8svjtn63wqa.png",
    features: [
      { icon: "🔄", title: "Atualização Automática", desc: "Sincroniza dados após cada interação" },
      { icon: "🎯", title: "Enriquecimento de Dados", desc: "Completa perfis com dados públicos e de LinkedIn" },
      { icon: "📊", title: "Identificação de Oportunidades", desc: "Detecta leads quentes baseado no comportamento" },
      { icon: "🔗", title: "Multi-CRM", desc: "HubSpot, Salesforce, Pipedrive, RD Station e mais" },
      { icon: "⚠️", title: "Alertas Inteligentes", desc: "Notifica quando um lead está prestes a fechar" },
      { icon: "📋", title: "Relatórios Executivos", desc: "Gera relatórios semanais automaticamente" },
    ],
    channels: ["WhatsApp", "E-mail", "CRM APIs"],
    useCases: [
      "Times de vendas que perdem tempo atualizando o CRM manualmente",
      "Gestores que não confiam na integridade dos dados do pipeline",
      "Empresas com longo ciclo de vendas e muitos touchpoints",
    ],
    color: "#ff0080",
  },
  agendamento: {
    slug: "agendamento",
    name: "Agente de Agendamento",
    role: "IA de Agenda",
    tagline: "Secretária virtual que agenda 24/7",
    desc: "Marca reuniões e organiza sua agenda automaticamente.",
    longDesc: "O Agente de Agendamento gerencia calendários, confirma compromissos, envia lembretes e elimina o vai-e-vem de e-mails para marcar reuniões. Integra com Google Calendar e Calendly.",
    avatar: "/images/avatares/icon_agendamento.png",
    image: "/images/agents-grid/1775511115982-hwg10mo90s.png",
    features: [
      { icon: "📅", title: "Agendamento Automático", desc: "Marca reuniões de acordo com disponibilidade" },
      { icon: "🔔", title: "Lembretes Automáticos", desc: "WhatsApp + e-mail antes da reunião" },
      { icon: "✅", title: "Confirmação e Rescheduling", desc: "Gerencia cancelamentos e remarcações" },
      { icon: "🗓️", title: "Google Calendar", desc: "Integração nativa com Google e Outlook" },
      { icon: "🌍", title: "Fuso Horário", desc: "Gerencia reuniões em qualquer timezone" },
      { icon: "📋", title: "Coleta de Dados", desc: "Captura informações antes da reunião" },
    ],
    channels: ["WhatsApp", "E-mail", "Google Calendar"],
    useCases: [
      "Consultórios e clínicas com alta demanda de agendamentos",
      "Corretores e consultores que têm agenda lotada",
      "Escolas e cursos que precisam agendar aulas em escala",
    ],
    color: "#ff8000",
  },
  closer: {
    slug: "closer",
    name: "Agente Closer AI",
    role: "IA de Fechamento",
    tagline: "Fecha negócios enquanto você dorme",
    desc: "Conduz negociações e fecha propostas automaticamente.",
    longDesc: "O Agente Closer AI conduz o cliente pela última etapa do funil, responde objeções com argumentos treinados no seu playbook, apresenta propostas e envia contratos para assinatura digital.",
    avatar: "/images/avatares/icon_closer.png",
    image: "/images/agents-blob/1764703946922-g6ifsxxyl1i.png",
    features: [
      { icon: "🤝", title: "Negociação Inteligente", desc: "Responde objeções com os argumentos certos" },
      { icon: "📄", title: "Proposta Automática", desc: "Gera e envia propostas personalizadas" },
      { icon: "✍️", title: "Assinatura Digital", desc: "Integra com DocuSign e ClickSign" },
      { icon: "💰", title: "Desconto Estratégico", desc: "Negocia dentro dos limites definidos" },
      { icon: "🔁", title: "Follow-up de Proposta", desc: "Acompanha a proposta até a resposta" },
      { icon: "📊", title: "Taxa de Fechamento", desc: "Rastreia win rate por origem e segmento" },
    ],
    channels: ["WhatsApp", "E-mail"],
    useCases: [
      "Times de vendas com taxa de fechamento abaixo do esperado",
      "Negócios com propostas que ficam semanas sem resposta",
      "Empresas que querem escalar vendas sem contratar mais closers",
    ],
    color: "#e3fd79",
  },
  outbound: {
    slug: "outbound",
    name: "Agente Outbound",
    role: "IA de Prospecção",
    tagline: "Prospecção ativa em escala",
    desc: "Prospecção ativa no LinkedIn e WhatsApp com IA.",
    longDesc: "O Agente Outbound identifica prospects ideais, envia mensagens personalizadas no LinkedIn e WhatsApp, faz follow-up automático e entrega leads qualificados para o time de vendas.",
    avatar: "/images/avatares/icon_outbound.png",
    image: "/images/agents-blob/1764704032434-sglopbb8fpl.png",
    features: [
      { icon: "🔍", title: "Identificação de ICP", desc: "Encontra empresas e contatos dentro do perfil ideal" },
      { icon: "✉️", title: "Mensagens Personalizadas", desc: "Personaliza cada abordagem com o contexto do lead" },
      { icon: "🔁", title: "Follow-up Automático", desc: "Sequência de 5 a 7 touchpoints automáticos" },
      { icon: "💼", title: "LinkedIn + WhatsApp", desc: "Prospecção multicanal coordenada" },
      { icon: "📊", title: "Qualificação BANT", desc: "Classifica e prioriza leads automaticamente" },
      { icon: "🤝", title: "Handoff para SDR", desc: "Transfere leads quentes com contexto completo" },
    ],
    channels: ["LinkedIn", "WhatsApp", "E-mail Cold"],
    useCases: [
      "Startups B2B que precisam construir pipeline do zero",
      "Times comerciais que querem mais leads sem aumentar headcount",
      "Agências que prospectam novos clientes constantemente",
    ],
    color: "#00d4aa",
  },
  blog: {
    slug: "blog",
    name: "Agente Blog AI",
    role: "IA de Conteúdo",
    tagline: "Conteúdo que rankeia no Google",
    desc: "Gera conteúdo otimizado para SEO automaticamente.",
    longDesc: "O Agente Blog AI pesquisa palavras-chave, gera artigos completos e otimizados para SEO, cria posts para redes sociais e mantém sua presença digital consistente sem esforço manual.",
    avatar: "/images/avatares/icon_blog.png",
    image: "/images/agents-grid/1775511257747-rvjddhhtq1k.png",
    features: [
      { icon: "📝", title: "Artigos Completos", desc: "Gera artigos de 1.500+ palavras otimizados para SEO" },
      { icon: "🔍", title: "Pesquisa de Keywords", desc: "Identifica oportunidades de ranking e tráfego" },
      { icon: "📱", title: "Posts para Redes Sociais", desc: "Adapta conteúdo para LinkedIn, Instagram e X" },
      { icon: "🔗", title: "Linking Interno", desc: "Sugere links internos para fortalecer seu site" },
      { icon: "📊", title: "Análise de Concorrentes", desc: "Identifica gaps do conteúdo da concorrência" },
      { icon: "🗓️", title: "Calendário Editorial", desc: "Planeja e agenda publicações automaticamente" },
    ],
    channels: ["WordPress", "Webflow", "LinkedIn", "Instagram"],
    useCases: [
      "Empresas que querem mais tráfego orgânico sem contratar redatores",
      "Agências de marketing que produzem conteúdo para vários clientes",
      "SaaS e startups que precisam de presença digital consistente",
    ],
    color: "#ff6b35",
  },
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(agents).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const agent = agents[params.slug];
  if (!agent) return {};
  return {
    title: `${agent.name} | Alpha Builders`,
    description: agent.longDesc,
  };
}

export default function AgentDetailPage({ params }: Props) {
  const agent = agents[params.slug];
  if (!agent) notFound();
  return (
    <>
      <Navbar />
      <AgentPage agent={agent} />
      <Footer />
    </>
  );
}
