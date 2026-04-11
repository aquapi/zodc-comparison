import assertSimple from './assert-simple.spec.ts';
import schema from './ata-validator/schema.ts';

assertSimple('ata-validator (jit)', (o) => {
  if (!schema.isValidObject(o)) throw new Error();
});
