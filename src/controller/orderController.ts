import { Request, Response, NextFunction } from "express";
import createOrder from "../services/orderService";
import { ApplicationError } from "../utils/error";
import orderSchema from "../utils/validation";

export const createOrderController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = orderSchema.safeParse(req.body);
  if (!result.success) {
    return next(
      new ApplicationError(
        `Invalid request body: ${result.error.issues[0].message}`,
        400,
      ),
    );
  }

  const { components } = result.data;

  try {
    const order = createOrder(components);
    return res.status(201).json(order);
  } catch (err) {
    if (err instanceof ApplicationError) {
      return next(err);
    }
    return next(new ApplicationError("Internal Server Error", 500));
  }
};
