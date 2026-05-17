"use client";

/**
 * StackDiagram — SVG of all 10 layers with dependency arrows on the side.
 * Static SVG with CSS animations; cheap, accessible, prints well.
 */
const LAYERS = [
  { tag: "L-09", en: "Meta-Reality", zh: "元现实",     hue: "#fde68a" },
  { tag: "L-08", en: "AI",           zh: "人工智能",   hue: "#86efac" },
  { tag: "L-07", en: "Simulation",   zh: "模拟",       hue: "#f0abfc" },
  { tag: "L-06", en: "Information",  zh: "信息",       hue: "#22d3ee" },
  { tag: "L-05", en: "Civilization", zh: "文明",       hue: "#fb7185" },
  { tag: "L-04", en: "Intelligence", zh: "智能",       hue: "#a78bfa" },
  { tag: "L-03", en: "Life",         zh: "生命",       hue: "#34d399" },
  { tag: "L-02", en: "Matter",       zh: "物质",       hue: "#c0caf5" },
  { tag: "L-01", en: "Energy",       zh: "能量",       hue: "#fbbf24" },
  { tag: "L-00", en: "Physics",      zh: "物理",       hue: "#5b6cff" },
];

export default function StackDiagram() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      <svg viewBox="0 0 640 720" className="w-full h-auto">
        <defs>
          <linearGradient id="rail" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#fde68a" stopOpacity="0.85"/>
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#5b6cff" stopOpacity="0.85"/>
          </linearGradient>
          <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Side rail */}
        <line x1="60" y1="40" x2="60" y2="680" stroke="url(#rail)" strokeWidth="1.4"/>

        {/* Right rail (label/index column) */}
        <line x1="580" y1="40" x2="580" y2="680" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

        {LAYERS.map((L, idx) => {
          const y = 60 + idx * 64;
          return (
            <g key={L.tag}>
              {/* Glow blob */}
              <circle cx="60" cy={y} r="14" fill={L.hue} opacity="0.18" filter="url(#soft)" />
              {/* Node */}
              <circle cx="60" cy={y} r="5" fill={L.hue}/>
              <circle cx="60" cy={y} r="5" fill="none" stroke={L.hue} strokeOpacity="0.6" strokeWidth="0.8">
                <animate attributeName="r" values="5;10;5" dur={`${3 + (idx % 3)}s`} repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur={`${3 + (idx % 3)}s`} repeatCount="indefinite"/>
              </circle>

              {/* Connector tick */}
              <line x1="68" y1={y} x2="100" y2={y} stroke={L.hue} strokeOpacity="0.6"/>

              {/* Layer plate */}
              <rect x="100" y={y - 22} width="450" height="44" fill="rgba(15,19,48,0.4)" stroke="rgba(255,255,255,0.07)"/>

              <text x="118" y={y + 5} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3" fill="#8b91bf">{L.tag}</text>
              <text x="170" y={y + 5} fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontWeight="300" fontSize="22" fill="#e6ecff">{L.en}</text>
              <text x="380" y={y + 6} fontFamily="Noto Serif SC, serif" fontWeight="500" fontSize="18" fill={L.hue}>{L.zh}</text>

              {/* dep arrow (down) — every layer points to the one above as its prerequisite */}
              {idx > 0 && (
                <path d={`M 580 ${y} L 575 ${y + 24} L 585 ${y + 24} Z`} fill={LAYERS[idx-1].hue} opacity="0.4"/>
              )}
            </g>
          );
        })}

        {/* Brackets top/bottom */}
        <text x="320" y="32" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="6" fill="#4f547c">↑ HIGHER LAYERS · 上层 ↑</text>
        <text x="320" y="710" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="6" fill="#4f547c">↓ LOWER LAYERS · 下层 ↓</text>
      </svg>
    </div>
  );
}
