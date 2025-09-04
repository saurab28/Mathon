import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sourceCode: ['"Source Code Pro"', 'monospace'],
        libertinus: ['"Libertinus Keyboard"', 'serif'],
        merriweather: ['"Merriweather"', 'serif'],
        libertinusDisplay : ["Libertinus Serif Display", 'serif'],
        cabinSketch: ['"Cabin Sketch"', 'sans-serif'],
        vollkorn: ['"Vollkorn"', 'serif'],
        cormorant: ['"Cormorant"', 'serif'],
        londrinaShadow: ['"Londrina Shadow"', 'sans-serif'],
        imFellFrenchCanon: ['"IM Fell French Canon"', 'serif'],
        
      },
    },
  },
  plugins: [],
}

export default config
