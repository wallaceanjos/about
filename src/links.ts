// Tudo o que o link da bio mostra. Só projetos e links reais da Losanjos Studios.

export const STUDIO = {
  name: 'Losanjos Studios',
  owner: 'Wallace dos Anjos',
};

export type MenuLink = { label: string; href?: string; note?: string; icon: 'play' | 'apple' | 'web' | 'heart' | 'book' };

export const THE_SYSTEM = {
  name: 'The System',
  pitch: 'Sua rotina vira um RPG.',
  links: [
    { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.thesystem.app', icon: 'play' },
    { label: 'iOS', href: 'https://apps.apple.com/br/app/the-system/id6819947961', icon: 'apple' },
    { label: 'Web', href: 'https://the-system-7q6.pages.dev/', icon: 'web' },
  ] satisfies MenuLink[],
};

export const ADVENTO = {
  name: 'Advento',
  pitch: 'MMORPG cristão em desenvolvimento',
  links: [
    { label: 'Seja um colaborador', href: 'https://www.vakinha.com.br/vaquinha/ajuda-para-criar-um-game-cristao-de-verdade', icon: 'heart' },
    { label: 'GDD', href: 'https://wallaceanjos.github.io/advento-journey/', icon: 'book' },
  ] satisfies MenuLink[],
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
