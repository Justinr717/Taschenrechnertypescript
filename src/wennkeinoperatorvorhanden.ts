import { holeFarbe } from "./holrfarbe";

export function fallskeinoperatorvorhanden(awnser: string): string {
  if (
    awnser == "" ||
    awnser == "Hallo" ||
    awnser == "ABC" ||
    /^[a-zA-Z]{1}$/.test(awnser)
  ) {
    return "Bitte Operatoren Eingeben";
  }
  return "";
}
export function farbigertext2(error: string, farbe: string): void {
  let farbcode = holeFarbe(farbe);
  console.log(farbcode, error, "\x1b[0m");
}
