// recursive=
const gcd = (a, b) => (a % b === 0) ? a >= b ? b : a : (console.log(a + ' = ' + b + ' * ' + Math.floor(a/b) + ' + ' + a%b), gcd(b, a % b));

const encrypt = (e, n, m) => m**e % n;
const decrypt = (c, d) => c**d;

const getD = (p, q, e) => { let i = 0; while((i*e) % ((p-1)*(q-1)) !== 1) i++; return i; } 

const p = 43;
const q = 53;
const e = 11;

console.log(getD(p, q, e));