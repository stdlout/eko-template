import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    preflight: false,
    extract: {
        include: [
            "./**/*.{html,js,tsx,ts,css}",
        ]
    },
    variants: {},
    plugins: [],
});
