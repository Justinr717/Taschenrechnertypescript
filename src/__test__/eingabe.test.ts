import { operatorensortierer } from "../rechner";

describe("Tests die die Rechner Grundlagen testen", () => {
  test.each([["30+30+30", 90]])(
    "eingabe-Tests: %s = %i",
    (usereingabe, expected) => {
      expect(operatorensortierer(usereingabe)).toEqual(expected);
    }
  );
  test.each([["3*30+30", 120]])(
    "eingabe*-/+-Test: %s = %i",
    (usereingabe, expected) => {
      expect(operatorensortierer(usereingabe)).toEqual(expected);
    }
  );
  test.each([["90-2+2+10/2/2+5", 97.5]])(
    "mehrmals-/+-*/-Test: %s = %i",
    (usereingabe, expected) => {
      expect(operatorensortierer(usereingabe)).toEqual(expected);
    }
  );
  test.each([["3*30/2", 45]])(
    "eingabe*-/+-Test: %s = %i",
    (usereingabe, expected) => {
      expect(operatorensortierer(usereingabe)).toEqual(expected);
    }
  );
  test.each([["3*3*2", 18]])(
    "mehrmals-mal-Test: %s = %i",
    (usereingabe, expected) => {
      expect(operatorensortierer(usereingabe)).toEqual(expected);
    }
  );
  test.each([["90/2/5", 9]])(
    "mehrmals-geteilt-Test: %s = %i",
    (usereingabe, expected) => {
      expect(operatorensortierer(usereingabe)).toEqual(expected);
    }
  );
});
