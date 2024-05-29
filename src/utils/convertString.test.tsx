import { convertString } from "./convertString";

test("convertString", () => {
  // Convert string takes a boolean param for isEncrypt - true is encrypt, false is decrypt
  expect(convertString("abc", 1, true)).toBe("bcd");
  expect(convertString("bcd", 1, false)).toBe("abc");
  expect(convertString("ABC", 3, true)).toBe("DEF");
  expect(convertString("DEF", 3, false)).toBe("ABC");
  expect(convertString("A1b&c", 23, true)).toBe("X1y&z");
  expect(convertString("X1y&z", 23, false)).toBe("A1b&c");
  expect(convertString("1234%$#@", 5, true)).toBe("1234%$#@");
  expect(convertString("1234%$#@", 5, false)).toBe("1234%$#@");
  expect(convertString("", 12, true)).toBe("");
  expect(convertString("", 12, false)).toBe("");
});
