import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cocktail-gradient': 'linear-gradient(135deg, #6a3f4f 0%, #d297b3 33%, #01cee8 66%, #0033a8  100%)',
      },
    },
  },
  plugins: [],
}
export default config
