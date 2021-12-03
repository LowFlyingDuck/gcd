const fs = require('fs');
const crypto = require('crypto');

const hexToBinary = hex => hex.split('').map((e, i) => ('000'+parseInt(e, 16).toString(2)).slice(-4)+(++i%30===0 ? '\n' : '')).join('').replace(/1/g, '█').replace(/0/g, ' ');

function createPair() {
  let keypair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    // publicKeyEncoding: {
    //   type: 'spki',
    //   format: 'der'
    // },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
  let d = Date.now();
  let dir = fs.readdirSync(__dirname);
    fs.writeFileSync('./public.pem', keypair.publicKey.export({ type: 'pkcs1', format: 'pem' }));
    fs.writeFileSync(`./private.pem`, keypair.privateKey);

    // i am aware, that conversion should be done using uint-8 array, im just lazy
    fs.writeFileSync('./keymap.txt', hexToBinary(keypair.publicKey.export({ type: 'pkcs1', format: 'der' }).toString('hex')));
}

function createCert() {

}

createPair();