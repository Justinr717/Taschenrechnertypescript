import { errorcontrol } from "./errorcontrol";
import { holeFarbe } from "./holrfarbe";
import { operatorenfrage } from "./operatorenfrage";
import { Resetten } from "./reset";
import { fallskeinoperatorvorhanden } from "./wennkeinoperatorvorhanden";

export function verteiler(verteilterwert: string): boolean {
  let farbe = holeFarbe(verteilterwert);
  if (farbe != "") {
    console.log(farbe, "Die Farbe ist jetzt ", verteilterwert);
    return true;
  }
  let frage = errorcontrol(verteilterwert);
  if (frage != "") {
    console.log(frage);
    return true;
  }
  let awnser = fallskeinoperatorvorhanden(verteilterwert);
  if (awnser != "") {
    console.log(awnser);
    return true;
  }
  let opfrage = operatorenfrage(verteilterwert);
  if (opfrage != "") {
    console.log(opfrage);
    return true;
  }
  let hardreset = Resetten(verteilterwert);
  if (hardreset != "") {
    console.log(hardreset);
    return true;
  }
  return false;
}
