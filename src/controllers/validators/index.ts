import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (err: unknown) {
    return res.status(400).send(err);
  }
};
