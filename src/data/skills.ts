export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategoryDetailed {
  title: {
    pt: string;
    en: string;
  };
  skills: SkillItem[];
}

export const skillsDetailedData: SkillCategoryDetailed[] = [
  {
    title: {
      pt: 'Frontend',
      en: 'Frontend',
    },
    skills: [
      { name: 'React', icon: '/react.svg' },
      { name: 'Next.js', icon: '/nextjs-icon.svg' },
      { name: 'TypeScript', icon: '/typescript-icon.svg' },
      { name: 'JavaScript', icon: '/javascript.svg' },
      { name: 'HTML5', icon: '/html-5.svg' },
      { name: 'Tailwind CSS', icon: '/tailwindcss-icon.svg' },
    ],
  },
  {
    title: {
      pt: 'Backend & APIs',
      en: 'Backend & APIs',
    },
    skills: [
      { name: 'Jest (Testes)', icon: '/jest.svg' },
      { name: 'REST API', icon: '/react.svg' },
      { name: 'Keycloak (Auth)', icon: '/visual-studio-code.svg' },
    ],
  },
  {
    title: {
      pt: 'Tools & Workflow',
      en: 'Tools & Workflow',
    },
    skills: [
      { name: 'Git', icon: '/git-icon.svg' },
      { name: 'GitHub', icon: '/github-icon.svg' },
      { name: 'Azure DevOps', icon: '/microsoft-azure.svg' },
      { name: 'VS Code', icon: '/visual-studio-code.svg' },
    ],
  },
];
