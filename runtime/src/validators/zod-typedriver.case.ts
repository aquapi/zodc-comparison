import assertSimple from './assert-simple.spec.ts';
import compile from 'typedriver';
import z from 'zod';

const Id = z.int().min(0);
const DisplayName = z.optional(z.string().min(3).max(24));

const schema = compile(
  z.object({
    id: Id,
    displayName: DisplayName,
    health: z.number().min(0).max(100),
    inventory: z
      .array(
        z.object({
          id: Id,
          displayName: DisplayName,
          tags: z.optional(z.array(z.string())),
        }),
      )
      .max(30),
  })
);

assertSimple('zod/typedriver (jit, parse)', (o) => {
  schema.parse(o);
});

assertSimple('zod/typedriver (jit, assert)', (o) => {
  if (!schema.check(o)) throw new Error();
});
