/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,vue}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        mask: 'rgba(0,0,0,.4)',
      },
    },
  },
  plugins: [],
}
