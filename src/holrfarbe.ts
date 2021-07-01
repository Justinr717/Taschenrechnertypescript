export function holeFarbe(farbe: string): string {
  if (farbe == "Rot" || farbe == "rot" || farbe == "red" || farbe == "Red") {
    return "\x1b[31m";
  }
  if (farbe.toLowerCase() == "grün" || farbe.toLowerCase() == "green") {
    return "\x1b[32m";
  }
  if (farbe.toLowerCase() == "weiß" || farbe.toLowerCase() == "white") {
    return "\x1b[37m";
  }
  if (farbe.toLowerCase() == "cyan") {
    return "\x1b[36m";
  }
  if (farbe.toLowerCase() == "magenta") {
    return "\x1b[35m";
  }
  if (farbe.toLowerCase() == "blau" || farbe.toLowerCase() == "Blue") {
    return "\x1b[34m";
  }
  if (farbe.toLowerCase() == "schwarz" || farbe.toLowerCase() == "black") {
    return "\x1b[30m";
  }
  return "";
}
