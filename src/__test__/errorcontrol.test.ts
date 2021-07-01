import { errorcontrol } from "../errorcontrol";

describe("Tests die die Rechner Grundlagen testen", () => {
  test.each([["gibt es gelb", "Die Farbe gibt es nicht"]])(
    "Error-Contol-Test",
    (Error, expected) => {
      expect(errorcontrol(Error)).toEqual(expected);
    }
  );
  test.each([["gibt es gelb"]])(
    "operatorenfrage-test: %s =Die Farbe gibt es nicht ",
    (eingabe) => {
      expect(errorcontrol(eingabe)).toEqual("Die Farbe gibt es nicht");
    }
  );
  test.each([["gibt es grau"]])(
    "operatorenfrage-test: %s =Die Farbe gibt es nicht ",
    (eingabe) => {
      expect(errorcontrol(eingabe)).toEqual("Die Farbe gibt es nicht");
    }
  );
  test.each([["gibt es braun"]])(
    "operatorenfrage-test: %s =Die Farbe gibt es nicht ",
    (eingabe) => {
      expect(errorcontrol(eingabe)).toEqual("Die Farbe gibt es nicht");
    }
  );
  test.each([["regenbogen"]])(
    "operatorenfrage-test: %s =\x1b[35mEs \x1b[32mgibt \x1b[37mkeine \x1b[36mRegegenbogenoption\x1b[37m ",
    (eingabe) => {
      expect(errorcontrol(eingabe)).toEqual(
        "\x1b[35mEs \x1b[32mgibt \x1b[37mkeine \x1b[36mRegegenbogenoption\x1b[37m"
      );
    }
  );
  test.each([["welche farben gibt es"]])(
    "operatorenfrage-test: %s =Es gibt die Farben \x1b[37mWeiß\x1b[30mSchwarz\x1b[34mBlau\x1b[35mMagenta\x1b[36mCyan\x1b[32mGrün und \x1b[31mRot\x1b[37m ",
    (eingabe) => {
      expect(errorcontrol(eingabe)).toEqual(
        "Es gibt die Farben \x1b[37mWeiß\x1b[30mSchwarz\x1b[34mBlau\x1b[35mMagenta\x1b[36mCyan\x1b[32mGrün und \x1b[31mRot\x1b[37m"
      );
    }
  );
  test.each([[""]])("operatorenfrage-test: %s = ", (eingabe) => {
    expect(errorcontrol(eingabe)).toEqual("");
  });
});
