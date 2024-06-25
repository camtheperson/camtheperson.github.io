import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-pink': '#ffb7b7',
      },
      flex: {
        sidebar: '0 0 33.3333333333%',
        main: '0 0 66.6666666667%',
      },
      transitionProperty: {
        cb: 'cubic-bezier(.72,.16,.345,.875)',
      },
    },
  },
  plugins: [],
} satisfies Config
