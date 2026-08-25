/**
 * Crafted local illustration standing in for a real photo of a 3D-printed
 * house under construction. Swap this component out for an <img> once real
 * photography is available — Hero.tsx only expects a same-sized block.
 */
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 900 720" className="h-full w-full" role="img" aria-label="3D-принтер печатает жилой дом на фоне вечернего пейзажа">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a332c" />
          <stop offset="55%" stopColor="#171e1a" />
          <stop offset="100%" stopColor="#0d100e" />
        </linearGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9e6dc" />
          <stop offset="100%" stopColor="#c9c4b3" />
        </linearGradient>
        <linearGradient id="wallShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b6b09c" />
          <stop offset="100%" stopColor="#d9d5c6" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4c979" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f4c979" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e7e4da" />
          <stop offset="100%" stopColor="#9aa08e" />
        </linearGradient>
        <radialGradient id="ground" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="720" fill="url(#sky)" />

      {/* faint blueprint grid */}
      <g opacity="0.05" stroke="#f4f2ec">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 90} y1="0" x2={i * 90} y2="720" strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 90} x2="900" y2={i * 90} strokeWidth="1" />
        ))}
      </g>

      {/* trees / greenery */}
      <g opacity="0.85">
        <g transform="translate(70,470)" fill="#4c5a41">
          <ellipse cx="0" cy="60" rx="46" ry="58" opacity="0.9" />
          <ellipse cx="-30" cy="90" rx="34" ry="40" opacity="0.8" />
          <rect x="-6" y="90" width="12" height="60" fill="#33392c" />
        </g>
        <g transform="translate(820,500)" fill="#546248">
          <ellipse cx="0" cy="50" rx="40" ry="52" opacity="0.9" />
          <ellipse cx="34" cy="86" rx="30" ry="36" opacity="0.75" />
          <rect x="-5" y="82" width="10" height="56" fill="#33392c" />
        </g>
        <g transform="translate(150,560)" fill="#647556" opacity="0.6">
          <ellipse cx="0" cy="20" rx="60" ry="24" />
        </g>
      </g>

      <ellipse cx="450" cy="640" rx="300" ry="30" fill="url(#ground)" />

      {/* printed house */}
      <g id="house">
        <path d="M240 640V330C240 313 253 300 270 300H560C577 300 590 313 590 330V640Z" fill="url(#wall)" />
        {/* printed layer ridges */}
        <g stroke="#b4ae9b" strokeWidth="2" opacity="0.55">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1="240" y1={330 + i * 16} x2="590" y2={330 + i * 16} />
          ))}
        </g>
        <path d="M540 640V420C540 411 547 404 556 404H590V640Z" fill="url(#wallShade)" />

        {/* roofline */}
        <path d="M232 300L415 210L598 300" fill="none" stroke="#8a9b78" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

        {/* windows with warm interior glow */}
        <rect x="292" y="360" width="90" height="120" rx="4" fill="#171e1a" />
        <circle cx="337" cy="420" r="70" fill="url(#glow)" />
        <rect x="292" y="360" width="90" height="120" rx="4" fill="none" stroke="#f4f2ec" strokeWidth="3" />
        <line x1="337" y1="360" x2="337" y2="480" stroke="#f4f2ec" strokeWidth="2" />

        <rect x="452" y="380" width="66" height="90" rx="4" fill="#171e1a" />
        <circle cx="485" cy="425" r="46" fill="url(#glow)" />
        <rect x="452" y="380" width="66" height="90" rx="4" fill="none" stroke="#f4f2ec" strokeWidth="3" />

        {/* door */}
        <rect x="300" y="540" width="70" height="100" rx="3" fill="#20261f" stroke="#8a9b78" strokeWidth="3" />
      </g>

      {/* 3D printer gantry */}
      <g id="printer" stroke="url(#metal)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="150" y1="640" x2="150" y2="120" />
        <line x1="700" y1="640" x2="700" y2="120" />
        <line x1="120" y1="120" x2="730" y2="120" />
        <line x1="150" y1="180" x2="700" y2="180" />
        <g id="print-head" transform="translate(0,0)">
          <line x1="470" y1="180" x2="470" y2="330" strokeWidth="8" />
          <rect x="446" y="322" width="48" height="26" rx="5" fill="#171e1a" stroke="#f4f2ec" strokeWidth="2.5" />
          <circle cx="470" cy="348" r="5" fill="#f4c979" stroke="none" />
        </g>
        <circle cx="150" cy="120" r="9" fill="#171e1a" stroke="#f4f2ec" strokeWidth="3" />
        <circle cx="700" cy="120" r="9" fill="#171e1a" stroke="#f4f2ec" strokeWidth="3" />
      </g>

      <g stroke="#f4f2ec" strokeWidth="1.4" strokeDasharray="3 6" opacity="0.3">
        <line x1="150" y1="120" x2="150" y2="640" />
        <line x1="700" y1="120" x2="700" y2="640" />
      </g>
    </svg>
  )
}
