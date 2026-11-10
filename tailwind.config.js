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
          dark: '#063B5B',
          primary: '#087EBA',
          cyan: '#00B5E5',
          light: '#F4F7FA',
          text: '#102D43',
          whatsapp: '#25D366',
          whatsappDark: '#1DA851',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'corporate': '0 10px 30px -5px rgba(6, 59, 91, 0.12)',
        'corporate-lg': '0 20px 45px -10px rgba(6, 59, 91, 0.18)',
      },
    },
  },
  plugins: [],
}
