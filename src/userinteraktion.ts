import { operatorensortierer } from "./rechner";
import { verteiler } from "./verteiler";
import { farbigertext2 } from "./wennkeinoperatorvorhanden";

const readline = require("readline");
let input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function beenden(ende: string): boolean {
  if (
    ende.toLowerCase() == "ende" ||
    ende.toLowerCase() == "aus" ||
    ende.toLowerCase() == "beenden" ||
    ende.toLowerCase() == "stop" ||
    ende.toLowerCase() == "off" ||
    ende.toLowerCase() == "turn off"
  ) {
    input.close();
    return true;
  }
  return false;
}
export function eingabe(nutzerEingabe: string): void | number {
  try {
    if (verteiler(nutzerEingabe) == true) {
      return;
    }
    let ende = beenden(nutzerEingabe);
    if (ende == true) {
      console.log("Beendet");
      return;
    }
    let endergebnis = operatorensortierer(nutzerEingabe);
    console.log(endergebnis + "");
  } catch (error) {
    farbigertext2(error.message, "Rot");
    return;
  }
}
console.log("\x1b[37m", "Taschenrechner", "\x1b[0m");
console.log("\x1b[37m", "---------------");
console.log("\x1b[37m", "Bitte gib deine Operatoren ein \n");
input.on("line", eingabe);
console.log(
  "\x1b[37m",
  "Der Text wird standartmäßig in Weiß angezeigt",
  "\x1b[0m"
);
export function nachLeeren() {}
