import { type Cases, defineCases } from '../../../config.ts';

export default defineCases((_runtime) => {
  const cases: Cases = {
    'stnl (jit)': 'stnl/jit.ts',
    'typebox (jit)': 'typebox/jit.ts',
    'typescript (jit)': 'typebox/script-jit.ts',

    zod: 'zod/index.ts',
    'zod/mini': 'zod/mini.ts',
    'zod/compiler': 'zod/compiler.ts',
    'zod/typedriver': 'zod/typedriver.ts'
  };

  return { cases };
});
