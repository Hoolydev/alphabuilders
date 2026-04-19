import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductPage from "@/components/sections/ProductPage";

export const metadata = {
  title: "Alpha Chat | Central de Atendimento com IA | Alpha Builders",
  description: "Central de atendimento omnichannel com IA. Gerencie todas as conversas de WhatsApp, Instagram, Telegram e mais em um único lugar.",
};

const data = {
  name: "Alpha Chat",
  tagline: "Central Omnichannel",
  headline: (
    <>
      Central de Atendimento
      <br />
      <span style={{ backgroundImage: "linear-gradient(90deg, #ffa500, #ff4500, #ff0080, #0080ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        com IA integrada
      </span>
    </>
  ),
  subline: "Todos os canais, uma caixa de entrada. IA que classifica e responde.",
  description:
    "O Alpha Chat unifica todas as conversas da sua empresa — WhatsApp, Instagram, Telegram, e-mail e mais — em uma central omnichannel. Com IA que classifica tickets, sugere respostas e automatiza o roteamento.",
  heroImage: "/images/solutions/chat-test.png",
  accentColor: "#ff6600",
  features: [
    { icon: "📥", title: "Inbox Unificado", desc: "WhatsApp, Instagram, Telegram, Gmail e mais em uma tela." },
    { icon: "🤖", title: "Respostas Sugeridas pela IA", desc: "A IA sugere respostas baseadas no histórico e base de conhecimento." },
    { icon: "🔀", title: "Roteamento Inteligente", desc: "Direciona para o atendente certo baseado no assunto." },
    { icon: "🏷️", title: "Tags e Categorização", desc: "Classifica conversas automaticamente por tipo e urgência." },
    { icon: "👥", title: "Times e Filas", desc: "Organize equipes por produto, região ou tipo de atendimento." },
    { icon: "📊", title: "Métricas de Atendimento", desc: "TMA, TMR, CSAT, NPS e volume por canal em tempo real." },
    { icon: "💾", title: "Histórico Completo", desc: "Todo histórico de conversas por cliente em um perfil unificado." },
    { icon: "🔔", title: "Alertas de SLA", desc: "Notificações automáticas para tickets próximos do prazo." },
    { icon: "📱", title: "App Mobile", desc: "Atenda de qualquer lugar pelo aplicativo iOS e Android." },
  ],
  howItWorks: [
    { step: "1", title: "Conecte seus canais", desc: "Integre WhatsApp Business, Instagram, Telegram e e-mail via API." },
    { step: "2", title: "Configure equipes e SLAs", desc: "Defina quem atende o quê, metas de tempo e regras de roteamento." },
    { step: "3", title: "A IA trabalha junto", desc: "Classifica, sugere respostas e escala apenas o necessário para humanos." },
  ],
  useCases: [
    { title: "E-commerce com alto volume", desc: "Centralize todas as mensagens de clientes em uma operação." },
    { title: "Empresas com múltiplos canais", desc: "Elimine o caos de WhatsApp pessoal, e-mail e Instagram separados." },
    { title: "Times de suporte distribuídos", desc: "Gerencie atendentes remotos com filas e métricas." },
    { title: "Imobiliárias e construtoras", desc: "Centralize leads de portais, WhatsApp e site." },
    { title: "Clínicas e hospitais", desc: "Atendimento omni para marcação de consultas e resultados." },
  ],
  relatedAgents: [
    { name: "Agente Suporte", href: "/agentes/suporte", icon: "💬" },
    { name: "Agente CRM", href: "/agentes/crm", icon: "📊" },
    { name: "Alpha Bots", href: "/bots", icon: "🤖" },
    { name: "Alpha AI", href: "/ai", icon: "🧠" },
  ],
};

export default function ChatPage() {
  return (
    <>
      <Navbar />
      <ProductPage data={data} />
      <Footer />
    </>
  );
}
