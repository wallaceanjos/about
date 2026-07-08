import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Palette, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Layers, 
  Globe, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  Coffee, 
  ArrowUpRight, 
  Menu, 
  X, 
  Check, 
  Briefcase, 
  Bookmark, 
  Send 
} from 'lucide-react';
import { Atmosphere, Project, Skill } from './types';
import { personalInfo, skills, projects, timeline, socialLinks } from './data';
import InteractiveEmblem from './components/InteractiveEmblem';

export default function App() {
  const [atmosphere, setAtmosphere] = useState<Atmosphere>('gold');
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'dev'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactType, setContactType] = useState('identity');
  const [contactMsg, setContactMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Filter projects based on activeTab
  const filteredProjects = projects.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  // Handle scroll detection for sticky navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick action: send email
  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Trigger user's mail app pre-populated
      const subject = encodeURIComponent(`Contato Portfólio: ${contactType.toUpperCase()}`);
      const body = encodeURIComponent(`Olá Wallace,\n\nMeu nome é ${contactName}.\n\n${contactMsg}\n\nAtenciosamente,\n${contactName}`);
      window.location.href = `mailto:wallace2anjos@gmail.com?subject=${subject}&body=${body}`;
      
      // Reset state
      setContactName('');
      setContactMsg('');
      setFormSubmitted(false);
    }, 1800);
  };

  // Render procedural mockups representing Wallace's exquisite craft (avoiding broken image links)
  const renderProjectMockup = (imageUrl: string, title: string, atmosphereStyle: Atmosphere) => {
    switch (imageUrl) {
      case 'brewery':
        return (
          <div className="w-full h-56 bg-gradient-to-b from-[#0F0F16] to-[#0A0A0F] flex flex-col justify-between p-6 border-b border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            {/* Background gótico decorativo */}
            <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-gold/10 flex items-center justify-center opacity-40">
              <div className="w-24 h-24 rounded-full border border-dashed border-brand-gold/20" />
            </div>
            
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[10px] tracking-widest text-brand-gold">EST. 2026</span>
              <span className="font-mono text-[10px] bg-brand-gold/10 text-brand-gold px-2.5 py-0.5 rounded-full border border-brand-gold/20">PREMIUM</span>
            </div>
            
            <div className="text-center z-10 my-4">
              <h4 className="font-gothic text-4xl text-brand-gold tracking-wider select-none">L.A</h4>
              <p className="font-mono text-[9px] tracking-widest text-white/40 uppercase mt-1">Brewery & Co.</p>
            </div>
            
            <div className="flex justify-between items-end border-t border-brand-gold/20 pt-2 z-10">
              <span className="font-mono text-[8px] text-white/50">LAGER & STOUT</span>
              <span className="font-mono text-[8px] text-brand-gold font-bold">100% ARTESANAL</span>
            </div>
          </div>
        );
      case 'lawfirm':
        return (
          <div className="w-full h-56 bg-[#12121E] flex flex-col justify-between p-6 border-b border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="font-mono text-[9px] text-white/40 ml-2">prestigelaw.com</span>
            </div>
            <div className="my-auto py-2">
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center font-gothic text-brand-gold text-lg">P</div>
                <div>
                  <h5 className="font-sans font-bold text-xs text-white">Prestige & Associates</h5>
                  <p className="text-[9px] text-white/50">Advocacia de Alta Performance</p>
                </div>
              </div>
              <div className="space-y-1 pl-11">
                <div className="h-1.5 w-full bg-white/10 rounded" />
                <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                <div className="h-1.5 w-4/6 bg-white/10 rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center bg-brand-navy/60 p-2 rounded border border-white/5">
              <span className="font-mono text-[8px] text-brand-gold flex items-center gap-1">
                <Globe className="w-2.5 h-2.5" /> WordPress Custom Blocks
              </span>
              <span className="font-mono text-[8px] text-emerald-400">98% PageSpeed</span>
            </div>
          </div>
        );
      case 'neontwilight':
        return (
          <div className="w-full h-56 bg-gradient-to-b from-[#0A071E] via-[#140C2A] to-[#040209] flex flex-col justify-between p-6 border-b border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            {/* Violet atmosphere elements imitating image 2 */}
            <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-fuchsia-600/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-4 w-12 h-20 bg-gradient-to-t from-orange-500/10 to-transparent blur-xl" />
            
            {/* Star effects */}
            <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full opacity-60" />
            <div className="absolute top-16 right-20 w-0.5 h-0.5 bg-white rounded-full opacity-40" />
            <div className="absolute top-24 left-24 w-1 h-1 bg-white rounded-full opacity-80" />
            <div className="absolute top-4 left-32 w-0.5 h-0.5 bg-white rounded-full opacity-30" />
            
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[9px] tracking-widest text-brand-violet">CREPÚSCULO VIOLETA</span>
              <span className="font-mono text-[9px] text-white/30">Nº 04</span>
            </div>
            
            {/* Modern vertical typography overlay */}
            <div className="z-10 text-right">
              <h5 className="font-gothic text-3xl text-transparent bg-clip-text bg-gradient-to-b from-white via-brand-violet to-brand-violet/50 leading-none">Los Anjos</h5>
              <p className="font-mono text-[8px] tracking-wider text-white/40 uppercase mt-1">Exposição de Direção de Arte</p>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-2 z-10">
              <span className="font-mono text-[8px] text-white/50">CRIATIVIDADE ANALÓGICA</span>
              <span className="font-mono text-[8px] text-brand-violet-hover">FINE ART</span>
            </div>
          </div>
        );
      case 'auraskincare':
        return (
          <div className="w-full h-56 bg-[#0E0E14] flex flex-col justify-between p-6 border-b border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#14141F] to-[#09090F] opacity-50" />
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[8px] text-white/40 tracking-widest uppercase">Skin Science</span>
              <span className="h-2 w-2 rounded-full bg-brand-violet animate-ping" />
            </div>
            <div className="flex items-center gap-6 z-10 my-auto">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm relative">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand-violet to-brand-gold opacity-80" />
                </div>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[8px] text-brand-violet font-semibold">AURA COSMETICS</span>
                <h5 className="font-sans font-bold text-sm text-white">Pure Hydration Cream</h5>
                <p className="text-[9px] text-white/50 leading-relaxed">Fórmula vegana de absorção rápida.</p>
              </div>
            </div>
            <div className="flex gap-2 z-10">
              <span className="font-mono text-[8px] bg-white/5 px-2 py-0.5 rounded text-white/70">NEXT.JS</span>
              <span className="font-mono text-[8px] bg-white/5 px-2 py-0.5 rounded text-white/70">MOTION</span>
              <span className="font-mono text-[8px] bg-white/5 px-2 py-0.5 rounded text-white/70">TAILWIND</span>
            </div>
          </div>
        );
      case 'kurobook':
        return (
          <div className="w-full h-56 bg-[#16161C] flex flex-col justify-between p-6 border-b border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-brand-gold/5 rounded-full blur-2xl" />
            <div className="flex justify-between items-start border-b border-white/10 pb-2">
              <span className="font-mono text-[8px] text-brand-gold font-bold">KURO PROJEKT</span>
              <span className="font-mono text-[8px] text-white/30">BOOK SPECIMEN</span>
            </div>
            <div className="flex gap-4 items-center my-auto">
              <span className="font-gothic text-6xl text-brand-gold">K</span>
              <div className="space-y-1 border-l border-white/10 pl-3">
                <h6 className="font-sans font-semibold text-[10px] text-white uppercase tracking-wider">Gothic Revival</h6>
                <p className="text-[9px] text-white/50 leading-snug">Estudo sobre a tipografia de fratura clássica em design editorial contemporâneo.</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[8px] font-mono text-white/40">
              <span>GERMANY / BRAZIL</span>
              <span>© 2026 LOS ANJOS</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-56 bg-gradient-to-br from-[#12121E] to-[#0A0A10] flex flex-col justify-between p-6 border-b border-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="flex justify-between items-start z-10">
              <Cpu className={`w-5 h-5 ${atmosphereStyle === 'gold' ? 'text-brand-gold' : 'text-brand-violet'}`} />
              <span className="font-mono text-[8px] bg-white/5 px-2 py-0.5 rounded text-white/40">PORTFOLIO</span>
            </div>
            <div className="my-auto z-10 pl-2">
              <h5 className="font-sans font-bold text-sm text-white tracking-wide">{title}</h5>
              <div className="h-1 w-12 bg-gradient-to-r from-brand-violet to-brand-gold mt-1.5 rounded" />
            </div>
            <div className="flex gap-1.5 flex-wrap z-10">
              <span className="font-mono text-[8px] text-white/60">REACT 19</span>
              <span className="font-mono text-[8px] text-white/40">•</span>
              <span className="font-mono text-[8px] text-white/60">TAILWIND</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white font-sans bg-grain relative selection:bg-brand-violet/40 selection:text-white transition-colors duration-700">
      
      {/* Background Dynamic Mood Ambiance Bubbles */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div 
          className={`absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full blur-[160px] transition-all duration-[1500s] ease-in-out opacity-25 ${
            atmosphere === 'gold' 
              ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent' 
              : 'bg-gradient-to-r from-brand-violet/30 via-fuchsia-500/20 to-transparent animate-pulse'
          }`} 
        />
        <div 
          className={`absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[140px] transition-all duration-[1500s] ease-in-out opacity-20 ${
            atmosphere === 'gold' 
              ? 'bg-gradient-to-l from-amber-400/10 via-amber-600/5 to-transparent' 
              : 'bg-gradient-to-l from-violet-600/30 via-pink-500/10 to-transparent'
          }`} 
        />
      </div>

      {/* STICKY HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-brand-navy/80 backdrop-blur-lg border-white/5 py-4 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-4 group">
            <div className={`w-9 h-9 border-2 rotate-45 flex items-center justify-center transition-all duration-700 ${
              atmosphere === 'gold'
                ? 'bg-brand-navy border-brand-gold text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy shadow-lg shadow-amber-400/5'
                : 'bg-brand-navy border-white text-white group-hover:bg-white group-hover:text-brand-navy'
            }`}>
              <span className="-rotate-45 font-gothic text-sm tracking-wider block mt-[-2px]">LA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-gothic text-base tracking-wider text-white select-none leading-none">
                Los Anjos
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/40 font-mono mt-0.5 hidden sm:block">
                Front-end & Brand
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">Sobre</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors">Habilidades</a>
            <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfólio</a>
            <a href="#experience" className="text-white/70 hover:text-white transition-colors">Carreira</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contato</a>
          </nav>

          {/* Controls: Atmosphere Toggle + Contact CTA */}
          <div className="flex items-center gap-4">
            {/* Elegant Atmosphere Switcher */}
            <div className="bg-[#12121E]/80 border border-white/10 rounded-full p-1 flex items-center shadow-inner relative">
              <button 
                onClick={() => setAtmosphere('gold')}
                className={`relative px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all duration-500 z-10 flex items-center gap-1.5 ${
                  atmosphere === 'gold' ? 'text-brand-navy font-semibold' : 'text-white/60 hover:text-white'
                }`}
                title="Atmosfera Ouro Alquimia"
                id="btn-mood-gold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="hidden lg:inline">Ouro</span>
              </button>
              <button 
                onClick={() => setAtmosphere('violet')}
                className={`relative px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all duration-500 z-10 flex items-center gap-1.5 ${
                  atmosphere === 'violet' ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                }`}
                title="Atmosfera Crepúsculo Violeta"
                id="btn-mood-violet"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="hidden lg:inline">Violeta</span>
              </button>

              {/* Slider overlay */}
              <div 
                className={`absolute top-1 bottom-1 rounded-full transition-all duration-500 shadow-sm ${
                  atmosphere === 'gold' 
                    ? 'left-1 w-[40px] lg:w-[65px] bg-brand-gold' 
                    : 'left-[44px] lg:left-[69px] w-[50px] lg:w-[75px] bg-brand-violet'
                }`} 
              />
            </div>

            <a 
              href="#contact" 
              className={`hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                atmosphere === 'gold'
                  ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy shadow-sm hover:shadow-amber-400/10'
                  : 'border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-white shadow-sm hover:shadow-violet-500/20'
              }`}
              id="header-cta"
            >
              Falar Comigo
            </a>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white p-1"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] bg-brand-navy/95 backdrop-blur-xl border-b border-white/5 py-6 px-6 z-40 md:hidden flex flex-col gap-5 text-center shadow-2xl"
          >
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/85 hover:text-white font-medium text-base py-1 border-b border-white/5"
            >
              Sobre
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/85 hover:text-white font-medium text-base py-1 border-b border-white/5"
            >
              Habilidades
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/85 hover:text-white font-medium text-base py-1 border-b border-white/5"
            >
              Portfólio
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/85 hover:text-white font-medium text-base py-1 border-b border-white/5"
            >
              Carreira
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/85 hover:text-white font-medium text-base py-1"
            >
              Contato
            </a>
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-3 rounded-xl font-mono uppercase tracking-wider text-xs border text-center transition-all ${
                atmosphere === 'gold'
                  ? 'border-brand-gold text-brand-gold bg-brand-gold/5'
                  : 'border-brand-violet text-brand-violet bg-brand-violet/5'
              }`}
            >
              Orçamento de Projeto
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section 
        className="pt-32 pb-20 md:pt-44 md:pb-28 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10"
        id="hero"
      >
        {/* Left Side: Copywriter & Intro */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Accent Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`inline-block w-2 h-2 rounded-full ${
              atmosphere === 'gold' ? 'bg-brand-gold animate-pulse' : 'bg-brand-violet animate-pulse'
            }`} />
            <span className={`font-mono text-xs uppercase tracking-widest ${
              atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
            }`}>
              {personalInfo.title}
            </span>
          </div>

          {/* Master Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 italic text-white">
            Conectando a força do <br />
            <span className={`not-italic font-semibold text-transparent bg-clip-text bg-gradient-to-r transition-all duration-700 ${
              atmosphere === 'gold' 
                ? 'from-amber-400 via-yellow-400 to-amber-200 animate-pulse' 
                : 'from-brand-violet via-pink-400 to-violet-300'
            }`}>
              Design de Identidade
            </span> <br />
            <span className="not-italic font-medium text-white/90">com o Front-End de elite.</span>
          </h1>

          {/* Description text */}
          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            {personalInfo.bio}
          </p>

          {/* Call To Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#portfolio" 
              className={`px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md ${
                atmosphere === 'gold'
                  ? 'bg-brand-gold text-brand-navy hover:bg-amber-300 shadow-amber-400/15'
                  : 'bg-brand-violet text-white hover:bg-brand-violet-hover shadow-violet-500/20'
              }`}
              id="hero-primary-cta"
            >
              Explorar Portfólio
            </a>
            
            <a 
              href="#about" 
              className="px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2"
              id="hero-secondary-cta"
            >
              Sobre Mim <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Icons floating beautifully below */}
          <div className="flex items-center gap-6 mt-12 pt-6 border-t border-white/5 w-full">
            <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">Conectar:</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => {
                const IconComponent = {
                  Github: Github,
                  Linkedin: Linkedin,
                  Palette: Palette,
                  Instagram: Instagram,
                  Mail: Mail
                }[link.icon] || Mail;

                return (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full text-white/50 hover:text-white bg-white/5 border border-white/5 hover:border-white/10 hover:scale-105 transition-all"
                    title={link.platform}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Giant Interactive Emblem Mockup */}
        <div className="md:col-span-5 flex items-center justify-center py-6 md:py-0 relative">
          {/* Subtle rotating decorative background circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full border border-dashed animate-[spin_40s_linear_infinite] transition-colors duration-700 opacity-20 ${
              atmosphere === 'gold' ? 'border-brand-gold' : 'border-brand-violet'
            }`} />
            <div className={`absolute w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full border border-double animate-[spin_60s_linear_infinite_reverse] transition-colors duration-700 opacity-10 ${
              atmosphere === 'gold' ? 'border-brand-gold' : 'border-brand-violet'
            }`} />
          </div>

          <InteractiveEmblem atmosphere={atmosphere} size="lg" />
        </div>
      </section>

      {/* QUICK STATS SECTION (Bento Style) */}
      <section className="py-12 bg-[#0C0C14] border-y border-white/5 relative z-10" id="stats">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <div className={`p-3 rounded-2xl transition-colors duration-700 ${
              atmosphere === 'gold' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-violet/10 text-brand-violet'
            }`}>
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="font-gothic text-3xl text-white">+{personalInfo.experienceYears} Anos</p>
              <p className="text-xs text-white/50 font-mono tracking-wide uppercase mt-0.5">Experiência Profissional</p>
            </div>
          </div>

          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <div className={`p-3 rounded-2xl transition-colors duration-700 ${
              atmosphere === 'gold' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-violet/10 text-brand-violet'
            }`}>
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="font-gothic text-3xl text-white">+{personalInfo.happyClients}</p>
              <p className="text-xs text-white/50 font-mono tracking-wide uppercase mt-0.5">Marcas Satisfeitas</p>
            </div>
          </div>

          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <div className={`p-3 rounded-2xl transition-colors duration-700 ${
              atmosphere === 'gold' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-violet/10 text-brand-violet'
            }`}>
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="font-gothic text-3xl text-white">+{personalInfo.projectsCount}</p>
              <p className="text-xs text-white/50 font-mono tracking-wide uppercase mt-0.5">Cases Entregues</p>
            </div>
          </div>

          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <div className={`p-3 rounded-2xl transition-colors duration-700 ${
              atmosphere === 'gold' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-violet/10 text-brand-violet'
            }`}>
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <p className="font-gothic text-3xl text-white">1.2k Lts</p>
              <p className="text-xs text-white/50 font-mono tracking-wide uppercase mt-0.5">Café Expresso Extraído</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 relative z-10" id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Artistic Profile Box (Inspired by Image 1 & 2 combination) */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[400px] rounded-3xl overflow-hidden glass-panel p-2 flex items-center justify-center">
              {/* Glowing backdrops */}
              <div className={`absolute inset-4 rounded-2xl transition-colors duration-700 ${
                atmosphere === 'gold' ? 'bg-brand-gold/10' : 'bg-brand-violet/10'
              }`} />
              
              <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

              {/* Graphic Composition representing Wallace's two identities */}
              <div className="relative w-full h-full rounded-2xl bg-[#09090F] overflow-hidden flex flex-col justify-between p-6 border border-white/5 shadow-2xl">
                {/* Visual Identity Watermark */}
                <span className="font-gothic text-[8rem] text-white/[0.02] absolute -top-10 -left-6 leading-none select-none">LA</span>
                
                <div className="flex justify-between items-start">
                  <div className={`w-3.5 h-3.5 rounded-full ${atmosphere === 'gold' ? 'bg-brand-gold' : 'bg-brand-violet'}`} />
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Estúdio Criativo</span>
                </div>

                <div className="my-auto text-center space-y-4">
                  {/* Miniature emblem */}
                  <div className="mx-auto flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border font-gothic text-xl ${
                      atmosphere === 'gold' ? 'bg-brand-gold text-brand-navy border-amber-300' : 'bg-brand-navy text-brand-violet border-brand-violet/40'
                    }`}>
                      LA
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white tracking-wide">Wallace Anjos</h3>
                    <p className={`font-mono text-[10px] uppercase tracking-wider ${
                      atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
                    }`}>Los Anjos Founder</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-3">
                  <span className="font-mono text-[9px] text-white/40 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" /> {personalInfo.location}
                  </span>
                  <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> DISPONÍVEL
                  </span>
                </div>
              </div>
            </div>
            
            {/* Absolute decorative badge floating off-corner */}
            <div className={`absolute -bottom-4 -right-4 bg-brand-navy border rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 transition-colors duration-700 ${
              atmosphere === 'gold' ? 'border-brand-gold/30' : 'border-brand-violet/30'
            }`}>
              <Sparkles className={`w-5 h-5 ${atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'}`} />
              <div>
                <p className="font-mono text-[8px] text-white/50 uppercase tracking-wider">Aesthetic & Performance</p>
                <p className="font-sans font-bold text-xs text-white">Pixel Perfect Coding</p>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy text */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <span className={`font-mono text-xs uppercase tracking-widest mb-2 ${
              atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
            }`}>
              Filosofia & Conceito
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A elegância clássica unida ao código moderno.
            </h2>
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
              <p>
                Meu trabalho como profissional híbrido é quebrar o paradigma de que designers não sabem codificar e programadores não possuem refinamento visual. Cada pixel de identidade visual gótica ou corporativa que eu desenho no Illustrator é traduzido com exatidão matemática para componentes React altamente performáticos e estilizados via Tailwind CSS.
              </p>
              <p>
                A marca <strong className="text-white">Los Anjos</strong> representa essa dualidade indissociável. Eu entendo as limitações e potencialidades do navegador, o que me permite criar animações de tela incrivelmente fluidas com <span className="text-white">Motion</span> e construir interfaces responsivas que mantêm o rigor editorial de um livro impresso.
              </p>
              <p>
                Seja desenvolvendo um e-commerce interativo completo, codificando uma Landing Page para alta conversão, ou implementando portais robustos sob o ecossistema WordPress CMS com blocos customizados integrados, eu foco na velocidade de carregamento excepcional (Core Web Vitals) e numa estética memorável.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8 w-full border-t border-white/5 pt-6">
              <div className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${atmosphere === 'gold' ? 'bg-brand-gold' : 'bg-brand-violet'}`} />
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white">Estética de Elite</h4>
                  <p className="text-xs text-white/50 mt-1">Identidades que marcam época e se destacam da mesmice genérica digital.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${atmosphere === 'gold' ? 'bg-brand-gold' : 'bg-brand-violet'}`} />
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white">Código Ultra Rápido</h4>
                  <p className="text-xs text-white/50 mt-1">SEO estruturado, acessibilidade sem concessões e carregamento instantâneo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH SKILLS MATRIX (Interactive bars) */}
      <section className="py-20 bg-[#0C0C14] border-y border-white/5 relative z-10" id="skills">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className={`font-mono text-xs uppercase tracking-widest ${
            atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
          }`}>
            Domínio Técnico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-12">
            Habilidades & Frameworks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category: Visual Identity & Design */}
            <div className="glass-panel rounded-3xl p-8 border border-white/5 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/5 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-gold">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Design & Identidade</h3>
                  <p className="font-mono text-[9px] text-white/40 tracking-wider uppercase">Sistemas de Branding</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.filter(s => s.category === 'design').map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="font-mono text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-brand-gold rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Front-End Code */}
            <div className="glass-panel rounded-3xl p-8 border border-white/5 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-violet/5 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2 rounded-xl bg-brand-violet/10 text-brand-violet">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Desenvolvimento</h3>
                  <p className="font-mono text-[9px] text-white/40 tracking-wider uppercase">Tecnologia Front-End</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.filter(s => s.category === 'dev').map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="font-mono text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-brand-violet rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: CMS & Integration */}
            <div className="glass-panel rounded-3xl p-8 border border-white/5 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Plataformas & CMS</h3>
                  <p className="font-mono text-[9px] text-white/40 tracking-wider uppercase">Sistemas de Gestão</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.filter(s => s.category === 'cms').map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="font-mono text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-emerald-400 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 relative z-10" id="portfolio">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className={`font-mono text-xs uppercase tracking-widest ${
            atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
          }`}>
            Trabalhos Selecionados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-4">
            Portfólio & Cases de Sucesso
          </h2>
          <p className="text-white/60 text-sm">
            Filtre os projetos abaixo para visualizar marcas concebidas de forma editorial ou websites robustos desenvolvidos em Next.js e WordPress.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center items-center mb-12">
          <div className="bg-[#12121E]/80 border border-white/5 rounded-full p-1.5 flex gap-1 shadow-lg max-w-md w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-white text-brand-navy font-bold shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'design' 
                  ? 'bg-white text-brand-navy font-bold shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Identidade & Design
            </button>
            <button
              onClick={() => setActiveTab('dev')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'dev' 
                  ? 'bg-white text-brand-navy font-bold shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Desenvolvimento & CMS
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer bg-[#12121E] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all flex flex-col justify-between shadow-lg"
                onClick={() => setSelectedProject(project)}
                id={`project-card-${project.id}`}
              >
                {/* Visual Representation (Mockup) */}
                <div className="overflow-hidden">
                  {renderProjectMockup(project.imageUrl, project.title, atmosphere)}
                </div>

                {/* Info Text Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className={`font-mono text-[9px] uppercase tracking-wider ${
                        atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
                      }`}>
                        {project.subtype}
                      </span>
                      {project.featured && (
                        <span className="font-mono text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/50 uppercase">DESTAQUE</span>
                      )}
                    </div>
                    
                    <h3 className="font-sans font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/50 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap mt-5 pt-4 border-t border-white/5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] bg-white/5 border border-white/5 text-white/60 px-2.5 py-1 rounded-md font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[9px] text-white/30 font-mono">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* DETAILED PROJECT MODAL (Framer Motion Lightbox) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-brand-navy/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#12121E] border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] no-scrollbar"
              id="project-detail-modal"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-brand-navy border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all shadow-md"
                id="modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Mockup Display */}
              <div className="md:w-1/2 overflow-hidden border-r border-white/5 relative min-h-[200px] md:min-h-auto">
                <div className="h-full flex items-center justify-center bg-brand-navy relative">
                  {renderProjectMockup(selectedProject.imageUrl, selectedProject.title, atmosphere)}
                </div>
              </div>

              {/* Detailed Context Area */}
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none no-scrollbar">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${atmosphere === 'gold' ? 'bg-brand-gold' : 'bg-brand-violet'}`} />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/50">{selectedProject.subtype}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-4">
                    {selectedProject.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5">Sobre o Case</h4>
                      <p className="text-white/75 text-xs leading-relaxed">
                        {selectedProject.details}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-2">Pilha de Tecnologias</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech, i) => (
                          <span key={i} className="text-[10px] bg-brand-navy border border-white/5 text-white/70 px-2.5 py-1 rounded-md font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8 pt-6 border-t border-white/5">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wide transition-all ${
                        atmosphere === 'gold'
                          ? 'bg-brand-gold text-brand-navy hover:bg-amber-300'
                          : 'bg-brand-violet text-white hover:bg-brand-violet-hover'
                      }`}
                    >
                      <Globe className="w-3.5 h-3.5" /> Visitar Website
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wide bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5" /> Ver Código
                    </a>
                  )}
                  {selectedProject.behanceUrl && (
                    <a 
                      href={selectedProject.behanceUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wide transition-all ${
                        atmosphere === 'gold'
                          ? 'bg-brand-gold text-brand-navy hover:bg-amber-300'
                          : 'bg-brand-violet text-white hover:bg-brand-violet-hover'
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5" /> Ver Behance
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* EXPERIENCE / TIMELINE */}
      <section className="py-20 bg-[#0C0C14] border-y border-white/5 relative z-10" id="experience">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className={`font-mono text-xs uppercase tracking-widest ${
              atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
            }`}>
              Carreira Profissional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Cronologia & Experiências
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 border-l border-white/10 space-y-12">
            {/* Horizontal progress dots / vertical progress rule indicator */}
            {timeline.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute left-[-31px] top-1.5 w-4 h-4 rounded-full border-2 bg-brand-navy transition-all duration-500 group-hover:scale-125 ${
                  atmosphere === 'gold' 
                    ? 'border-brand-gold group-hover:bg-brand-gold' 
                    : 'border-brand-violet group-hover:bg-brand-violet'
                }`} />

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className={`font-mono text-xs tracking-wider uppercase font-semibold sm:w-32 pt-1 transition-colors duration-500 ${
                    atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
                  }`}>
                    {event.year}
                  </span>
                  <div className="flex-1 space-y-2 text-left">
                    <h3 className="font-sans font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                      {event.title}
                    </h3>
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      {event.company}
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-2xl">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / MESSAGE BUILDER */}
      <section className="py-20 max-w-7xl mx-auto px-6 relative z-10" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call to Action cards */}
          <div className="md:col-span-5 text-left flex flex-col justify-between h-full space-y-8">
            <div>
              <span className={`font-mono text-xs uppercase tracking-widest mb-2 block ${
                atmosphere === 'gold' ? 'text-brand-gold' : 'text-brand-violet'
              }`}>
                Pronto para Construir?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Vamos iniciar um projeto juntos.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Você precisa de uma identidade de marca marcante ou de uma aplicação front-end de alta performance? Entre em contato e preencha o formulário para compilar sua proposta automaticamente no seu e-mail.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:wallace2anjos@gmail.com" 
                className="flex items-center gap-4 bg-[#12121E] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-all group"
              >
                <div className={`p-3 rounded-xl transition-colors duration-700 ${
                  atmosphere === 'gold' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-violet/10 text-brand-violet'
                }`}>
                  <Mail className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Enviar e-mail direto</p>
                  <p className="font-sans font-bold text-sm text-white group-hover:text-white/80 transition-all">{personalInfo.email}</p>
                </div>
              </a>

              <div 
                className="flex items-center gap-4 bg-[#12121E] border border-white/5 rounded-2xl p-4"
              >
                <div className={`p-3 rounded-xl transition-colors duration-700 ${
                  atmosphere === 'gold' ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-violet/10 text-brand-violet'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Localização</p>
                  <p className="font-sans font-bold text-sm text-white">{personalInfo.location} (Atendimento Global Remoto)</p>
                </div>
              </div>
            </div>

            <div className="text-white/30 text-[10px] font-mono leading-relaxed">
              * Wallace responde em até 24 horas úteis.<br />
              Propostas bem descritas recebem prioridade de cronograma.
            </div>
          </div>

          {/* Right Column: Custom Interactive Form Composer */}
          <div className="md:col-span-7 w-full">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
              <h3 className="font-sans font-bold text-lg text-white mb-6">Compositor de Propostas</h3>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Custom Name */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-white/50 uppercase tracking-widest">Qual o seu nome ou empresa?</label>
                  <input 
                    type="text" 
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ex: Wallace Anjos" 
                    className="w-full bg-[#0A0A10]/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-violet transition-colors placeholder:text-white/20"
                  />
                </div>

                {/* Scope selector */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-white/50 uppercase tracking-widest">Qual escopo de projeto?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setContactType('identity')}
                      className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                        contactType === 'identity'
                          ? atmosphere === 'gold'
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                            : 'border-brand-violet bg-brand-violet/10 text-brand-violet'
                          : 'border-white/5 bg-[#0A0A10]/40 text-white/60 hover:text-white'
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5" /> Identidade Visual
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType('frontend')}
                      className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                        contactType === 'frontend'
                          ? atmosphere === 'gold'
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                            : 'border-brand-violet bg-brand-violet/10 text-brand-violet'
                          : 'border-white/5 bg-[#0A0A10]/40 text-white/60 hover:text-white'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" /> Front-End React
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType('wordpress')}
                      className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                        contactType === 'wordpress'
                          ? atmosphere === 'gold'
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                            : 'border-brand-violet bg-brand-violet/10 text-brand-violet'
                          : 'border-white/5 bg-[#0A0A10]/40 text-white/60 hover:text-white'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" /> WordPress CMS
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType('consultancy')}
                      className={`py-3 px-4 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                        contactType === 'consultancy'
                          ? atmosphere === 'gold'
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                            : 'border-brand-violet bg-brand-violet/10 text-brand-violet'
                          : 'border-white/5 bg-[#0A0A10]/40 text-white/60 hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Consultoria
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-white/50 uppercase tracking-widest">Descreva a ideia ou escopo do projeto</label>
                  <textarea 
                    required
                    rows={4}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="Ex: Preciso de uma logo gótica elegante para minha marca e uma landing page no React com animações premium..."
                    className="w-full bg-[#0A0A10]/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-violet transition-colors placeholder:text-white/20 resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all relative overflow-hidden ${
                    atmosphere === 'gold'
                      ? 'bg-brand-gold text-brand-navy hover:bg-amber-300'
                      : 'bg-brand-violet text-white hover:bg-brand-violet-hover'
                  }`}
                  id="btn-submit-form"
                >
                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.span 
                        key="submitting" 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Compilando Email...
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="ready"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" /> Gerar Mensagem de Proposta
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-navy border-t border-white/5 py-12 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-gothic text-xs transition-all duration-700 ${
              atmosphere === 'gold'
                ? 'bg-brand-gold text-brand-navy border-amber-300'
                : 'bg-brand-navy text-brand-violet border-brand-violet/40'
            }`}>
              LA
            </div>
            <span className="font-gothic text-base tracking-wider text-white">
              Los Anjos Studio
            </span>
          </div>

          <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
            © 2026 LOS ANJOS • CONSTRUIDO COM REACT & TAILWIND CSS
          </p>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="#hero" className="text-white/50 hover:text-white transition-colors">Voltar ao topo</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
