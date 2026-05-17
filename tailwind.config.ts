import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Cosmic void
        cosmos:    "#02030a",
        "cosmos-2":"#05071a",
        deep:      "#0a0d22",
        surface:   "#0f1330",
        "surface-2": "#161b3d",
        line:      "#1f2552",
        "line-2":  "#2a3170",
        text:      "#e6ecff",
        "text-2":  "#c2caf0",
        muted:     "#8b91bf",
        dim:       "#4f547c",
        // Layer accents — one per stack tier
        L0: "#5b6cff",   // Physics — quantum blue
        L1: "#fbbf24",   // Energy — solar amber
        L2: "#c0caf5",   // Matter — silver
        L3: "#34d399",   // Life — emerald
        L4: "#a78bfa",   // Intelligence — violet
        L5: "#fb7185",   // Civilization — rose
        L6: "#22d3ee",   // Information — cyan
        L7: "#f0abfc",   // Simulation — magenta
        L8: "#86efac",   // AI — neon green
        L9: "#fde68a",   // Meta-reality — gold
      },
      fontFamily: {
        // Distinctive — not Inter/Roboto
        display: ['"Cormorant Garamond"', '"Spectral"', "Georgia", "serif"],
        body:    ['"Inter Tight"', "system-ui", "sans-serif"],
        mono:    ['"JetBrains Mono"', '"SF Mono"', "Menlo", "monospace"],
        zh:      ['"Noto Serif SC"', "Georgia", "serif"],
        zhSans:  ['"Noto Sans SC"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        widest: "0.22em",
      },
      animation: {
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "drift":      "drift 80s linear infinite",
        "scan":       "scan 12s linear infinite",
        "blink":      "blink 1.4s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: { "0%, 100%": { opacity: ".35" }, "50%": { opacity: "1" } },
        drift:     { "0%": { transform: "translate3d(0,0,0)" }, "100%": { transform: "translate3d(-40px,-60px,0)" } },
        scan:      { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
        blink:     { "0%, 100%": { opacity: "0.2" }, "50%": { opacity: "1" } },
      },
    },
  },
  plugins: [],
};
export default config;
