import parts from "../utils/data";
import { Order } from "../models/Order";
import { ApplicationError } from "../utils/error";

const createOrder = (componentCodes: string[]): Order => {
  const partCodes = new Set(componentCodes);
  const screenCodes = ["A", "B", "C"];
  const cameraCodes = ["D", "E"];
  const portCodes = ["F", "G", "H"];
  const osCodes = ["I", "J"];
  const bodyCodes = ["K", "L"];

  if (
    partCodes.size !== 5 ||
    [...partCodes].filter((code) => screenCodes.includes(code)).length !== 1 ||
    [...partCodes].filter((code) => cameraCodes.includes(code)).length !== 1 ||
    [...partCodes].filter((code) => portCodes.includes(code)).length !== 1 ||
    [...partCodes].filter((code) => osCodes.includes(code)).length !== 1 ||
    [...partCodes].filter((code) => bodyCodes.includes(code)).length !== 1
  ) {
    throw new ApplicationError("Invalid order configuration", 400);
  }

  const total = componentCodes.reduce((acc, code) => {
    const part = parts.find((p) => p.code === code);
    return part ? acc + part.price : acc;
  }, 0);

  const partNames = componentCodes.map((code) => {
    const part = parts.find((p) => p.code === code);
    return part ? part.name : "";
  });

  return {
    id: `order-${Math.random().toString(36).substr(2, 9)}`,
    total,
    parts: partNames,
  };
};

export default createOrder;
