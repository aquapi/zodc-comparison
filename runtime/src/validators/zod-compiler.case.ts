import assertSimple from './assert-simple.spec.ts';
import { schema } from './zod-compiler/schema.ts';

assertSimple('zod-compiler (aot)', (o) => {
  schema.parse(o);
});
