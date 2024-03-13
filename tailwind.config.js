module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      mobile: { min: '320px', max: '639px' },
      // => @media (min-width: 320px) { ... }
      // '@media (min-width: 320px) and (max-width: 639px)'
      tablet: { min: '640px', max: '1279px' },
      // => @media (min-width: 640px) { ... }
      // '@media (min-width: 640px) and (max-width: 1279px)'

      laptop: { min: '1280px', max: '1919px' },
      // => @media (min-width: 1024px) { ... }
      // '@media (min-width: 1279px) and (max-width: 1919px)'

      desktop: '1920px',
      // => @media (min-width: 1280px) { ... }
      // '@media (min-width: 1920px)'
      bigDesktop: '2560px',
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      animation: {
        fadeOut: 'fadeOut 2s ease-in',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
