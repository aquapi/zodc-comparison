import assertSimple from './assert-simple.spec.ts';
import { Validator } from 'ata-validator';
import schema from './typebox/schema.ts';

{
  const v = new Validator(schema, {
    removeAdditional: false
  });

  assertSimple('ata-validator', (o) => {
    if (!v.isValidObject(o)) throw new Error();
  });
}
