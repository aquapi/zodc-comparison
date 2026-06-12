import schema from './zod/index.ts';
import { compile } from 'zod-compiler';

export const compiled = compile(schema);
