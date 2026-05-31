/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',   // cyan-400
        secondary: '#3b82f6', // blue-500
        accent: '#38bdf8',    // sky-400
        background: '#020617',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'float': 'float 5s ease-in-out infinite',
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
        'drift': 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 30px) scale(0.95)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
