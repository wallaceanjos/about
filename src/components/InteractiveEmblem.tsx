import { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Atmosphere } from '../types';

interface InteractiveEmblemProps {
  atmosphere: Atmosphere;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function InteractiveEmblem({ atmosphere, size = 'md' }: InteractiveEmblemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for parallax 3D effect on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  // Size mapping
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-32 h-32 text-5xl',
    lg: 'w-48 h-48 text-7xl md:w-56 md:h-56 md:text-8xl',
    xl: 'w-64 h-64 text-[9rem] md:w-80 md:h-80 md:text-[11rem]'
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center cursor-pointer select-none perspective-1000"
      style={{ perspective: '1000px' }}
      id={`emblem-${size}`}
    >
      {/* Background Glow / Aura */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 opacity-60 ${
          atmosphere === 'gold' 
            ? 'bg-amber-400/30' 
            : 'bg-violet-600/40'
        }`}
        style={{
          x: glowX,
          y: glowY,
          scale: hovered ? 1.2 : 0.95
        }}
      />

      {/* Main Interactive Circle */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          scale: hovered ? 1.05 : 1,
          boxShadow: atmosphere === 'gold'
            ? hovered ? '0 20px 40px rgba(250,204,21,0.25)' : '0 10px 20px rgba(0,0,0,0.4)'
            : hovered ? '0 20px 40px rgba(139,92,246,0.35)' : '0 10px 20px rgba(0,0,0,0.4)'
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center font-gothic transition-colors duration-700 border-2 overflow-hidden ${
          atmosphere === 'gold'
            ? 'bg-brand-gold text-brand-navy border-amber-300'
            : 'bg-brand-navy text-brand-violet border-brand-violet/60'
        }`}
      >
        {/* Decorative Inner Spinning Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className={`absolute inset-1.5 rounded-full border border-dashed transition-colors duration-700 ${
            atmosphere === 'gold' 
              ? 'border-brand-navy/20' 
              : 'border-brand-violet/30'
          }`}
        />

        {/* Ambient Overlay Layer for Violet/Neon style (inspired by image 2) */}
        {atmosphere === 'violet' && (
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/80 to-transparent opacity-40 mix-blend-overlay pointer-events-none" />
        )}

        {/* The Initials (L.A - Los Anjos) */}
        <motion.div
          style={{ transform: 'translateZ(40px)' }}
          className="relative flex items-center justify-center tracking-tight select-none"
        >
          <span>L</span>
          <span className={`mx-1 text-[0.4em] select-none ${
            atmosphere === 'gold' ? 'text-brand-navy/60' : 'text-brand-violet/60'
          }`}>•</span>
          <span>A</span>
        </motion.div>

        {/* Gloss Shimmer Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%]"
          animate={{
            translateX: hovered ? ['100%', '-100%'] : '100%'
          }}
          transition={{
            repeat: hovered ? Infinity : 0,
            duration: 1.5,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  );
}
