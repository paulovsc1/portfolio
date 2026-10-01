# Portfólio Pessoal — Paulo Victor da Silva Carlos

Portfólio moderno, responsivo e internacionalizado desenvolvido com **Next.js 14/15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e suporte a temas claro/escuro.

---

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS + CSS Variables (`--accent` customizável)
- **Animações**: Framer Motion + Marquee em CSS puro (com suporte a `prefers-reduced-motion`)
- **Ícones**: Lucide React
- **Internacionalização (i18n)**: PT-BR (padrão) e EN com alternância dinâmica em Context e persistência no `localStorage`.

---

## 📁 Como Editar os Conteúdos

Todos os textos e informações do portfólio foram totalmente desacoplados dos componentes de interface e estão organizados na pasta `src/data/`:

- `src/data/hero.ts`: Etiqueta, título principal, subtítulo, links de currículo e os 4 cards de destaque.
- `src/data/projects.ts`: Lista dos projetos (título, descrição PT/EN, tags, links do GitHub e imagens).
- `src/data/about.ts`: Caminho da foto de perfil, palavras flutuantes e parágrafos da bio em 1ª pessoa.
- `src/data/skills.ts`: Categorias e chips de habilidades (Frontend, Backend, Tools).
- `src/data/experience.ts`: Histórico profissional (New Qi) com bullets detalhados.
- `src/data/contact.ts`: E-mail, links do GitHub/LinkedIn e texto de copyright.

---

## 🎨 Como Trocar a Cor de Destaque (Accent Color)

A cor de destaque (verde-limão por padrão) está totalmente encapsulada em uma variável CSS global.  
Para alterar para qualquer outra cor (ex: azul, roxo, rosa, laranja):

Abra o arquivo `src/app/globals.css` e altere o valor da variável `--accent` no bloco `:root`:

```css
:root {
  --accent: #a3e635; /* Altere aqui para a cor desejada, ex: #3b82f6 ou #ec4899 */
  ...
}
```

---

## 💻 Como Rodar o Projeto Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. Abra o navegador em [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deploy na Vercel

O projeto está 100% otimizado para deploy instantâneo na **Vercel**:

1. Faça o push deste repositório para o seu GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: meu portfolio em Next.js"
   git remote add origin https://github.com/paulovsc1/portfolio-paulo.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Importe o repositório `portfolio-paulo`.
4. Clique em **Deploy** (a Vercel detectará o Next.js automaticamente sem precisar de configurações adicionais).

---

## 📄 Licença & Direitos

© 2026 Paulo Victor da Silva Carlos. Todos os direitos reservados.
