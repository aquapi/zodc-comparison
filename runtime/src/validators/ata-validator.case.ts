import assertSimple from './assert-simple.spec.ts';
import { Validator } from 'ata-validator';

{
  const v = new Validator(
    {
      type: 'object',
      required: ['id', 'health', 'inventory'],
      properties: {
        id: {
          type: 'integer',
          minimum: 0,
        },
        displayName: {
          type: 'string',
          minLength: 3,
          maxLength: 24,
        },
        health: {
          type: 'number',
          minimum: 0,
          maximum: 100,
        },
        inventory: {
          type: 'array',
          items: {
            type: 'object',
            required: ['id', 'tags'],
            properties: {
              id: {
                type: 'integer',
                minimum: 0,
              },
              displayName: {
                type: 'string',
                minLength: 3,
                maxLength: 24,
              },
              tags: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
          maxItems: 30,
        },
      },
    },
    {
      removeAdditional: false,
    },
  );

  assertSimple('ata-validator', (o) => {
    if (!v.isValidObject(o)) throw new Error();
  });
}
