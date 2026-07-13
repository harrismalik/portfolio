/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#08080B',
          50: '#0F0F14',
          100: '#141419',
          200: '#1B1B22',
          300: '#26262F',
        },
        accent: {
          DEFAULT: '#34D399',
          soft: '#6EE7B7',
          deep: '#059669',
        },
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(52,211,153,0.18), 0 8px 40px -8px rgba(52,211,153,0.28)',
        'glow-lg': '0 0 60px -10px rgba(52,211,153,0.45)',
        panel: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 60px -30px rgba(0,0,0,0.8)',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-6%,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%,4%,0) scale(0.94)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1.05)' },
          '50%': { transform: 'translate3d(-6%,5%,0) scale(0.9)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        aurora: 'aurora 24s ease-in-out infinite',
        aurora2: 'aurora2 30s ease-in-out infinite',
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.35,1) infinite',
      },
    },
  },
  plugins: [],
}
