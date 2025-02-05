import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'], // Ensure correct entry files
            refresh: true,
        }),
    ],
    base: "/vite/", // Ensure all assets are prefixed with /vite/
    server: {
        host: "0.0.0.0",
        strictPort: true,
        port: 5173,
        hmr: {
            host: "chat.wotgonline.com",
            protocol: "wss"
        }
    },
    build: {
        outDir: "public/vite",
        emptyOutDir: true,
        manifest: true, // Needed for Laravel to read Vite assets
    },
});
