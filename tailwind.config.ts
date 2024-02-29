import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  content: [],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
export default config
