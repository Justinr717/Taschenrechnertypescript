import { minus, geteilt, quadrat, mal } from "../operatoren";

describe("Grundoperatoren test", () => {
  test("Minus-Test", () => {
    expect(minus(60, 30)).toEqual(30);
  });
  test("geteilt-error-test", () => {
    expect(() => geteilt(2, 0)).toThrow("Teiler darf nicht null sein");
  });

  test.each([
    [60, 30, 30],
    [50, 10, 40],
  ])("Minus-Tests: %i - %i = %i", (a, b, expected) => {
    expect(minus(a, b)).toEqual(expected);
  });

  test.each([
    [60, 2, 30],
    [50, 5, 10],
    [30, 15, 2],
    [50, 5, 10],
  ])("Geteilt-Tests: %i / %i = %i", (a, b, expected) => {
    expect(geteilt(a, b)).toEqual(expected);
  });

  test.each([
    [3, 2, 9],
    [5, 2, 25],
  ])("quadrat-Tests: %i ^ %i = %i", (a, b, expected) => {
    expect(quadrat(a, b)).toEqual(expected);
  });
  test("quadrat-error-test", () => {
    expect(() => quadrat(0, 2)).toThrow("Man kann null nicht quadrieren");
  });

  test.each([
    [60, 2, 120],
    [50, 3, 150],
  ])("mal-Tests: %i * %i = %i", (a, b, expected) => {
    expect(mal(a, b)).toEqual(expected);
  });

  test("mal-error-test", () => {
    expect(() => mal(0, 0)).toThrow("Man kann null nicht multiplizieren");
  });
});
