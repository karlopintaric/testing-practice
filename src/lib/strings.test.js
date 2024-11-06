import { capitalize, reverseString } from "./strings";

test("Capitalize string", () => {
  expect(capitalize("word")).toBe("Word");
});

test("Reverse string", () => {
  expect(reverseString("word")).toBe("drow");
});
