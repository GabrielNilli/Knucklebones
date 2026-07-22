// =================================
//  IMPORTS
// =================================
import { useMemo } from "react";

// =================================
//  SYMBOL DEFINITIONS (originali, stile runico/occulto)
// =================================
const RUNE_SYMBOLS: Record<string, string> = {
  eye: `<path d="M10 50 Q50 15 90 50 Q50 85 10 50 Z" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="50" r="10" fill="currentColor"/>`,
  cross: `<path d="M50 10 L50 90 M20 35 L80 35" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>`,
  cross2: `<path d="M50 5 L50 95 M15 50 L85 50" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M35 5 L65 5" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`,
  moon: `<path d="M65 15 A40 40 0 1 0 65 85 A32 32 0 1 1 65 15 Z" fill="currentColor"/>`,
  spiral: `<path d="M50 15 C72 15 85 32 82 50 C79 68 62 78 46 72 C33 67 28 52 38 44 C46 38 58 42 58 52" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`,
  pentagram: `<path d="M50 8 L61 40 L95 40 L67 60 L78 92 L50 72 L22 92 L33 60 L5 40 L39 40 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>`,
  triangleEye: `<path d="M50 10 L90 85 L10 85 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><circle cx="50" cy="60" r="8" fill="currentColor"/>`,
  diamondDot: `<path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><circle cx="50" cy="50" r="6" fill="currentColor"/>`,
  key: `<circle cx="35" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="6"/><path d="M48 43 L48 90 M48 60 L62 60 M48 75 L60 75" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>`,
  drop: `<path d="M50 10 C70 40 80 55 80 68 A30 30 0 1 1 20 68 C20 55 30 40 50 10 Z" fill="none" stroke="currentColor" stroke-width="5"/>`,
  arrowCross: `<path d="M50 5 L50 95 M50 5 L35 25 M50 5 L65 25 M20 55 L80 55" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`,
  star4: `<path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="currentColor"/>`,
  hex: `<path d="M50 8 L88 30 L88 70 L50 92 L12 70 L12 30 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><circle cx="50" cy="50" r="6" fill="currentColor"/>`,
  zigzag: `<path d="M20 15 L50 40 L20 60 L50 85" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
  ringCross: `<circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="5"/><path d="M50 12 L50 88 M12 50 L88 50" stroke="currentColor" stroke-width="5"/>`,
  flame: `<path d="M50 10 C70 35 75 50 60 65 C65 60 55 55 50 65 C45 55 35 60 40 65 C25 50 30 35 50 10 Z" fill="currentColor"/>`,
  crownThorn: `<path d="M15 60 L30 20 L45 55 L55 20 L70 55 L85 20 L85 60 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>`,
  bowtie: `<path d="M15 30 L50 50 L15 70 Z M85 30 L50 50 L85 70 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>`,
  dotsArc: `<path d="M15 60 Q50 15 85 60" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="15" cy="60" r="5" fill="currentColor"/><circle cx="50" cy="30" r="5" fill="currentColor"/><circle cx="85" cy="60" r="5" fill="currentColor"/>`,
};

const SYMBOL_KEYS = Object.keys(RUNE_SYMBOLS);
const ANIMATIONS = ["rune-float-a", "rune-float-b", "rune-float-c"];

// =================================
//  TYPES
// =================================
interface RuneInstance {
  id: number;
  symbol: string;
  size: number;
  top: number;
  left: number;
  animation: string;
  duration: number;
  delay: number;
  opacity: number;
}

interface RuneBackgroundProps {
  count?: number;
  className?: string;
}

// =================================
//  COMPONENT
// =================================
export default function RuneBackground({
  count = 34,
  className = "",
}: RuneBackgroundProps) {
  // =================================
  //  CONSTS
  // =================================
  const runes = useMemo<RuneInstance[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: SYMBOL_KEYS[Math.floor(Math.random() * SYMBOL_KEYS.length)],
      size: 24 + Math.random() * 46,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animation: ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)],
      duration: 5 + Math.random() * 8,
      delay: Math.random() * -14,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, [count]);

  // =================================
  //  RENDER
  // =================================
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes rune-float-a {
          0%   { transform: translate(0, 0) rotate(0deg); }
          50%  { transform: translate(6px, -18px) rotate(4deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes rune-float-b {
          0%   { transform: translate(0, 0) rotate(0deg); }
          50%  { transform: translate(-10px, -12px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes rune-float-c {
          0%   { transform: translate(0, 0) rotate(0deg); }
          50%  { transform: translate(4px, 16px) rotate(3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>

      {runes.map((rune) => (
        <div
          key={rune.id}
          className="absolute text-[#c81d25]"
          style={{
            width: rune.size,
            height: rune.size,
            top: `${rune.top}%`,
            left: `${rune.left}%`,
            opacity: rune.opacity,
            animation: `${rune.animation} ${rune.duration}s ease-in-out ${rune.delay}s infinite`,
            filter: "drop-shadow(0 0 4px rgba(200, 29, 37, 0.35))",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            dangerouslySetInnerHTML={{ __html: RUNE_SYMBOLS[rune.symbol] }}
          />
        </div>
      ))}
    </div>
  );
}
