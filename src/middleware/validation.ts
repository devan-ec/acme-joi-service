import type { NextFunction, Request, Response } from "express";
import type { ObjectSchema } from "joi";

export function JoiRequestValidationMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const merged = { ...req.query, ...req.params, ...req.body };
    const { error } = schema.validate(merged, { allowUnknown: true });
    if (error) return res.status(400).json({ message: error.message });
    return next();
  };
}
