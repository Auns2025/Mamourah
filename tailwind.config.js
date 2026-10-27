/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B60012',
          deepRed: '#85000C',
          black: '#171717',
          ivory: '#F2EEE8',
          concrete: '#D8D4CE',
          white: '#FFFFFF',
          body: '#626262',
          surface: '#FAF7F2',
          card: '#FFFFFF',
          border: '#E5E0D8',
          lightRed: '#FDF2F2',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        architectural: '0.18em',
        wideTracking: '0.12em',
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(23, 23, 23, 0.04)',
        card: '0 4px 20px rgba(23, 23, 23, 0.06)',
        elevated: '0 12px 30px rgba(23, 23, 23, 0.09)',
        redGlow: '0 4px 20px rgba(182, 0, 18, 0.18)',
      }
    },
  },
  plugins: [],
}
