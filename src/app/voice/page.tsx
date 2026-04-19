import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductPage from "@/components/sections/ProductPage";

export const metadata = {
  title: "Alpha Voice | Agentes de Voz com IA | Alpha Builders",
  description: "Crie agentes de voz com IA que realizam ligações, qualificam leads e fecham vendas por telefone, totalmente automatizado.",
};

const data = {
  name: "Alpha Voice",
  tagline: "Agentes de Voz com IA",
  headline: (
    <>
      Crie agentes de voz com IA{" "}
      <br />
      <span style={{ backgroundImage: "linear-gradient(90deg, #69E7B9, #029F5D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        que fazem ligações e vendem
      </span>
    </>
  ),
  subline: "Tecnologia de ponta com voz natural em português, 24/7.",
  description:
    "O Alpha Voice permite criar agentes de voz com IA capazes de realizar e receber ligações com voz natural em português, qualificar leads, agendar reuniões e fazer follow-up automático — sem humano envolvido.",
  heroImage: "/images/solutions/solution--voice.png",
  heroBg: "linear-gradient(135deg, #050C13 0%, #051910 100%)",
  accentColor: "#29E05A",
  features: [
    { icon: "🎙️", title: "Voz Ultra-Realista", desc: "Voz natural em português com entonação humana via ElevenLabs." },
    { icon: "📞", title: "Ligações Ativas e Receptivas", desc: "O agente liga e recebe chamadas com script personalizado." },
    { icon: "🧠", title: "NLP Avançado", desc: "Entende interrupções, pausas e contexto de conversas reais." },
    { icon: "📅", title: "Agenda Automática", desc: "Agenda reuniões em tempo real enquanto está na ligação." },
    { icon: "🔁", title: "Follow-up por Voz", desc: "Liga de volta para leads que não atenderam ou não responderam." },
    { icon: "📊", title: "Transcrição e Analytics", desc: "Cada ligação é transcrita, analisada e enviada para o CRM." },
    { icon: "🔗", title: "Integração Telefônica", desc: "Funciona com Twilio, VoIP, números virtuais e DDDs locais." },
    { icon: "⚡", title: "Latência < 1 segundo", desc: "Resposta instantânea que mantém a conversa fluindo." },
    { icon: "🌍", title: "Multi-idioma", desc: "Português, inglês e espanhol. Perfeito para operações internacionais." },
  ],
  howItWorks: [
    { step: "1", title: "Crie o script e a voz", desc: "Defina o objetivo do agente, o tom de voz e o roteiro de qualificação." },
    { step: "2", title: "Integre com seu número", desc: "Conectamos ao seu número de telefone ou configuramos um número virtual." },
    { step: "3", title: "O agente liga e qualifica", desc: "Ativa a lista de leads, realiza ligações e registra resultados automaticamente." },
  ],
  useCases: [
    { title: "Outbound de vendas", desc: "Ligue para centenas de leads por dia sem contratar mais SDRs." },
    { title: "Confirmação de consultas", desc: "Confirme e remarque agendamentos automaticamente por voz." },
    { title: "Cobranças amigáveis", desc: "Lembre clientes de pagamentos pendentes de forma humana." },
    { title: "Pesquisa de satisfação", desc: "NPS e CSAT por voz com alta taxa de resposta." },
    { title: "Reativação de clientes inativos", desc: "Ligue para base inativa com oferta personalizada." },
  ],
  relatedAgents: [
    { name: "Agente SDR", href: "/agentes/sdr", icon: "🎯" },
    { name: "Agente Outbound", href: "/agentes/outbound", icon: "🚀" },
    { name: "Agente Agendamento", href: "/agentes/agendamento", icon: "📅" },
    { name: "Agente Closer", href: "/agentes/closer", icon: "🤝" },
  ],
};

export default function VoicePage() {
  return (
    <>
      <Navbar />
      <ProductPage data={data} />
      <Footer />
    </>
  );
}
