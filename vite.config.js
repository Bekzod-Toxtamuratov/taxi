import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 3000, // Misol uchun, 3000 portini tanlang
		host: true, // yoki '0.0.0.0'
	},
})
// vite.config.js
