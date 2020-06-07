function gcd(a: number, b: number): number {
  if (a % b == 0) {
    return b;
  }
  return gcd(b, a % b);
}

console.log(gcd(12, 3));
console.log(gcd(24, 12));
console.log(gcd(126, 34));
