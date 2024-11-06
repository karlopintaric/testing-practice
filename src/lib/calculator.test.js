import calculator from "./calculator";

test("Add", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtract", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("Multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
