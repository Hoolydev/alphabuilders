import type { AnimatedFolderProps } from "@/components/ui/AnimatedFolder";

// ─── SVG gradient image generator ────────────────────────────────────────────
function img(emoji: string, c1: string, c2: string, c3 = "#0d0d0d"): string {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">`,
    `<defs>`,
    `<linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">`,
    `<stop offset="0%" stop-color="${c1}"/>`,
    `<stop offset="60%" stop-color="${c2}"/>`,
    `<stop offset="100%" stop-color="${c3}"/>`,
    `</linearGradient>`,
    `<radialGradient id="b" cx="30%" cy="35%" r="55%">`,
    `<stop offset="0%" stop-color="${c1}" stop-opacity="0.4"/>`,
    `<stop offset="100%" stop-color="transparent"/>`,
    `</radialGradient>`,
    `</defs>`,
    `<rect width="800" height="600" fill="url(#a)"/>`,
    `<rect width="800" height="600" fill="url(#b)"/>`,
    `<rect width="800" height="600" fill="rgba(0,0,0,0.15)"/>`,
    `<text x="400" y="300" font-size="180" text-anchor="middle" dominant-baseline="middle">${emoji}</text>`,
    `</svg>`,
  ].join("");
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// ─── Projects data ─────────────────────────────────────────────────────────

