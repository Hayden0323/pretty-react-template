import path from 'path'
import { defineConfig } from 'vite'

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/hooks/index.ts'),
      name: 'hooks',
      fileName: (format) => `hooks.${format}.js`,
    },
  },
})
