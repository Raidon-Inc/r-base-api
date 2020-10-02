import * as Joi from '@hapi/joi';
import express from 'express';

import {
  ContainerTypes,
  // Use this as a replacement for express.Request
  ValidatedRequest,
  // Extend from this to define a valid schema type/interface
  ValidatedRequestSchema,
  // Creates a validator that generates middlewares
  createValidator,
} from "express-joi-validation";

const validator = createValidator();

interface MathRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    a: number;
    b: number;
    c: number;
  };
}

const querySchema = Joi.object({
  value: Joi.number()
});

async function isNumber(req: any, res: any) {
  res.send(true);
}

async function add(req: MathRequestSchema, res: any) {
  const sum = Number(req.query.a) + Number(req.query.c);
  res.send(sum.toString());
}

async function subtract(req: MathRequestSchema, res: any) {
  const difference = Number(req.query.a) - Number(req.query.b);
  res.send(difference.toString());
}

const getMathRoutes = () => {
  const router = express.Router();
  router.get("/add", add);
  router.get("/subtract", subtract);
  router.post("/number", validator.query(querySchema), isNumber);
  return router;
};

export { getMathRoutes };
