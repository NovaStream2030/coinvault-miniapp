import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

import { BASEPATH } from './src/shared/consts'

export default defineConfig({
  base: BASEPATH,
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/app/routes',
      generatedRouteTree: './src/app/providers/routeTree.gen.ts',
      routeFileIgnorePrefix: '-',
      quoteStyle: 'single',
    }),
    tsconfigPaths(),
    react(),
    mkcert(), 
  ],
  publicDir: './public',
  server: { host: true },
});
