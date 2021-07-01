import { rechner } from "../rechner";

describe("Tests die die Rechner Funktion testen", () => {
  test("rechner-Math-error-test", () => {
    expect(() => rechner({ a: 1, operator: "#", b: 6 })).toThrow("Math Error");
  });
  test("RECHNER-Test", () => {
    expect(rechner({ a: 1, operator: "+", b: 6 })).toEqual(7);
  });
  test("RECHNER-Test", () => {
    expect(rechner({ a: 2, operator: "^", b: 2 })).toEqual(4);
  });
});
