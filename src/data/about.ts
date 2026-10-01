import { AboutData } from '@/types';

export const aboutData: AboutData = {
  avatarPath: '',
  floatingWords: ['Lógica', 'Criatividade', 'Performance', 'Design System'],
  title: {
    pt: 'Sobre mim',
    en: 'About me',
  },
  paragraphs: {
    pt: [
      'Desenvolvedor Front-End especialista em criar interfaces modernas, responsivas e funcionais utilizando React, Next.js e TypeScript.',
      'Atuo no desenvolvimento de sistemas corporativos reais, desde a especificação e definição do Design System até a entrega em produção com arquitetura de Micro Frontends, testes unitários com Jest e integração contínua (CI/CD).',
    ],
    en: [
      'Front-End Developer specializing in building modern, responsive, and functional user interfaces using React, Next.js, and TypeScript.',
      'I build enterprise-grade web applications from spec to production release, leveraging Micro Frontend architectures, Design System standardization, unit testing with Jest, and CI/CD pipelines.',
    ],
  },
};
