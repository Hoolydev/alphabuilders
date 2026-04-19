export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "A Alpha Builders entregou os aplicativos do banco e ainda implementou uma IA de voz e atendimento automático no WhatsApp para suporte ao cliente. O que antes exigia uma equipe inteira rodando em turnos, hoje opera de forma autônoma com muito mais agilidade.",
    name: "Demair Vauz",
    role: "Presidente",
    company: "C88 Pay",
  },
  {
    id: 2,
    quote: "Nosso hospital funciona 24 horas e a demanda por agendamentos era um gargalo constante. A Alpha Builders criou um CRM com um agente de IA que atende, agenda e confirma consultas de forma autônoma. Hoje a nossa secretaria foca no que realmente importa.",
    name: "Cesar",
    role: "Diretor",
    company: "Hospital Ubarana",
  },
  {
    id: 3,
    quote: "Precisávamos de um sistema robusto de gestão de cargas para CME com rastreabilidade completa. A Alpha Builders entendeu a complexidade da operação e entregou exatamente o que precisávamos, dentro do prazo e sem surpresas.",
    name: "Fernando",
    role: "Product Owner",
    company: "Strattner",
  },
];
