import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(224, 76%, 48%)",
        "primaryHover": "hsl(224, 76%, 48%)",
        "primaryDisable": "hsl(224, 76%, 48%)",
      }
    },
  },
  plugins: [],
}
export default config
