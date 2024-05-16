import { z } from 'zod';

export const validCities = ['VR', 'BM', 'BP', 'R', 'PH'];
export const validGroups = ['PA', 'MP', 'PI', 'AT'];

export const ParamsSchema = z.object({
  id: z.string().uuid(),
});

export const GroupSchema = z.object({
  amount: z.number(),
  group_name: z.string(),
  price_unit: z.number(),
  product_name: z.string(),
});

export const UserSchema = z.object({
  cpf: z.string(),
  name: z.string(),
  city: z.string(),
  email: z.string(),
});
