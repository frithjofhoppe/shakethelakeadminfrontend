import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
	return {
		build: {
			outDir: 'build',
			target: 'esnext',
		},
		server: {
			port: 3000,
		},
		plugins: [react()],
		test: {
			environment: 'jsdom',
			globals: true,
			setupFiles: './tests/vitest-setup.ts',
		},
		define: {'process.env': process.env},
	};
});
