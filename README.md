# Common util functionalities

### This library provides error handling for requests and general errors in Express.js based application.

## Installation

`npm i `

## Usage

First, configure Express.js application with error handling middleware,

```
import express, { NextFunction, Request, Response } from "express";
import { ValidationChain, body, param, query } from "express-validator";
import {
  errorHandler,
  validateRequest,
  responseGenerator,
  NotFoundError,
} from "common-utils";

const app = express();

app.use(express.json());

const bodyValidation: ValidationChain[] = [
  body("mobile")
    .not()
    .isEmpty()
    .withMessage("Mobile Number is required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid Mobile Number"),
  body("age")
    .not()
    .isEmpty()
    .withMessage("Age is required")
    .isInt({ min: 1, max: 100 })
    .withMessage("Invalid age"),
];

const paramsValidation: ValidationChain[] = [
  param("mobile_number")
    .not()
    .isEmpty()
    .withMessage("Mobile Number is required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid Mobile Number"),
];

const queryValidation: ValidationChain[] = [
  query("mobile_number")
    .not()
    .isEmpty()
    .withMessage("Mobile Number is required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid Mobile Number"),
  query("age")
    .not()
    .isEmpty()
    .withMessage("Age is required")
    .isInt({ min: 1, max: 100 })
    .withMessage("Invalid age"),
];

app.get(
  "/dictionary/:mobile_number",
  paramsValidation,
  validateRequest,
  (req: Request, res: Response, next: NextFunction) => {
    const { mobile_number } = req.params;
    return res.status(200).send(mobile_number);
  }
);

app.get(
  "/dictionary",
  queryValidation,
  validateRequest,
  (req: Request, res: Response, NextFunction: NextFunction) => {
    const { mobile_number, age } = req.query;
    return res.status(200).send(`${mobile_number} = ${age}`);
  }
);

app.post(
  "/dictionary",
  bodyValidation,
  validateRequest,
  (req: Request, res: Response, next: NextFunction) => {
    const { mobile } = req.body;

    const mobileDictionary = [9657227905, 67890];

    const isMobileFound = mobileDictionary.find((mobile) =>
      mob === mobile ? true : false
    );

    if (isMobileFound) {
      return res.status(200).json(responseGenerator({ data: [mobile] }));
    }

    throw new NotFoundError("Mobile number not found");
  }
);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server Running on 3000", 3000);
});
```

## Available classes and functions

`throw new BadRequestError()`

`throw new ConflictError()`

`throw new DatabaseConnectionError()`

`throw new NotAuthorizedError()`

`throw new NotFoundError()`

`responseGenerator()`