import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    preflight: false,
    extract: {
        include: [
            "./**/*.{html,js,tsx,ts,css}",
        ]
    },
    darkMode: "class", // or 'media' or 'class'
    attributify: true,
    theme: {
        boxShadow: {
            'sm': '0 0px 4px 1px rgba(0, 0, 0, 0.5);',
            'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            'md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
            'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            'none': 'none',
        },
        extend: {
            colors: {
                'primary': 'var(--theme-primary)',
                'primary-accent': 'var(--theme-primary-accent)',
                "theme-bg": "var(--theme-bg)",
                "theme-text": "var(--theme-text)",
                "theme-border": "var(--theme-border)",
                "theme-dark-bg": "var(--theme-dark-bg)",
                "theme-dark-text": "var(--theme-dark-text)",
                "theme-dark-border": "var(--theme-dark-border)",
            },
            height: {
                'form-control': 'var(--height-form-control)',
            },
        },
    },
    variants: {},
    plugins: [],
});
