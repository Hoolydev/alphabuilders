import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductPage from "@/components/sections/ProductPage";

export const metadata = {
  title: "Alpha AI | Plataforma de Agentes de IA | Alpha Builders",
  description: "Treine sua IA com o conteúdo do seu negócio e crie agentes que vendem, atendem e qualificam leads 24/7 no WhatsApp.",
};

const data = {
  name: "Alpha AI",
  tagline: "Plataforma de IA",
  headline: (
    <>
      Treine sua{" "}
      <span style={{ backgroundImage: "linear-gradient(90deg, #0080ff, #ff0080, #ff8000)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        IA
      </span>{" "}
      com seu conteúdo
    </>
  ),
  subline: "Do WhatsApp ao CRM, conectado ao seu negócio.",
  description:
    "O Alpha AI é a plataforma central da Alpha Builders. Crie agentes de IA treinados com os dados da sua empresa, integre com seus sistemas e automatize processos de vendas, suporte e atendimento.",
  heroImage: "/images/solutions/solution--ai-1.png",
  accentColor: "#0080ff",
  features: [
    { icon: "🧠", title: "Treine com seu conteúdo", desc: "Envie PDFs, sites, FAQs e vídeos. O agente aprende o que sua empresa sabe." },
    { icon: "💬", title: "WhatsApp Nativo", desc: "Conecte em minutos via API oficial. Respostas em menos de 3 segundos." },
    { icon: "🔗", title: "Integração com CRM", desc: "HubSpot, Pipedrive, Salesforce, RD Station — sincronização em tempo real." },
    { icon: "📊", title: "Dashboard Analytics", desc: "Taxa de resposta, satisfação, leads gerados e ROI automatizado." },
    { icon: "🎯", title: "Múltiplos Agentes", desc: "SDR, Suporte, Closer, Agendamento — cada um com sua persona." },
    { icon: "🔒", title: "Dados 100% seus", desc: "Sem lock-in. Seus dados em sua infraestrutura com LGPD." },
    { icon: "🌐", title: "Omnichannel", desc: "WhatsApp, Instagram, Telegram, Gmail, Slack, Discord." },
    { icon: "⚡", title: "Setup em 48h", desc: "Nossa equipe faz o onboarding completo. Você vai ao ar rápido." },
    { icon: "🔄", title: "Memória de Conversas", desc: "O agente lembra do cliente entre sessões para personalizar o atendimento." },
  ],
  howItWorks: [
    { step: "1", title: "Conecte sua base de conhecimento", desc: "Envie documentos, URLs, FAQs e o agente aprende em minutos." },
    { step: "2", title: "Configure suas integrações", desc: "WhatsApp, CRM, calendário — conectamos via API oficial ou Zapier." },
    { step: "3", title: "Vai ao ar e aprende", desc: "O agente começa a atender, coleta feedbacks e melhora continuamente." },
  ],
  useCases: [
    { title: "Times de vendas", desc: "Qualifique leads e agende reuniões sem contratar mais SDRs." },
    { title: "E-commerce", desc: "Responda dúvidas de pedidos, rastreamento e devoluções 24/7." },
    { title: "SaaS e tech", desc: "Suporte de primeiro nível com triagem inteligente para tickets complexos." },
    { title: "Saúde e clínicas", desc: "Agendamento, lembretes e pré-triagem sem sobrecarregar a recepção." },
    { title: "Imobiliárias", desc: "Qualificação de leads de imóveis e agendamento de visitas automático." },
  ],
  relatedAgents: [
    { name: "Agente SDR", href: "/agentes/sdr", icon: "🎯" },
    { name: "Agente Suporte", href: "/agentes/suporte", icon: "💬" },
    { name: "Agente CRM", href: "/agentes/crm", icon: "📊" },
    { name: "Agente Closer", href: "/agentes/closer", icon: "🤝" },
  ],
};

export default function AIPage() {
  return (
    <>
      <Navbar />
      <ProductPage data={data} />
      <Footer />
    </>
  );
}
