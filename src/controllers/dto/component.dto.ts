import { z } from 'zod';
import { uuidErrorMessage } from '../validators/errorsMessages';

export const zGetComponentWithRewievsByComponentId = z.object({
  params: z.object({
    componentId: z.string().uuid({ message: uuidErrorMessage('componentId') }),
  }),
});
