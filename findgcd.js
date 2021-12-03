// recursive=
const gcd = (a, b) => (a % b === 0) ? a >= b ? b : a : (console.log(a + ' = ' + b + ' * ' + Math.floor(a/b) + ' + ' + a%b), gcd(b, a % b));

const encrypt = (e, n, m) => m**e % n;
const decrypt = (c, d) => c**d;

const p = 43;
const q = 53;
const e = 7;

console.log(gcd((p-1)*(q-1), e));