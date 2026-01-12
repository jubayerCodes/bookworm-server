import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequest = (zodSchema: ZodObject) => (req: Request, _res: Response, next: NextFunction) => {
  try {
    req.body = zodSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
