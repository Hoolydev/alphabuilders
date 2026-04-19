import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Light theme (Toolzz style) ── */
        "page":        "#ffffff",
        "card-bg":     "#F9F9F9",
        "subtle":      "#F4F4F5",
        "border-lt":   "#E4E4E7",
        "zinc-600":    "#52525B",
        "zinc-400":    "#A1A1AA",
        "zinc-200":    "#E4E4E7",
        /* Dark accent section */
        "dark-bg":     "#050C13",
        /* Text */
        "tx-primary":  "#09090B",
        "tx-muted":    "#52525B",
        "tx-light":    "#71717A",
        /* CTA */
        "cta-black":   "#000000",
        /* Legacy dark tokens kept so old components don't break compile */
        "bg-primary":     "#ffffff",
        "bg-surface":     "#F9F9F9",
        "bg-surface-alt": "#F4F4F5",
        "bg-elevated":    "#E4E4E7",
        "bg-muted":       "rgba(0,0,0,0.03)",
        "text-primary":   "#09090B",
        "text-secondary": "#52525B",
        "text-light":     "#71717A",
        accent:           "#0080ff",
        border:           "#E4E4E7",
        "reno-sand":      "#0080ff",
        "black-metal":    "#F9F9F9",
        "beryl-pearl":    "#09090B",
        "black-ribbon":   "#52525B",
        card:             "#F9F9F9",
        "card-border":    "#E4E4E7",
        "card-hover":     "#F4F4F5",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      borderRadius: {
        pill: "100px",
        card: "24px",
        tile: "16px",
        btn:  "8px",
      },
      transitionTimingFunction: {
        primary: "cubic-bezier(0.44, 0, 0.56, 1)",
      },
      transitionDuration: {
        "450": "450ms",
        "500": "500ms",
      },
      animation: {
        "marquee-left":  "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
