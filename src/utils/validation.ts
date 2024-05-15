import { z } from "zod";

const orderSchema = z.object({
  components: z
    .array(z.enum(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]))
    .length(5)
    .refine(
      (components) => {
        const screenCodes = ["A", "B", "C"];
        const cameraCodes = ["D", "E"];
        const portCodes = ["F", "G", "H"];
        const osCodes = ["I", "J"];
        const bodyCodes = ["K", "L"];

        const partCodesArray = Array.from(portCodes);

        return (
          partCodesArray.filter((code) => screenCodes.includes(code)).length ===
            1 &&
          partCodesArray.filter((code) => cameraCodes.includes(code)).length ===
            1 &&
          partCodesArray.filter((code) => portCodes.includes(code)).length ===
            1 &&
          partCodesArray.filter((code) => osCodes.includes(code)).length ===
            1 &&
          partCodesArray.filter((code) => bodyCodes.includes(code)).length === 1
        );
      },
      { message: "Invalid order configuration" },
    ),
});

export default orderSchema;
