/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        garamond: ["'Apple Garamond', serif"],
      },
      fontSize: {
        // Fluid typography scale
        'fluid-xs': ['clamp(0.75rem, 1.5vw, 0.875rem)', { lineHeight: '1.4' }],
        'fluid-sm': ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.6' }],
        'fluid-lg': ['clamp(1.125rem, 3vw, 1.25rem)', { lineHeight: '1.5' }],
        'fluid-xl': ['clamp(1.25rem, 3.5vw, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-2xl': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.3' }],
        'fluid-3xl': ['clamp(1.875rem, 5vw, 2.5rem)', { lineHeight: '1.2' }],
        'fluid-4xl': ['clamp(2.25rem, 6vw, 3rem)', { lineHeight: '1.1' }],
        'fluid-5xl': ['clamp(3rem, 7vw, 4rem)', { lineHeight: '1.1' }],
        'fluid-6xl': ['clamp(3.75rem, 8vw, 5rem)', { lineHeight: '1' }],
      },
      spacing: {
        // Fluid spacing scale
        'fluid-1': 'clamp(0.25rem, 1vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 1.5vw, 1rem)',
        'fluid-3': 'clamp(0.75rem, 2vw, 1.5rem)',
        'fluid-4': 'clamp(1rem, 2.5vw, 2rem)',
        'fluid-5': 'clamp(1.25rem, 3vw, 2.5rem)',
        'fluid-6': 'clamp(1.5rem, 3.5vw, 3rem)',
        'fluid-8': 'clamp(2rem, 4vw, 4rem)',
        'fluid-10': 'clamp(2.5rem, 5vw, 5rem)',
        'fluid-12': 'clamp(3rem, 6vw, 6rem)',
        'fluid-16': 'clamp(4rem, 8vw, 8rem)',
        'fluid-20': 'clamp(5rem, 10vw, 10rem)',
        'fluid-24': 'clamp(6rem, 12vw, 12rem)',
      },
      maxWidth: {
        // Fluid container widths
        'fluid-sm': 'min(95vw, 640px)',
        'fluid-md': 'min(90vw, 768px)',
        'fluid-lg': 'min(85vw, 1024px)',
        'fluid-xl': 'min(80vw, 1280px)',
        'fluid-2xl': 'min(75vw, 1536px)',
      },
      minHeight: {
        'fluid-screen': '100vh',
        'fluid-screen-75': '75vh',
        'fluid-screen-50': '50vh',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} 