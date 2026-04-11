import assertSimple from './assert-simple.spec.ts';
// @ts-ignore
import { boolFn } from './ata-validator/aot.ts';

assertSimple('ata-validator (aot)', (o) => {
  if (!boolFn(o)) throw new Error();
});
