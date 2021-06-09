require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give close brown slab carpet regret maze clump grace pave army gather'; 
let testAccounts = [
"0x60c56d6aed8290240fdce7e733905645c2bb48e8aa9b0faef5c95e0a48e0be73",
"0x955494a089b55feddbafaee6dd9bcfa17e0ad028456dad247133b6adaf29a017",
"0x9ab939e46a361f081d9711eaec69e069c172bffa53157b6ea6d7f74cdde1c0ac",
"0xc99b6d03759a01dbe64c16d8563ca2b481e85522a88d4f988e1a9621d60c576c",
"0x052aa383fff25ec339c53193402be30047b4c20ad46a71f0028121872e28ed2a",
"0xefbc830c0d5196b0c2ab8cb98a520cd956aa7ff4655a8ebfc7d5df12f8cc11f6",
"0x76ec5e88229fbbe75faf7b3d5f03b2505f1a236f49218167803f09a72fecb7ba",
"0x0b7f2780e62febed15ba845a89829962ebda01788bc65f3a1991ea2c8e4d5cbd",
"0x3574eac20ea55029c54f0b36528013c50444879c876d8086a3a474cb9bd33679",
"0x9eaddbe822927dd891d6a67d4ccaae92951c95a93b18d1f286e18eceb27a088c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


