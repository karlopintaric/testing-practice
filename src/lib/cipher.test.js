import caesarCipher from "./cipher";

test("Hello", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
