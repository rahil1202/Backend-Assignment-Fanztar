import { Router } from "express";
import { createOrderController } from "../controller/orderController";

const orderRoutes = Router();

orderRoutes.post("/orders", createOrderController);

export default orderRoutes;
