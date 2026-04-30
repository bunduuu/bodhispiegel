import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#05070e',
        foreground: '#f5f7ff',
        muted: '#97a2c6',
        panel: '#0c1121'
      },
      boxShadow: {
        glow: '0 0 120px rgba(117, 127, 255, 0.25)'
      },
      backgroundImage: {
        grain: "url('/placeholders/grain.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config
