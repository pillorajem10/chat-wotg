import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
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
        emptyOutDir: true
    }
});

