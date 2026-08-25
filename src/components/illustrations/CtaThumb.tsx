/** Small architectural-visualisation-style thumbnail used in the CTA band. */
export default function CtaThumb() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Архитектурная визуализация напечатанного дома в окружении зелени">
      <defs>
        <linearGradient id="ctaSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a4536" />
          <stop offset="100%" stopColor="#171e1a" />
        </linearGradient>
        <linearGradient id="ctaWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#efece2" />
          <stop offset="100%" stopColor="#cfcabb" />
        </linearGradient>
        <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4c979" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f4c979" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#ctaSky)" />
      <ellipse cx="200" cy="330" rx="180" ry="18" fill="#000000" opacity="0.35" />

      <g fill="#5a6a4c" opacity="0.9">
        <ellipse cx="55" cy="270" rx="42" ry="52" />
        <ellipse cx="350" cy="290" rx="36" ry="44" />
      </g>

      <path d="M120 320V200C120 190 128 182 138 182H262C272 182 280 190 280 200V320Z" fill="url(#ctaWall)" />
      <g stroke="#b4ae9b" strokeWidth="1.6" opacity="0.5">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={i} x1="120" y1={200 + i * 11} x2="280" y2={200 + i * 11} />
        ))}
      </g>
      <path d="M112 182L200 128L288 182" fill="none" stroke="#8a9b78" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="150" y="220" width="46" height="60" rx="3" fill="#171e1a" />
      <circle cx="173" cy="250" r="34" fill="url(#ctaGlow)" />
      <rect x="150" y="220" width="46" height="60" rx="3" fill="none" stroke="#f4f2ec" strokeWidth="2" />

      <rect x="215" y="260" width="42" height="60" rx="3" fill="#20261f" stroke="#8a9b78" strokeWidth="2.5" />
    </svg>
  )
}
