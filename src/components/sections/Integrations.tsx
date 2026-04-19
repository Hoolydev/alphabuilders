import { IntegrationShowcase } from "@/components/ui/integration-showcase";

const integrations = [
  {
    name: "Stripe",
    description: "Pagamentos e assinaturas recorrentes com segurança.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "AWS",
    description: "Infraestrutura cloud escalável na nuvem Amazon.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Supabase",
    description: "Banco de dados Postgres gerenciado em tempo real.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "GitHub",
    description: "Controle de versão e CI/CD automatizado.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Vercel",
    description: "Deploy instantâneo com edge network global.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "PostgreSQL",
    description: "Banco relacional robusto para dados críticos.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    description: "Cache em memória para alta performance.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Docker",
    description: "Containerização para ambientes reproduzíveis.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "React / Next.js",
    description: "Interfaces modernas com SSR e performance nativa.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Prisma",
    description: "ORM type-safe para produtividade no backend.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Google Cloud",
    description: "AI, storage e serviços gerenciados do Google.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "TypeScript",
    description: "Código tipado, seguro e fácil de manter.",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
];

export default function Integrations() {
  return (
    <IntegrationShowcase
      title="Integração rápida e ~sem complicação~"
      subtitle="Conectamos seu produto às melhores ferramentas do mercado. Nosso código é limpo, bem documentado e pronto para escalar."
      integrations={integrations}
    />
  );
}
