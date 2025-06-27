import { z } from "zod";

type WithId<T> = T & { id: string };

// - - - - - - - - - - - - - - - - - - - - - -
// USER

export const UserDetailsSchema = z.object({
  email: z.string().email(),
});

export type UserDetailsTypeDoc = WithId<z.infer<typeof UserDetailsSchema>> & { isBackofficeEnabled: boolean };