export const folderCategories: AnimatedFolderProps[] = [
  {
    title: "Automações & IA",
    count: 5,
    gradient: "linear-gradient(135deg,#fc6e20 0%,#7a2d00 100%)",
    accentColor: "#fc6e20",
    projects: [
      {
        id: "auto-1",
        image: img("🤖", "#fc6e20", "#3d1a08"),
        title: "Agente RH Inteligente",
        description: "Agente de IA que analisa e seleciona currículos automaticamente. Parsing de PDF, matching com vagas e dashboard de candidatos.",
        tags: ["Python", "OpenAI", "n8n", "Vercel"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "auto-2",
        image: img("⚡", "#f59e0b", "#3d2800"),
        title: "ApplyFlow — Agente RPA",
        description: "Agente RPA que analisa currículos e preenche formulários de candidatura automaticamente no LinkedIn e Gupy com score de compatibilidade.",
        tags: ["Node.js", "Express", "Socket.io", "React"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "auto-3",
        image: img("👗", "#ec4899", "#3d0a1e"),
        title: "Vitrine com Provador Virtual IA",
        description: "E-commerce com provador virtual via WhatsApp. Cliente envia foto e recebe simulação da roupa usando Google Gemini e n8n.",
        tags: ["Next.js", "Python", "Gemini", "n8n", "Supabase"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "auto-4",
        image: img("🎙️", "#8b5cf6", "#1a0d2e"),
        title: "Studio 3D com Lip Sync",
        description: "Studio web para criação de avatares 3D com sincronização labial automática, gestos animados e renderização em tempo real.",
        tags: ["JavaScript", "Vite", "Tailwind", "Node.js"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "auto-5",
        image: img("📋", "#14b8a6", "#061a17"),
        title: "Prontuário com IA",
        description: "Prontuário médico gerado automaticamente durante a consulta. Transcrição em tempo real via Whisper, sem digitação manual.",
        tags: ["Python", "OpenAI", "Whisper", "PostgreSQL"],
      },
    ],
  },
  {
    title: "CRM & Gestão",
    count: 4,
    gradient: "linear-gradient(135deg,#3b82f6 0%,#1e3a8a 100%)",
    accentColor: "#3b82f6",
    projects: [
      {
        id: "crm-1",
        image: img("💼", "#3b82f6", "#0d1b3e"),
        title: "Cyberg CRM",
        description: "CRM B2B completo com pipeline de vendas visual, gestão de contatos e empresas, alertas de tarefas e design responsivo.",
        tags: ["React 18", "TypeScript", "Tailwind", "Convex"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "crm-2",
        image: img("📊", "#6366f1", "#160d2e"),
        title: "Cyberg CRM 2.0",
        description: "Versão 2.0 com dashboard de estatísticas avançado, pipeline visual de vendas e relatórios gerados por IA.",
        tags: ["React 18", "TypeScript", "Convex", "IA"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "crm-3",
        image: img("⚖️", "#0ea5e9", "#061828"),
        title: "Sistema Jurídico",
        description: "Gestão completa de escritório jurídico: clientes, processos, prazos com extração de dados por IA, biometria e integração WhatsApp.",
        tags: ["Next.js 14", "Prisma", "PostgreSQL", "IA"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "crm-4",
        image: img("🗂️", "#22d3ee", "#051820"),
        title: "AG Soluções — Gestão",
        description: "Sistema de gestão com cadastro de clientes, Kanban de projetos e central de suporte em um só lugar.",
        tags: ["React", "TypeScript", "Vite", "Tailwind"],
        url: "https://behoolydev.vercel.app/",
      },
    ],
  },
  {
    title: "ERP & Operações",
    count: 4,
    gradient: "linear-gradient(135deg,#10b981 0%,#064e3b 100%)",
    accentColor: "#10b981",
    projects: [
      {
        id: "erp-1",
        image: img("🚗", "#10b981", "#052e1e"),
        title: "NexDrive — Gestão Automotiva",
        description: "ERP completo para revendas de veículos: catálogo com fotos, precificação FIPE, validação CPF/CNPJ e contratos digitais.",
        tags: ["React", "TypeScript", "Vite", "Tailwind"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "erp-2",
        image: img("🏗️", "#34d399", "#0a2e1a"),
        title: "Eagle — Sistema de Vistoria",
        description: "Sistema web para vistoria de imóveis usando dispositivos móveis com backend em tempo real e fluxos guiados de inspeção.",
        tags: ["TypeScript", "React", "Vite", "Convex"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "erp-3",
        image: img("🔬", "#059669", "#061a10"),
        title: "Acomp — Follow-up de Pacientes",
        description: "Gestão clínica com follow-up pós-procedimento automatizado via WhatsApp, fila de agendamento e dashboard de métricas.",
        tags: ["Next.js 16", "React 19", "Tailwind 4", "SaaS"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "erp-4",
        image: img("🏛️", "#6ee7b7", "#082318"),
        title: "Alpha Builders — SaaS",
        description: "Plataforma SaaS para comunidade de builders: posts em Markdown, paywall FREE/PRO, Stripe e upload de arquivos.",
        tags: ["Next.js 15", "Prisma", "PostgreSQL", "Stripe"],
        url: "https://behoolydev.vercel.app/",
      },
    ],
  },
  {
    title: "Web Apps",
    count: 5,
    gradient: "linear-gradient(135deg,#8b5cf6 0%,#3730a3 100%)",
    accentColor: "#8b5cf6",
    projects: [
      {
        id: "web-1",
        image: img("📈", "#8b5cf6", "#1a0d3d"),
        title: "Hágios Marketing — IA",
        description: "Plataforma de marketing digital com IA que guia empreendedores em 7 fases: conteúdo, agenda e integração Facebook/Instagram.",
        tags: ["Next.js 16", "Supabase", "IA", "SaaS"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "web-2",
        image: img("🏥", "#a78bfa", "#1e0d3d"),
        title: "Plataforma Saúde",
        description: "Plataforma multi-tenant para SaaS de saúde com agentes de IA, Z-API WhatsApp, Google Calendar, agendamento e JWT.",
        tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "web-3",
        image: img("🤖", "#7c3aed", "#150a2e"),
        title: "Cyberg AI Ops",
        description: "Plataforma de operações inteligentes com gestão automatizada de processos, dashboards e IA integrada ao fluxo de trabalho.",
        tags: ["React", "TypeScript", "Vite", "Tailwind"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "web-4",
        image: img("🩺", "#c4b5fd", "#1a0d3d"),
        title: "Cyberg Clinic",
        description: "Gestão clínica completa: agendamento via WhatsApp, prontuário eletrônico, controle financeiro e compliance TISS/SBIS.",
        tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "web-5",
        image: img("🏠", "#ddd6fe", "#160d2e"),
        title: "Eagle Vistoria Mobile-First",
        description: "Web app mobile-first para vistorias de imóveis em campo: fluxos guiados, relatórios visuais e interface otimizada.",
        tags: ["React", "TypeScript", "Vite", "Tailwind"],
        url: "https://behoolydev.vercel.app/",
      },
    ],
  },
  {
    title: "Mobile",
    count: 2,
    gradient: "linear-gradient(135deg,#ec4899 0%,#9d174d 100%)",
    accentColor: "#ec4899",
    projects: [
      {
        id: "mob-1",
        image: img("💪", "#ec4899", "#3d0a1e"),
        title: "FitStreak — App Fitness IA",
        description: "App de fitness para browser e Expo Go com design system próprio, autenticação, templates de treino e personal IA.",
        tags: ["React Native", "Expo", "TypeScript", "Node.js"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "mob-2",
        image: img("📱", "#f472b6", "#2d0a1a"),
        title: "App de Marketing Mobile",
        description: "App mobile para gestão de assinaturas, publicação de conteúdo, métricas em tempo real e notificações inteligentes.",
        tags: ["React Native", "Firebase", "TypeScript", "SaaS"],
        url: "https://behoolydev.vercel.app/",
      },
    ],
  },
  {
    title: "Sites & Landing Pages",
    count: 4,
    gradient: "linear-gradient(135deg,#06b6d4 0%,#155e75 100%)",
    accentColor: "#06b6d4",
    projects: [
      {
        id: "site-1",
        image: img("⚙️", "#06b6d4", "#0a2030"),
        title: "Site Institucional Cyberg",
        description: "Site institucional para empresa de automação com formulário integrado via Webhook, design responsivo e animações.",
        tags: ["React", "TypeScript", "Tailwind", "Vite"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "site-2",
        image: img("🏢", "#22d3ee", "#051a24"),
        title: "GON Solutions",
        description: "Site institucional moderno para empresa de soluções com seções de serviços, portfólio e formulário de contato.",
        tags: ["React", "TypeScript", "Tailwind", "Vite"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "site-3",
        image: img("🏡", "#67e8f9", "#051820"),
        title: "Site VGV — Portal Imobiliário",
        description: "Portal imobiliário com listagem de projetos, depoimentos e áreas de atuação. Interface moderna e conversão otimizada.",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://behoolydev.vercel.app/",
      },
      {
        id: "site-4",
        image: img("💊", "#a5f3fc", "#062028"),
        title: "Vistoriar Fácil",
        description: "Solução simplificada para vistorias de imóveis com interface intuitiva, focada na experiência mobile do vistoriador.",
        tags: ["React", "TypeScript", "Vite", "Tailwind"],
        url: "https://behoolydev.vercel.app/",
      },
    ],
  },
];

// ─── Legacy categories (used by Projects.tsx detail panel) ────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "automacoes",
    label: "Automações",
    description: "Fluxos inteligentes com IA, n8n e integrações",
    icon: "⚡",
    projects: folderCategories[0].projects.map((p) => ({
      id: p.id, title: p.title, description: p.description ?? "", tags: p.tags ?? [], url: p.url,
    })),
  },
  {
    id: "crm",
    label: "CRM",
    description: "Gestão de clientes e pipeline de vendas",
    icon: "👥",
    projects: folderCategories[1].projects.map((p) => ({
      id: p.id, title: p.title, description: p.description ?? "", tags: p.tags ?? [], url: p.url,
    })),
  },
  {
    id: "erp",
    label: "ERP",
    description: "Sistemas integrados de gestão empresarial",
    icon: "🏢",
    projects: folderCategories[2].projects.map((p) => ({
      id: p.id, title: p.title, description: p.description ?? "", tags: p.tags ?? [], url: p.url,
    })),
  },
  {
    id: "webapp",
    label: "Web App",
    description: "Plataformas web completas e dashboards",
    icon: "🌐",
    projects: folderCategories[3].projects.map((p) => ({
      id: p.id, title: p.title, description: p.description ?? "", tags: p.tags ?? [], url: p.url,
    })),
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Apps iOS e Android",
    icon: "📱",
    projects: folderCategories[4].projects.map((p) => ({
      id: p.id, title: p.title, description: p.description ?? "", tags: p.tags ?? [], url: p.url,
    })),
  },
  {
    id: "sites",
    label: "Sites",
    description: "Sites institucionais e landing pages",
    icon: "🎨",
    projects: folderCategories[5].projects.map((p) => ({
      id: p.id, title: p.title, description: p.description ?? "", tags: p.tags ?? [], url: p.url,
    })),
  },
];
