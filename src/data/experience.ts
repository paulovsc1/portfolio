import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    company: 'New Qi',
    role: {
      pt: 'Desenvolvedor Front-End',
      en: 'Front-End Developer',
    },
    period: {
      pt: 'Set/2025 – Jul/2026',
      en: 'Sep/2025 – Jul/2026',
    },
    location: 'Brasil (Remoto)',
    description: {
      pt: [
        'Sistema de Gestão de Rateio (Micro Frontends): Desenvolvimento e evolução de sistema corporativo complexo para gestão de rateio de CNPJ e centros de custo com React e TypeScript em arquitetura de Micro Frontends. Integração de APIs REST, regras de negócio avançadas e cobertura de testes unitários com Jest. Atuação direta com code review rigoroso e pair programming em fluxo ágil com Azure DevOps.',
        'Plataforma de Vagas para Profissionais de Tecnologia: Atuação integral da implementação até a entrega final em produção utilizando React, JavaScript e consumo de APIs REST. Definição da arquitetura de componentes alinhada ao Design System institucional. Implementação de upload/download de currículos, navegação condicional por perfil de usuário e autenticação corporativa via Keycloak. Configuração de pipeline de testes no GitHub Actions (CI/CD). Destaque para a resolução de mais de 20 bugs críticos em uma única sprint (1 semana), zerando retrabalho da equipe.',
      ],
      en: [
        'Expense Apportionment Management System (Micro Frontends): Engineered and maintained a complex enterprise platform for corporate CNPJ and cost center apportionment using React and TypeScript in a Micro Frontend architecture. Integrated REST APIs, complex business rules, and unit test suites with Jest. Active participation in code reviews and pair programming within an agile Azure DevOps workflow.',
        'Tech Talent Job Portal: Led front-end development from initial setup to production release using React, JavaScript, and REST APIs. Defined component architecture following the company Design System. Built resume upload/download features, role-based conditional UI flows, and enterprise authentication via Keycloak. Set up automated CI/CD test pipelines with GitHub Actions. Recognized for resolving 20+ critical bugs within a single 1-week sprint, significantly reducing team rework.',
      ],
    },
  },
];
