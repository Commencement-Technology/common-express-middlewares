import { CustomError } from "../errors/custom-error";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).send({ errors: error.serializeErrors() });
  }

  return res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
