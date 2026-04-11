import schema from './schema.ts';

await Bun.write(
  import.meta.dir + '/aot.ts',
  // @ts-ignore huh
  '// @ts-nocheck\n' + schema.toStandalone(),
);
