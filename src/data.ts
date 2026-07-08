import { Project, Skill, TimelineEvent, SocialLink } from './types';

export const personalInfo = {
  name: "Wallace dos Anjos",
  title: "Front-end Engineer & UI Specialist",
  bio: "Sou Wallace dos Anjos. Com uma trajetória iniciada em 2009, hoje me dedico à engenharia de aplicações web híbridas e sistemas escaláveis. Meu grande diferencial é a integração profunda entre UI e engenharia de software: não apenas implemento interfaces, eu as concebo com rigor técnico. A experiência na construção de Design Systems complexos em Angular forjou minha visão arquitetônica, permitindo-me estruturar projetos robustos em React e Next.js com extrema organização e clareza. Como founder da Los Anjos, ajudo empresas a transformar visões em produtos digitais performáticos, onde a sensibilidade estética de um designer garante a usabilidade, e o rigor técnico garante a estabilidade e a longevidade do código.",
  location: "Brasil",
  email: "wallace2anjos@gmail.com",
  experienceYears: 15,
  projectsCount: 42,
  coffeeCups: 1250,
  happyClients: 35
};

export const skills: Skill[] = [
  // Design & Visual Identity
  { name: "Identidade Visual & Branding", level: 95, category: "design" },
  { name: "Tipografia & Composição", level: 90, category: "design" },
  { name: "Adobe Illustrator & Photoshop", level: 92, category: "design" },
  { name: "Figma (UI/UX Systems)", level: 88, category: "design" },
  { name: "Direção de Arte", level: 85, category: "design" },

  // Front-End Dev
  { name: "React & Next.js", level: 90, category: "dev" },
  { name: "TypeScript & ES6+", level: 85, category: "dev" },
  { name: "Tailwind CSS & SASS", level: 95, category: "dev" },
  { name: "Framer Motion (Animações)", level: 90, category: "dev" },
  { name: "Performance Web & Core Web Vitals", level: 88, category: "dev" },

  // CMS & Integration
  { name: "WordPress (Custom Themes)", level: 85, category: "cms" },
  { name: "Gutenberg Block Development", level: 80, category: "cms" },
  { name: "SEO Técnico", level: 82, category: "cms" },
  { name: "Git & GitHub Pages", level: 90, category: "cms" },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2024 - Presente",
    title: "Senior Brand Designer & Front-End Developer",
    company: "Los Anjos Studio",
    description: "Atuação independente na concepção de identidades visuais icônicas para marcas globais e no desenvolvimento de websites interativos premium utilizando React e Next.js."
  },
  {
    year: "2022 - 2024",
    title: "Desenvolvedor Front-End & WordPress Specialist",
    company: "Vanguarda Digital",
    description: "Criação de landing pages focadas em conversão, desenvolvimento de temas WordPress customizados e otimização de performance técnica de plataformas web corporativas."
  },
  {
    year: "2020 - 2022",
    title: "Designer Gráfico & UI/UX Designer",
    company: "Estúdio Gótico Moderno",
    description: "Desenvolvimento de logos, tipografia customizada, manuais de identidade visual completos de marcas de luxo, e prototipação de interfaces ricas de alto contraste no Figma."
  },
  {
    year: "2018 - 2020",
    title: "Desenvolvedor Web Júnior",
    company: "Alfa Tecnologia",
    description: "Codificação de layouts responsivos estruturados em HTML5, CSS3, e JavaScript ES6. Criação de sites institucionais utilizando CMS e plataformas estruturadas."
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Los Anjos Brewery Co.",
    description: "Identidade de marca completa para uma cervejaria artesanal de estilo urbano gótico, combinando tipografia medieval expressiva com design de embalagens minimalista.",
    category: "design",
    subtype: "Identidade Visual & Branding",
    techStack: ["Illustrator", "Photoshop", "Direção de Arte", "Branding"],
    imageUrl: "brewery", // Usada para renderizar o estilo do mockup correspondente
    details: "Uma identidade marcante construída em torno de um monograma gótico 'LA' customizado (com inspiração direta nos traços clássicos). O projeto incluiu o desenvolvimento do logotipo, tipografia de apoio, paleta de cores institucional em ouro e carvão, design de latas e garrafas exclusivas, e copos gravados sob medida.",
    featured: true,
    behanceUrl: "#"
  },
  {
    id: "2",
    title: "Prestige Law Firm Portal",
    description: "Tema WordPress customizado criado totalmente do zero com blocos Gutenberg integrados, SEO otimizado, velocidade excepcional no Lighthouse e área de membros dedicada.",
    category: "dev",
    subtype: "Custom WordPress CMS",
    techStack: ["WordPress", "Tailwind CSS", "JavaScript ES6", "PHP", "MySQL"],
    imageUrl: "lawfirm",
    details: "Desenvolvimento e otimização de um portal de altíssimo padrão para advogados. Conta com tipografia refinada, transições suaves de carregamento de páginas e painel personalizado fácil de operar, livre de construtores de páginas pesados. Lighthouse score alcançou 98+ em performance, acessibilidade e SEO.",
    featured: true,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Neon Twilight Campaign",
    description: "Série experimental de direção de arte e posters digitais inspirados na estética Synthwave dos anos 80, com gradientes vibrantes em violeta-neon, ruído fotográfico e silhuetas tropicais.",
    category: "design",
    subtype: "Direção de Arte & Posters",
    techStack: ["Photoshop", "Camera Raw", "Digital Art", "Lightroom"],
    imageUrl: "neontwilight",
    details: "Uma fusão poética de gradientes violeta, rosa e âmbar, simulando o brilho misterioso do crepúsculo. A série de artes utiliza efeitos finos de granulação analógica, aberração cromática e tipografia gótica adaptada para criar uma ponte memorável entre o retrô de vanguarda e o design moderno.",
    featured: true,
    behanceUrl: "#"
  },
  {
    id: "4",
    title: "Aura Premium Skincare",
    description: "Landing page de altíssima conversão com rolagem suave paralaxe e transições sutis, focada na experiência imersiva e estética minimalista.",
    category: "dev",
    subtype: "Next.js Landing Page",
    techStack: ["Next.js", "Tailwind CSS", "React", "Framer Motion", "SEO"],
    imageUrl: "auraskincare",
    details: "Projetada para uma marca fictícia de luxo de cuidados com a pele. A aplicação oferece rolagem incrivelmente suave controlada por animações baseadas no viewport, carregamento preguiçoso de assets, modo escuro/claro nativo super responsivo, e excelente pontuação de SEO.",
    featured: true,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "5",
    title: "Kuro Blackletter Book Specimen",
    description: "Design editorial e livreto tipográfico estudando o renascimento de fontes pretas góticas aplicadas a layouts corporativos modernos.",
    category: "design",
    subtype: "Design Editorial & Tipográfico",
    techStack: ["InDesign", "Illustrator", "Type Specimen", "Print Production"],
    imageUrl: "kurobook",
    details: "Um livreto teórico-prático de 32 páginas que analisa a história da escrita gótica medieval europeia e demonstra sua reinvenção na direção de arte contemporânea. Inclui grid de diagramação suíço ultra-preciso de 12 colunas e posters tipográficos bicolores encartados.",
    featured: false,
    behanceUrl: "#"
  },
  {
    id: "6",
    title: "Cyberpunk Gear Store",
    description: "E-commerce conceitual com micro-interações animadas em 3D simuladas, efeitos sonoros opcionais para interface e sistema dinâmico de busca por tags.",
    category: "dev",
    subtype: "React SPA Portfolio",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Motion", "Web Audio API"],
    imageUrl: "cyberpunk",
    details: "Aplicação altamente interativa construída para demonstrar proficiência em animações de estado complexas no React. Utiliza o framer-motion (Motion) para layouts líquidos, micro-interações táteis sonoras (Web Audio) ao clicar nos botões e filtragem de categorias instantânea sem travamentos.",
    featured: false,
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/wallaceanjos/", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/wallace-dos-anjos/", icon: "Linkedin" },
  { platform: "Behance", url: "https://www.behance.net/wallace2anjos", icon: "Palette" },
  { platform: "Instagram", url: "https://www.instagram.com/wallacelosanjos/", icon: "Instagram" },
  { platform: "Email", url: "mailto:wallace2anjos@gmail.com", icon: "Mail" }
];
