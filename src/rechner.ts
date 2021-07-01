import { quadrat } from "./operatoren";
import { geteilt } from "./operatoren";
import { minus } from "./operatoren";
import { plus } from "./operatoren";
import { mal } from "./operatoren";
export type Eingabe = { a: number; operator: string; b: number };

export function rechner(eingabe: Eingabe): number {
  switch (eingabe.operator) {
    case "+":
      return plus(eingabe.a, eingabe.b);

    case "-":
      return minus(eingabe.a, eingabe.b);

    case "*":
      return mal(eingabe.a, eingabe.b);

    case "/":
      return geteilt(eingabe.a, eingabe.b);

    case "^":
      return quadrat(eingabe.a, eingabe.b);

    default:
      throw new Error("Math Error");
  }
}
export function operatorensortierer(nutzerEingabe: string): number {
  let zahlen: number[] = [];
  let operatoren: string[] = [];
  let letzteZahl = "";
  for (let i = 0; i < nutzerEingabe.length; i++) {
    if (
      nutzerEingabe[i] == "+" ||
      nutzerEingabe[i] == "-" ||
      nutzerEingabe[i] == "*" ||
      nutzerEingabe[i] == "/" ||
      nutzerEingabe[i] == "^"
    ) {
      operatoren.push(nutzerEingabe[i]);
      zahlen.push(parseInt(letzteZahl));
      letzteZahl = "";
    } else {
      letzteZahl = letzteZahl + nutzerEingabe[i];
    }
  }
  return hauptteilpunktvorstrich(letzteZahl, zahlen, operatoren);
}
function hauptteilpunktvorstrich(
  letzteZahl: string,
  zahlen: Array<number>,
  operatoren: Array<string>
): number {
  {
    zahlen.push(parseInt(letzteZahl));
    let zwischenergebnis = 0;
    let operatorenIndex = -2;
    while (operatorenIndex != -1) {
      operatorenIndex = operatoren.indexOf("*");
      if (operatorenIndex == -1) {
        operatorenIndex = operatoren.indexOf("/");
      }
      if (operatorenIndex == -1) {
        operatorenIndex = operatoren.indexOf("^");
      }
      if (operatorenIndex != -1) {
        let [operator] = operatoren.splice(operatorenIndex, 1);
        let eingabe: Eingabe = { a: 0, operator: "", b: 1 };

        let [a, b] = zahlen.splice(operatorenIndex, 2);
        eingabe.a = a;
        eingabe.b = b;
        eingabe.operator = operator;
        zwischenergebnis = rechner(eingabe);
        zahlen.splice(operatorenIndex, 0, zwischenergebnis);
      }
    }
    return plusundminusrecheneinheit(operatoren, zahlen);
  }
}
function plusundminusrecheneinheit(
  operatoren: Array<string>,
  zahlen: Array<number>
): number {
  let zwischenergebnis: number = 0;
  if (operatoren.length == 0) {
    return zahlen[0];
  }
  while (operatoren.length > 0) {
    let eingabe: Eingabe = { a: 0, operator: "", b: 1 };

    eingabe.a = zahlen.shift() || 0;

    eingabe.operator = operatoren.shift() || "";

    eingabe.b = zahlen.shift() || 0;

    zwischenergebnis = rechner(eingabe);

    zahlen.splice(0, 0, zwischenergebnis);
  }
  return zwischenergebnis;
}
