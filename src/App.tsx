import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Apple, BookOpen, Github, HandHeart, Instagram, Linkedin, Mail, MessageCircle, Palette, Play } from 'lucide-react';
import { ADVENTO, SOCIALS, STUDIO, THE_SYSTEM, type MenuLink, type Social } from './links';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const MENU_ICON = { play: Play, apple: Apple, heart: HandHeart, book: BookOpen } as const;
const SOCIAL_ICON = { instagram: Instagram, linkedin: Linkedin, github: Github, behance: Palette, mail: Mail, whatsapp: MessageCircle } as const;

// Entrada em cascata, de cima para baixo. Com "reduzir movimento", aparece direto.
function Reveal({ index, children }: { index: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const TONE = {
  violet: 'bg-violet text-white hover:bg-violet-soft',
  gold: 'bg-gold text-black hover:bg-gold-soft',
  dark: 'bg-white/[0.08] text-ink hover:bg-white/[0.14]',
} as const;

// Uma opção do "menu" do card, como na tela de título de um jogo. Sem href fica desativada (ex.: iOS em revisão).
function MenuButton({ link, tone }: { link: MenuLink; tone: keyof typeof TONE }) {
  const Icon = MENU_ICON[link.icon];
  const base = 'press flex min-h-12 items-center justify-center gap-2 px-3 text-[15px] font-semibold';

  if (!link.href) {
    return (
      <div className={`${base} cursor-not-allowed flex-col gap-0 bg-white/[0.04] text-mute`} aria-disabled="true">
        <span className="flex items-center gap-2">
          <Icon className="size-[18px] shrink-0" aria-hidden="true" />
          {link.label}
        </span>
        <span className="text-[12px] font-medium leading-none">{link.note}</span>
      </div>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={`${base} ${TONE[tone]} cursor-pointer`}>
      <Icon className="size-[18px] shrink-0" aria-hidden="true" />
      {link.label}
    </a>
  );
}

function TheSystemCard() {
  return (
    <section aria-labelledby="the-system" className="frame-violet hud">
      <div className="hud bg-card">
        {/* A "tela de título": o mascote aponta para quem chega, o app ao lado. */}
        <div className="relative h-40 overflow-hidden bg-violet">
          <img
            src={asset('img/mascote.webp')}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-3 left-1 h-[172px]"
            loading="eager"
          />
          <img
            src={asset('img/the-system-app.webp')}
            alt="Tela de progresso do The System, com a sequência de dias e o mapa de atividade"
            className="absolute right-5 top-4 w-[92px] rotate-[6deg] rounded-[14px] border-2 border-black/40"
            loading="eager"
          />
        </div>

        <div className="space-y-3 px-4 pb-4 pt-3">
          <div className="flex items-center gap-3">
            <img src={asset('img/the-system-mark.webp')} alt="" aria-hidden="true" className="size-7" />
            <h2 id="the-system" className="shrink-0 whitespace-nowrap font-display text-[30px] uppercase leading-none tracking-tight">
              {THE_SYSTEM.name}
            </h2>
            <p className="ml-auto min-w-0 text-right text-[13px] leading-snug text-mute">{THE_SYSTEM.pitch}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {THE_SYSTEM.links.map((link, i) => (
              <MenuButton key={link.label} link={link} tone={i === 0 ? 'violet' : 'dark'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdventoCard() {
  const [support, gdd] = ADVENTO.links;
  return (
    <section aria-labelledby="advento" className="frame-gold hud">
      <div className="hud bg-card">
        <div className="relative h-40 overflow-hidden">
          <img
            src={asset('img/advento-gameplay.webp')}
            alt="Cena do Advento: o Discípulo em Primórdia, diante da Árvore da Fé"
            // Ampliada e subida para cortar o letreiro "Primórdia · Vila do Despertar" que já vem na captura.
            className="absolute -top-10 left-1/2 w-[115%] max-w-none -translate-x-1/2"
            loading="eager"
          />
          {/* Véu escuro só sob a legenda da foto. taste-skill-ignore */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent" />
          <h2 id="advento" className="absolute -top-2 left-1/2 w-48 -translate-x-1/2">
            <img src={asset('img/advento-logo.webp')} alt={ADVENTO.name} className="w-full" />
          </h2>
          <p className="absolute inset-x-0 bottom-2 text-center text-[13px] font-medium text-ink">{ADVENTO.pitch}</p>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-2 px-4 pb-4 pt-3">
          <MenuButton link={support} tone="gold" />
          <MenuButton link={gdd} tone="dark" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ social }: { social: Social }) {
  const Icon = SOCIAL_ICON[social.icon];
  const external = social.href.startsWith('http');
  return (
    <a
      href={social.href}
      aria-label={social.label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="press flex size-12 cursor-pointer items-center justify-center bg-white/[0.06] text-mute hover:bg-white/[0.12] hover:text-ink"
    >
      <Icon className="size-5" aria-hidden="true" />
    </a>
  );
}

export default function App() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[420px] flex-col gap-3 px-4 pb-10 pt-4">
      <Reveal index={0}>
        {/* Cabeçalho de uma linha: a primeira dobra é dos dois cards. */}
        <header className="flex items-center gap-3">
          <img src={asset('img/losanjos-monogram.webp')} alt="" aria-hidden="true" className="w-11 shrink-0" />
          <h1 className="text-[15px] font-semibold leading-tight">
            {STUDIO.name}
            <span className="block text-[13px] font-normal text-mute">{STUDIO.owner}</span>
          </h1>
        </header>
      </Reveal>

      <Reveal index={1}>
        <TheSystemCard />
      </Reveal>

      <Reveal index={2}>
        <AdventoCard />
      </Reveal>

      <Reveal index={3}>
        <nav aria-label="Redes sociais e contato" className="flex justify-between pt-2">
          {SOCIALS.map((social) => (
            <SocialLink key={social.label} social={social} />
          ))}
        </nav>
      </Reveal>

      <footer className="pt-3 text-center text-[12px] text-mute/70">
        © {new Date().getFullYear()} {STUDIO.name}
      </footer>
    </main>
  );
}
