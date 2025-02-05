import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    base: "/vite/", // Forces assets to use /vite/ instead of :5173
    build: {
        outDir: "public/vite", // Builds assets inside public/vite
        emptyOutDir: true,
        manifest: true, // Ensures Laravel can find built assets
    },
});
