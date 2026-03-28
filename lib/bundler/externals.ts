import { esmExternalRequirePlugin } from 'rolldown/plugins';
import { builtinModules } from 'node:module';

export default esmExternalRequirePlugin({
  external: [/^node:/, /^bun:/, 'bun'].concat(builtinModules),
  skipDuplicateCheck: true,
});
