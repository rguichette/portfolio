import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'


import glsl from 'vite-plugin-glsl';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],

  assetsInclude: ['**/*.glb']
})
