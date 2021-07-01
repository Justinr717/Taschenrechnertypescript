export function quadrat(a: number, b: number): number {
  if (a == 0) {
    throw new Error("Man kann null nicht quadrieren");
  }
  let quadrat = a;
  for (let schritt = 0; schritt < b - 1; schritt++) {
    quadrat = a * quadrat;
  }
  return quadrat;
}
export function plus(a: number, b: number): number {
  let plus = a + b;
  return plus;
}
export function mal(a: number, b: number): number {
  if (b == 0 || a == 0) {
    throw new Error("Man kann null nicht multiplizieren");
  }
  let mal = a * b;
  return mal;
}
export function minus(a: number, b: number): number {
  let minus = a - b;
  return minus;
}
export function geteilt(a: number, b: number): number {
  if (b == 0) {
    throw new Error("Teiler darf nicht null sein");
  }
  let geteilt = a / b;
  return geteilt;
}
