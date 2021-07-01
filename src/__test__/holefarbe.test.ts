import { holeFarbe } from "../holrfarbe";

describe("Tests die die Rechner Grundlagen testen", () => {
  test.each([["blau", "\x1b[34m"]])(
    "hole-farbe-Test",
    (zuHolendeFarbe, expected) => {
      expect(holeFarbe(zuHolendeFarbe)).toEqual(expected);
    }
  );
  test.each([["bla", ""]])(
    "hole-empty-farbe-Test",
    (zuholendeFarbe, expected) => {
      expect(holeFarbe(zuholendeFarbe)).toEqual(expected);
    }
  );

  test.each([
    ["grün", "\x1b[32m"],
    ["rot", "\x1b[31m"],
    ["weiß", "\x1b[37m"],
    ["cyan", "\x1b[36m"],
    ["magenta", "\x1b[35m"],
    ["magenta", "\x1b[35m"],
    ["schwarz", "\x1b[30m"],
  ])("hole-farbe-Test %s %s", (zuHolendeFarbe, expected) => {
    expect(holeFarbe(zuHolendeFarbe)).toEqual(expected);
  });
});
