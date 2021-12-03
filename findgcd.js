// recursive=
const gcd = (a, b) => (a % b === 0) ? a >= b ? b : a : (console.log(a + ' = ' + b + ' * ' + Math.floor(a/b) + ' + ' + a%b), gcd(b, a % b));

console.log(gcd(2322, 654));