import assertSimple from './assert-simple.spec.ts';
import { schema } from './zod-compiler/schema.js';

assertSimple('zod-compiler (aot)', (o) => {
  schema.parse(o);
});
