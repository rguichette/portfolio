import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import glsl from 'vite-plugin-glsl';
import * as TWEEN from '@tweenjs/tween.js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  assetsInclude: ['**/*.glb']
})
