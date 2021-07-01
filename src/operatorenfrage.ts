export function operatorenfrage(opfrage: string): string {
  if (
    opfrage.toLowerCase() == "welche operatoren gibt es" ||
    opfrage.toLowerCase() == "was unterstützt der taschenrechner" ||
    opfrage.toLowerCase() == "welche rechenoperatoren werden unterstützt" ||
    opfrage.toLowerCase() == "operatoren" ||
    opfrage.toLowerCase() == "rechenoperatoren" ||
    opfrage.toLowerCase() == "funktionen rechner" ||
    opfrage.toLowerCase() == "zeichen" ||
    opfrage.toLowerCase() == "plus" ||
    opfrage.toLowerCase() == "minus" ||
    opfrage.toLowerCase() == "mal" ||
    opfrage.toLowerCase() == "geteilt" ||
    opfrage.toLowerCase() == "quadrat"
  ) {
    return "Es gibt nur die Operatoren +,-,*,/und auch quadrat^";
  }
  return "";
}
