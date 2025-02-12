import { calculateTip } from "../src/math.js";

test("should calculate tip", () => {
  const total = 10;
  const tip = calculateTip(total);
  expect(tip).toBe(2);
});
