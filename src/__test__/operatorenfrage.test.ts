import { operatorenfrage } from "../operatorenfrage";

describe("Tests die die Rechner Grundlagen testen", () => {
  test.each([["plus"], ["minus"], ["operatoren"]])(
    "operatorenfrage-test: %s = Es gibt nur die Operatoren +,-,*,/und auch quadrat^",
    (eingabe) => {
      expect(operatorenfrage(eingabe)).toEqual(
        "Es gibt nur die Operatoren +,-,*,/und auch quadrat^"
      );
    }
  );
  test.each([["hallo"], ["kafee"], ["brot"]])(
    "operatorenfrage-test: %s = ",
    (eingabe) => {
      expect(operatorenfrage(eingabe)).toEqual("");
    }
  );
});
