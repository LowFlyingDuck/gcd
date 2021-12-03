// recursive=
const gcd = (a, b) => (a % b === 0) ? a >= b ? b : a : (console.log(a + ' = ' + b + ' * ' + Math.floor(a/b) + ' + ' + a%b), gcd(b, a % b));

const encrypt = (m, e, n) => BigInt(m)**BigInt(e) % BigInt(n);
const decrypt = (c, d, n) => BigInt(c)**BigInt(d) % BigInt(n);

const getD = (p, q, e) => { let i = 0; console.log('1 = x ' + ' * ' + e + ' mod ' + (p-1)*(q-1)); while((i*e) % ((p-1)*(q-1)) !== 1) i++; return i; } 

const p = 37;
const q = 31;
const e = 7;

console.log(decrypt(917, 463, p*q));