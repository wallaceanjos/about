import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Apple,
  ArrowUpRight,
  BookOpen,
  Clapperboard,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Play,
} from 'lucide-react';
import { ADVENTO, SOCIALS, STUDIO, THE_SYSTEM, type Social, type StoreLink } from './links';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const STORE_ICON = { play: Play, apple: Apple, web: Globe, devlog: Clapperboard } as const;
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

function Label({ children }: { children: ReactNode }) {
  return <p className="font-label text-[13px] font-semibold uppercase tracking-[0.22em] text-mute">{children}</p>;
}

function StatusDot({ live }: { live: boolean }) {
  return (
    <span className="relative inline-flex size-2.5" aria-hidden="true">
      {live ? <span className="absolute inset-0 animate-ping rounded-full bg-violet-soft opacity-60" /> : null}
      <span className={`relative inline-flex size-2.5 rounded-full ${live ? 'bg-violet-soft' : 'bg-gold'}`} />
    </span>
  );
}

function StoreButton({ link, primary }: { link: StoreLink; primary: boolean }) {
  const Icon = STORE_ICON[link.icon];
  const base = 'hud flex min-h-14 w-full items-center gap-3 px-5 font-sans text-[15px] font-semibold transition-colors duration-200';

  if (!link.href) {
    return (
      <div className={`${base} cursor-not-allowed bg-white/[0.04] text-mute`} aria-disabled="true">
        <Icon className="size-5 shrink-0" aria-hidden="true" />
        <span>{link.label}</span>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-wider">{link.note}</span>
      </div>
    );
  }

  const tone = primary
    ? 'bg-violet text-white hover:bg-violet-soft'
    : 'bg-white/[0.06] text-ink hover:bg-white/[0.12]';
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={`${base} ${tone} cursor-pointer`}>
      <Icon className="size-5 shrink-0" aria-hidden="true" />
      <span>{link.label}</span>
      <ArrowUpRight className="ml-auto size-4 shrink-0 opacity-70" aria-hidden="true" />
    </a>
  );
}

function TheSystemCard() {
  return (
    <section aria-labelledby="the-system" className="hud-frame hud shadow-[0_0_60px_rgba(122,59,255,0.35)]">
      <div className="hud relative overflow-hidden bg-card">
        <div className="relative h-72 overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(122,59,255,0.45),transparent_60%)]">
          <img
            src={asset('img/the-system-app.webp')}
            alt="Tela de progresso do The System, com sequência de dias e o mapa de atividade de cada pilar"
            className="absolute right-5 top-6 w-40 rotate-[6deg] rounded-[22px] border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            loading="eager"
          />
          <img
            src={asset('img/mascote.webp')}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-2 left-1 h-64 drop-shadow-[0_18px_30px_rgba(0,0,0,0.75)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
        </div>

        <div className="space-y-4 px-5 pb-6 pt-2">
          <div className="flex items-center gap-2">
            <StatusDot live />
            <Label>Projeto em destaque ♦ {THE_SYSTEM.status}</Label>
          </div>
          <div className="flex items-center gap-3">
            <img src={asset('img/the-system-mark.webp')} alt="" aria-hidden="true" className="size-11" />
            <h2 id="the-system" className="font-display text-5xl uppercase leading-none tracking-tight">
              {THE_SYSTEM.name}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-mute">{THE_SYSTEM.pitch}</p>
          <div className="space-y-2.5 pt-1">
            {THE_SYSTEM.links.map((link, i) => (
              <StoreButton key={link.label} link={link} primary={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdventoCard() {
  return (
    <section aria-labelledby="advento" className="hud-frame-muted hud">
      <a href={ADVENTO.href} target="_blank" rel="noopener noreferrer" className="hud group block cursor-pointer bg-card">
        <div className="relative h-40 overflow-hidden">
          <img
            src={asset('img/advento-gameplay.webp')}
            alt="Cena do Advento: a vila de Primórdia com o discípulo diante da grande árvore"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <img src={asset('img/advento-logo.webp')} alt="" aria-hidden="true" className="absolute bottom-2 left-1/2 w-52 -translate-x-1/2" />
        </div>
        <div className="space-y-3 px-5 pb-5 pt-3">
          <div className="flex items-center gap-2">
            <StatusDot live={false} />
            <Label>{ADVENTO.status} ♦ MMORPG</Label>
          </div>
          <h2 id="advento" className="sr-only">
            {ADVENTO.name}
          </h2>
          <p className="text-[15px] leading-relaxed text-mute">{ADVENTO.pitch}</p>
          <span className="inline-flex min-h-12 items-center gap-2 font-sans text-[15px] font-semibold text-gold">
            <BookOpen className="size-5" aria-hidden="true" />
            {ADVENTO.cta}
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      </a>
    </section>
  );
}

function SocialLink({ social }: { social: Social }) {
  const Icon = SOCIAL_ICON[social.icon];
  const external = social.href.startsWith('http');
  return (
    <a
      href={social.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex min-h-14 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-sm border border-line bg-white/[0.03] px-2 py-3 text-mute transition-colors duration-200 hover:border-violet hover:text-ink"
    >
      <Icon className="size-5" aria-hidden="true" />
      <span className="font-label text-[11px] uppercase tracking-[0.16em]">{social.label}</span>
    </a>
  );
}

export default function App() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[460px] flex-col gap-6 px-4 pb-10 pt-10">
      <Reveal index={0}>
        <header className="flex flex-col items-center gap-3 text-center">
          <img
            src={asset('img/losanjos-monogram.webp')}
            alt="Monograma L.A da Losanjos Studios"
            className="w-28 drop-shadow-[0_0_24px_rgba(122,59,255,0.55)]"
          />
          <h1 className="font-display text-4xl uppercase tracking-tight">
            <span className="highlight">{STUDIO.name}</span>
          </h1>
          <Label>{STUDIO.owner} ♦ Apps & jogos</Label>
          <p className="max-w-xs text-[15px] text-mute">{STUDIO.tagline}</p>
        </header>
      </Reveal>

      <Reveal index={1}>
        <TheSystemCard />
      </Reveal>

      <Reveal index={2}>
        <AdventoCard />
      </Reveal>

      <Reveal index={3}>
        <nav aria-label="Redes sociais e contato" className="space-y-3">
          <Label>Me encontre</Label>
          <div className="grid grid-cols-3 gap-2.5">
            {SOCIALS.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </nav>
      </Reveal>

      <footer className="pt-2 text-center font-mono text-[11px] uppercase tracking-wider text-mute/70">
        © {new Date().getFullYear()} {STUDIO.name}
      </footer>
    </main>
  );
}
