/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'data-[state=open]',
    'data-[state=closed]',
    'data-[disabled]',
    'data-[highlighted]',
    'data-[focus]',
    'data-[checked]',
    'data-[state=on]',
    'data-[state=off]',
    'aria-[expanded=true]',
    'aria-[selected=true]',
    'aria-[checked=true]',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'custom-primary': '#313237',
        'custom-secondary': '#89939A',
        'custom-elements': '#E2E6E9',
        'custom-icons': '#B4BDC3',
        'header-footer-light': '#493929',
        'brown-dark': '#35291d',
        'custom-accent': '#6b524a',
        'border': 'rgb(var(--border))',
        'input': 'rgb(var(--input))',
        'ring': 'rgb(var(--ring))',
        'background': 'rgb(var(--background))',
        'foreground': 'rgb(var(--foreground))',

        'destructive': {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
        },
        'muted': {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'rgb(var(--popover-foreground))',
        },
        'card': {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
      },
      keyframes: {
        'drop-in': {
          '0%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(-40px)' },
          '70%': { transform: 'translateY(4px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'paging': {
          '0%': { transform: 'rotateY(0deg) skewY(0deg)' },
          '50%': { transform: 'rotateY(90deg) skewY(-20deg)' },
          '100%': { transform: 'rotateY(180deg) skewY(0deg)' },
        },
        'moving-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'moving-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'paging': 'paging 0.2s linear infinite',
        'drop-in': 'drop-in 0.7s ease-out',
        'moving-left': 'moving-left 30s linear infinite',
        'moving-right': 'moving-right 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
