import createOrder from "../../src/services/orderService";

describe("createOrder", () => {
  it("should create a valid order", () => {
    const componentCodes = ["I", "A", "D", "F", "K"];
    const order = createOrder(componentCodes);

    expect(order).toBeTruthy();
    expect(order?.parts).toContain("LED Screen");
    expect(order?.parts).toContain("Wide-Angle Camera");
    expect(order?.parts).toContain("USB-C Port");
    expect(order?.parts).toContain("Android OS");
    expect(order?.parts).toContain("Metallic Body");
    expect(order?.total).toBeCloseTo(142.3);
  });

  it("should return null for an invalid order configuration", () => {
    const invalidConfigurations = [
      ["A", "D", "F", "I", "K"], // Missing a part
      ["A", "A", "D", "F", "I", "K"], // Duplicate part
      ["A", "D", "F", "I", "K", "L"], // Extra part
      ["A", "B", "D", "F", "I", "K"], // Multiple screens
    ];

    invalidConfigurations.forEach((configuration) => {
      const order = createOrder(configuration);
      expect(order).toBeNull();
    });
  });
});
