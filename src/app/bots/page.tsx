import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductPage from "@/components/sections/ProductPage";

export const metadata = {
  title: "Alpha Bots | Chatbots No-code | Alpha Builders",
  description: "Crie chatbots no-code para WhatsApp, Instagram e web em minutos. Sem código, sem complexidade.",
};

const data = {
  name: "Alpha Bots",
  tagline: "Chatbots No-code",
  headline: (
    <>
      Crie chatbots no-code{" "}
      <span style={{ backgroundImage: "linear-gradient(90deg, #23142a, #6800b2, #ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        em minutos
      </span>
    </>
  ),
  subline: "Visual builder de fluxos + IA para respostas inteligentes.",
  description:
    "O Alpha Bots é o construtor visual de chatbots da Alpha Builders. Crie fluxos de conversação com drag-and-drop, adicione inteligência artificial e publique em qualquer canal — sem escrever uma linha de código.",
  heroImage: "/images/avatares/icon_sdr.png",
  accentColor: "#8b00ff",
  features: [
    { icon: "🎨", title: "Builder Visual Drag-and-Drop", desc: "Monte fluxos de conversa visualmente, sem código." },
    { icon: "🤖", title: "IA Integrada", desc: "Adicione respostas inteligentes com GPT em qualquer nó do fluxo." },
    { icon: "📱", title: "Multicanal Nativo", desc: "WhatsApp, Instagram, Telegram, Facebook Messenger, Chat Web." },
    { icon: "🔗", title: "Integrações Nativas", desc: "Webhook, Google Sheets, HubSpot, RD Station e mais." },
    { icon: "📊", title: "Analytics de Fluxo", desc: "Taxa de conclusão, abandono e conversão por etapa." },
    { icon: "🧪", title: "A/B Testing de Fluxos", desc: "Teste diferentes abordagens e veja qual converte mais." },
    { icon: "💻", title: "Chat Widget para Site", desc: "Embede em qualquer site com um snippet de código." },
    { icon: "🌐", title: "Disponível 24/7", desc: "Um bot que nunca dorme, sem custo por hora." },
    { icon: "🔄", title: "Templates Prontos", desc: "Biblioteca de templates para qualificação, suporte e vendas." },
  ],
  howItWorks: [
    { step: "1", title: "Escolha um template", desc: "Comece com um template pronto ou do zero no builder visual." },
    { step: "2", title: "Conecte ao seu canal", desc: "Publique no WhatsApp, Instagram ou Chat Web com poucos cliques." },
    { step: "3", title: "O bot começa a trabalhar", desc: "Atende, qualifica e encaminha leads automaticamente 24/7." },
  ],
  useCases: [
    { title: "Qualificação de leads", desc: "Filtre visitantes de site antes de chegarem ao time de vendas." },
    { title: "FAQ automatizado", desc: "Responda as 100 perguntas mais frequentes sem humano." },
    { title: "Captura de dados", desc: "Formulários conversacionais com taxa de conversão maior." },
    { title: "Onboarding de clientes", desc: "Guie novos usuários por etapas de ativação." },
    { title: "Promoções e campanhas", desc: "Dispare fluxos de bot em resposta a campanhas de marketing." },
  ],
  relatedAgents: [
    { name: "Agente Suporte", href: "/agentes/suporte", icon: "💬" },
    { name: "Agente SDR", href: "/agentes/sdr", icon: "🎯" },
    { name: "Agente Blog", href: "/agentes/blog", icon: "✍️" },
    { name: "Alpha Chat", href: "/chat", icon: "📡" },
  ],
};

export default function BotsPage() {
  return (
    <>
      <Navbar />
      <ProductPage data={data} />
      <Footer />
    </>
  );
}
