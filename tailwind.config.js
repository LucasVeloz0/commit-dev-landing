module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Certifique-se de que o TailwindCSS esteja escaneando os arquivos corretos
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-background': '#000b1b'
      },
      keyframes: {
        highlight: {
          '0%, 100%': { color: '#000', textShadow: 'none' },
          '50%': { color: '#ff0000', textShadow: '0 0 10px rgba(0, 255, 38, 0.7)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        highlight: 'highlight 2s infinite',
        breathing: 'breathing 3s ease-in-out infinite',
        rotate: 'rotate 20s linear infinite',
      },
    },
  },
  plugins: [],
}
