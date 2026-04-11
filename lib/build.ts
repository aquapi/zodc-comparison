import type { BuildOptions } from "rolldown";

export const BUNDLE_OPTIONS: BuildOptions = {
  logLevel: 'silent',
  platform: 'node',
  transform: {
    define: {
      '__dirname': 'import.meta.dirname',
      '__filename': 'import.meta.filename'
    },
    target: 'esnext',
  },
  external: [/^bun:/, 'bun', 'ata-validator'],
}
