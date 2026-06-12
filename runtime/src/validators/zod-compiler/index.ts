import { compile } from 'zod-compiler';
import z from 'zod';

const Id = z.int().min(0);
const DisplayName = z.optional(z.string().min(3).max(24));

export const schema = compile(
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
