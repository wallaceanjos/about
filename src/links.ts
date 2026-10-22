// Tudo o que o linktree mostra. Só projetos e links reais da Losanjos Studios.

export const STUDIO = {
  name: 'Losanjos Studios',
  owner: 'Wallace dos Anjos',
  tagline: 'Apps e jogos feitos do zero, com propósito.',
};

export type StoreLink = { label: string; href?: string; note?: string; icon: 'play' | 'apple' | 'web' | 'devlog' };

export const THE_SYSTEM = {
  name: 'The System',
  status: 'No ar',
  pitch: 'Transforma a sua rotina num jogo, igual um RPG: missão do dia, treino, dieta, estudo e o seu nível subindo junto.',
  links: [
    { label: 'Baixar na Google Play', href: 'https://play.google.com/store/apps/details?id=com.thesystem.app', icon: 'play' },
    // O iOS ainda está em revisão na Apple: o botão fica desativado até a aprovação.
    { label: 'App Store', note: 'Em breve', icon: 'apple' },
    { label: 'Abrir na web', href: 'https://the-system-7q6.pages.dev/', icon: 'web' },
    { label: 'Devlog no Instagram', href: 'https://www.instagram.com/wallace2anjos/', icon: 'devlog' },
  ] satisfies StoreLink[],
};

export const ADVENTO = {
  name: 'Advento',
  status: 'Em desenvolvimento',
  pitch: 'Um MMORPG cristão sobre a guerra espiritual invisível. Acompanhe o documento de design do jogo.',
  href: 'https://wallaceanjos.github.io/advento-journey/',
  cta: 'Ler o GDD',
};

export type Social = { label: string; href: string; icon: 'instagram' | 'linkedin' | 'github' | 'behance' | 'mail' | 'whatsapp' };

export const SOCIALS: Social[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/wallace2anjos/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wallace-dos-anjos/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/wallaceanjos/', icon: 'github' },
  { label: 'Behance', href: 'https://www.behance.net/wallace2anjos', icon: 'behance' },
  { label: 'E-mail', href: 'mailto:wallace2anjos@gmail.com', icon: 'mail' },
  { label: 'WhatsApp', href: 'https://wa.me/5521998886888', icon: 'whatsapp' },
];
