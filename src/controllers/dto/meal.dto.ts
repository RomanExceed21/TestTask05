import { z } from 'zod';
import { uuidErrorMessage } from '../validators/errorsMessages';

export const zGetMealWithAdditionalInfoByMealIdDto = z.object({
  params: z.object({
    mealId: z.string().uuid({ message: uuidErrorMessage('mealId') }),
  }),
});
