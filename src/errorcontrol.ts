export function errorcontrol(frage: string): string {
  if (frage.toLowerCase() == "welche farben gibt es") {
    return "Es gibt die Farben \x1b[37mWeiß\x1b[30mSchwarz\x1b[34mBlau\x1b[35mMagenta\x1b[36mCyan\x1b[32mGrün und \x1b[31mRot\x1b[37m";
  }
  if (frage.toLowerCase() == "gibt es gelb") {
    return "Die Farbe gibt es nicht";
  }
  if (frage.toLowerCase() == "gibt es grau") {
    return "Die Farbe gibt es nicht";
  }
  if (frage.toLowerCase() == "gibt es braun") {
    return "Die Farbe gibt es nicht";
  }
  if (frage.toLowerCase() == "regenbogen") {
    return "\x1b[35mEs \x1b[32mgibt \x1b[37mkeine \x1b[36mRegegenbogenoption\x1b[37m";
  }
  return "";
}
