import { nachLeeren } from "./userinteraktion";
const readline = require("readline");

export function Resetten(hardreset: string): string {
  if (
    hardreset.toLowerCase() == "reset" ||
    hardreset.toLowerCase() == "zurücksetzen" ||
    hardreset.toLowerCase() == "verlauf löschen" ||
    hardreset.toLowerCase() == "standart"
  ) {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout, nachLeeren);
  }
  return "";
}
