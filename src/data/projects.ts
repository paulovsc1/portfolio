import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'yugioh-store',
    title: 'Yu-Gi-Oh! Store',
    description: {
      pt: 'Loja de cartas com listagem, filtros avançados, paginação e carrinho de compras completo com persistência em localStorage, integrado a uma API REST.',
      en: 'Card store featuring listing, advanced filters, pagination, and a full shopping cart with localStorage persistence, integrated with a REST API.',
    },
    tags: ['React', 'Vite', 'Tailwind CSS', 'API REST'],
    githubUrl: 'https://github.com/paulovsc1/teste-fpr',
    image: '/projects/yugioh-store.png',
    featured: true,
  },
  {
    id: 'pokedex-app',
    title: 'Pokédex App',
    description: {
      pt: 'Sistema interativo de captura de Pokémons: busca aleatória, modal de detalhes, sidebar de capturados e limite inteligente de capturas por sessão.',
      en: 'Interactive Pokémon capture system: random search, details modal, captured sidebar, and session capture limit management.',
    },
    tags: ['React', 'JavaScript', 'API REST'],
    githubUrl: 'https://github.com/paulovsc1/teste-pokemon-frontend',
    image: '/projects/pokedex-app.png',
    featured: true,
  },
  {
    id: 'rpg-game',
    title: 'RPG Game',
    description: {
      pt: 'Jogo web 2D com movimentação de personagem pelo cenário e interações visuais, desenvolvido com foco em gerenciamento de estado e lógica de interface.',
      en: '2D web game with character movement across scenarios and visual interactions, built with a focus on state management and UI logic.',
    },
    tags: ['TypeScript', 'React'],
    githubUrl: 'https://github.com/paulovsc1/rpg',
    image: '/projects/rpg-game.png',
    featured: true,
  },
  {
    id: 'dev-movies',
    title: 'Dev Movies',
    description: {
      pt: 'Plataforma web de filmes e séries com busca dinâmica, categorias e navegação fluida por catálogo consumido diretamente de API externa.',
      en: 'Movies and series platform featuring dynamic search, categories, and smooth browsing powered by an external REST API.',
    },
    tags: ['JavaScript', 'HTML/CSS', 'API REST'],
    githubUrl: 'https://github.com/paulovsc1/dev-movies',
    image: '/projects/dev-movies.png',
    featured: false,
  },
  {
    id: 'fpr-animes',
    title: 'FPR Animes',
    description: {
      pt: 'Catálogo completo de animes construído consumindo a API pública do Kitsu, com implementação de alta fidelidade baseada em protótipo do Figma.',
      en: 'Complete anime catalog built using the public Kitsu API, featuring pixel-perfect implementation based on a Figma prototype.',
    },
    tags: ['JavaScript', 'API REST', 'Figma'],
    githubUrl: 'https://github.com/paulovsc1/projeto-animes',
    image: '/projects/fpr-animes.png',
    featured: false,
  },
];
