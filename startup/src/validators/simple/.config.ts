import { type Cases, defineCases } from '../../../config.ts';

await Bun.$`cd ${import.meta.dir} && bun zod-compiler generate ./zod-compiler.ts -o ./zod-compiler.js`;
console.log('built zod-compiler.');

export default defineCases((_runtime) => {
  const cases: Cases = {
    'stnl (jit)': 'stnl/jit.ts',
    'typebox (jit)': 'typebox/jit.ts',
    'typescript (jit)': 'typebox/script-jit.ts',

    zod: 'zod/index.ts',
    'zod/mini': 'zod/mini.ts',
    'zod-compiler': 'zod-compiler.js',
    'zod-typedriver': 'zod-typedriver.ts'
  };

  return { cases };
});
