/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7effa0',   // Green
                secondary: '#a07eff', // Purple
                pink: '#ff7eb3',      // Pink
                background: '#050507', // Near-black
                surface: '#0a0a0c',
                foreground: '#ffffff',
                muted: 'rgba(255, 255, 255, 0.5)',
                border: 'rgba(255, 255, 255, 0.08)',
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'],
                mono: ['"DM Mono"', 'monospace'],
                body: ['"DM Mono"', 'monospace'],
            },
            animation: {
                'morph': 'morph 8s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
                'marquee': 'marquee 25s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
            },
            keyframes: {
                morph: {
                    '0%, 100%': { 'border-radius': '40% 60% 70% 30% / 40% 40% 60% 50%' },
                    '33%': { 'border-radius': '70% 30% 50% 50% / 30% 30% 70% 70%' },
                    '66%': { 'border-radius': '30% 60% 70% 40% / 50% 60% 30% 40%' },
                },
                orbit: {
                    'from': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
                    'to': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
                    '50%': { opacity: '0.6', transform: 'scale(1.1)' },
                }
            }
        },
    },
    plugins: [],
}
