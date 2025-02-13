/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        archivo: ["'Archivo Black'", "sans-serif"],
        jomhuria: ["'Jomhuria'", "cursive"],
        inter: ["var(--font-inter)"],
        syne: ["var(--font-syne)"],
      },
      backgroundImage: {
        "gradient-radial-light":
          "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-radial-dark":
          "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        rblue: "#382C40",
        dblue: "#1D1822",
        orange1: "#F78C11",
        green1: "#37D145",
        blue1: "#27A5E6",
        a: {
          fluo: "#B3CF3D",
          green: "#D0F603",
          pnlGreen: "#40b66b",
          pnlRed: "#ff5f52",
          charcoal: "#0c0c0c",
          gray: "#7d7d7d",
          social: "#4B4D51",
          positive: "#007902",
          connected: "#65FB9E",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
          bgMain: "#0C1010",
          tokenAmount: "#161A1B",
          stroke: "#2F2F2F",
          divBg: "#161A1B",
          tableHeader: "#242626",
        },
        textShadow: {
          "a-fluo": "0 0 8px rgba(179, 207, 61, 1)",
          none: "none",
        },
        backgroundImage: {
          ramp: "url(../public/assets/images/rampx-bg.png)",
          code: "url(../public/assets/images/codebgstatic.png)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        custom: "16px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { "background-color": "transparent", color: "#B3CF3D" },
          "50%": { "background-color": "#B3CF3D", color: "black" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 2s infinite",
      },
    },
  },
  plugins: [],
};
