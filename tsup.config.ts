import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  const { watch } = options

  return {
    entry: ['src/index.ts'],
    target: 'esnext',
    format: ['esm', 'cjs'],
    dts: !watch
      ? {
          resolve: true,
        }
      : false,
    minify: !watch,
    clean: true,
    platform: 'browser',
  }
})
