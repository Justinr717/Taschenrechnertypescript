import { fallskeinoperatorvorhanden } from "../wennkeinoperatorvorhanden";

describe("Tests die die Rechner Grundlagen testen", () => {
  test.each([["a"], ["b"], ["A"]])(
    "keinopvorhanden-test: %s = Bitte Operatoren Eingeben",
    (eingabe) => {
      expect(fallskeinoperatorvorhanden(eingabe)).toEqual(
        "Bitte Operatoren Eingeben"
      );
    }
  );
  test.each([["*"], ["+"], ["-"]])("keinopvorhanden-test: %s = ", (eingabe) => {
    expect(fallskeinoperatorvorhanden(eingabe)).toEqual("");
  });
});
