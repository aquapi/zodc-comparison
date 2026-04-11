import { Validator } from 'ata-validator';

export default new Validator({
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
});
