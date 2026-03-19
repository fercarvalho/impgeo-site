# 🗺️ IMP Geotecnologias Aplicadas — Site Institucional

> Site institucional moderno e responsivo da **IMP Geotecnologias Aplicadas**, empresa especializada em geoprocessamento, georreferenciamento, topografia, mapeamento com drone e licenciamento ambiental.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## ✨ Demonstração

> 🔗 [impgeo.com.br](https://www.impgeo.com.br)

---

## 📸 Preview

| Dark Mode | Light Mode |
|-----------|------------|
| ![dark](./Arquivos/Geotecnologias%20Aplicadas%20-%20IMP.png) | *(toggle disponível no site)* |

---

## 🚀 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://reactjs.org/) | 18 | Framework principal |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Vite](https://vitejs.dev/) | 5 | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Estilização utilitária |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animações e transições |
| [Lucide React](https://lucide.dev/) | latest | Ícones vetoriais |

---

## 🎨 Design

O design foi desenvolvido com inspiração em produtos modernos como [Framer](https://www.framer.com/), [Raycast](https://www.raycast.com/) e [Spline](https://spline.design/), com foco em:

- **Dark/Light mode** com toggle persistente (localStorage + preferência do sistema)
- **Glassmorphism** — cards com blur e transparência
- **Grid animado** no hero com efeito perspectiva
- **Scroll parallax** suave no hero
- **Bento grid** na seção de serviços
- **Carrossel infinito** de parceiros (CSS puro, sem biblioteca)
- **Contadores animados** com easing cúbico
- **Accordion** animado no FAQ
- **Filtro animado** no portfólio com AnimatePresence

### Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Primary | `#2563EB` | Ações, destaques, CTA |
| Primary Dark | `#1D4ED8` | Hover, gradientes |
| Teal | `#14B8A6` | Acentos secundários |
| Teal Dark | `#0D9488` | Hover, gradientes |
| Dark 950 | `#050C1A` | Background dark |
| Dark 800 | `#1E293B` | Cards dark |

---

## 📁 Estrutura do Projeto

```
impgeo-site/
├── public/
│   ├── logo.png
│   └── images/              # Assets de imagens e logos
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Navegação sticky com indicador de seção ativa
│   │   │   └── Footer.tsx   # Rodapé com mapa do site e contatos
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero com parallax e cards flutuantes
│   │   │   ├── Services.tsx     # Bento grid de serviços
│   │   │   ├── About.tsx        # Sobre nós com contadores animados
│   │   │   ├── Portfolio.tsx    # Portfólio filtrado por categoria
│   │   │   ├── Testimonials.tsx # Depoimentos em masonry grid
│   │   │   ├── Partners.tsx     # Carrossel infinito de parceiros
│   │   │   ├── FAQ.tsx          # Perguntas frequentes (accordion)
│   │   │   └── CTA.tsx          # Chamada para ação final
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx  # Contador numérico animado
│   │       └── SectionBadge.tsx     # Badge de seção estilizado
│   ├── hooks/
│   │   ├── useTheme.ts    # Gerenciamento dark/light mode
│   │   └── useInView.ts   # Intersection Observer para animações
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## ⚡ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/impgeo-site.git
cd impgeo-site

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Preview da build

```bash
npm run preview
```

---

## 🚀 Deploy na Vercel

A forma mais simples de publicar é pelo [Vercel](https://vercel.com/):

### Opção 1 — Interface Web

1. Acesse [vercel.com](https://vercel.com/) e faça login com sua conta GitHub
2. Clique em **"Add New Project"**
3. Importe este repositório
4. O Vercel detecta automaticamente que é um projeto Vite — mantenha as configurações padrão
5. Clique em **"Deploy"**

### Opção 2 — CLI

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Faça o deploy
vercel
```

### Configuração recomendada (vercel.json)

Crie um arquivo `vercel.json` na raiz do projeto:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 🧩 Personalizando o Conteúdo

### Informações de contato

Edite os links do WhatsApp e e-mail em:
- [src/components/layout/Header.tsx](src/components/layout/Header.tsx)
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)
- [src/components/sections/CTA.tsx](src/components/sections/CTA.tsx)

Substitua `5543991862770` pelo seu número e `contato@impgeo.com.br` pelo seu e-mail.

### Portfólio

Adicione ou edite projetos no array `projects` em:
- [src/components/sections/Portfolio.tsx](src/components/sections/Portfolio.tsx)

### Depoimentos

Edite o array `testimonials` em:
- [src/components/sections/Testimonials.tsx](src/components/sections/Testimonials.tsx)

### Parceiros

Adicione logos na pasta `public/images/` e edite o array `partners` em:
- [src/components/sections/Partners.tsx](src/components/sections/Partners.tsx)

### Cores

As cores do tema estão centralizadas em:
- [tailwind.config.ts](tailwind.config.ts)

---

## 🌐 SEO

O site inclui meta tags básicas no [index.html](index.html):
- `<meta name="description">`
- `<meta name="keywords">`
- Open Graph (`og:title`, `og:description`, `og:image`)

Para SEO avançado, considere adicionar [React Helmet Async](https://github.com/staylor/react-helmet-async) para meta tags dinâmicas por seção.

---

## 📱 Responsividade

O layout é totalmente responsivo com breakpoints:

| Breakpoint | Largura | Layout |
|---|---|---|
| Mobile | < 640px | 1 coluna, menu hambúrguer |
| Tablet | 640–1024px | 2 colunas, grid adaptado |
| Desktop | > 1024px | 3–4 colunas, layout completo |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE) para detalhes.

Sinta-se livre para usar este projeto como base para o seu próprio site!

---

## 👥 Créditos

Desenvolvido com ❤️ para a **IMP Geotecnologias Aplicadas**
Design inspirado em [Framer](https://framer.com), [Raycast](https://raycast.com) e [Spline](https://spline.design)

---

<p align="center">
  <strong>IMP Geotecnologias Aplicadas</strong><br/>
  📍 Londrina, PR — 📞 (43) 99186-2770 — 📧 contato@impgeo.com.br
</p>
