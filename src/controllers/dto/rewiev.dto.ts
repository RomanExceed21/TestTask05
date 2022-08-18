import { z } from 'zod';
import { uuidErrorMessage } from '../validators/errorsMessages';

export interface UpdateRewievDto {
  author: string;
  text: string;
  component_id?: string;
  meal_id?: string;
}

export interface CreateRewievDto extends UpdateRewievDto {
  id?: string;
}

export const zCreateRewievDto = z.object({
  body: z.object({
    id: z.optional(z.string().uuid({ message: uuidErrorMessage('id') })),
    author: z.string(),
    text: z.string(),
    component_id: z.optional(z.string().uuid()),
    meal_id: z.optional(z.string().uuid({ message: uuidErrorMessage('meal_id') })),
  }),
});

export const zUpdateRewievDto = z.object({
  body: z.object({
    author: z.string(),
    text: z.string(),
    component_id: z.optional(z.string().uuid()),
    meal_id: z.optional(z.string().uuid({ message: uuidErrorMessage('meal_id') })),
  }),
  params: z.object({
    rewievId: z.string().uuid({ message: uuidErrorMessage('rewievId') }),
  }),
});
