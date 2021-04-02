require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index release place concert harvest photo equal gaze'; 
let testAccounts = [
"0x762fb87e056072e650ebc31a78bfaca5c411f67fe3744a83bdf339d3a77526c5",
"0x0dd2bd948c934d77c6c51ee2b114cc7f515649c7566bb640a5a8b556273675ef",
"0x6866cbac6962c528a2126ec56718b2924f5b8eb3fd3dba3575385f6f5978ab8b",
"0x96560b8f75bf3e3423170f11b56108984f9b8e0e01cb9f757efe74b9b55b9b7c",
"0x7807adce77d9543f8ff637e4cd88b0d4d4dd5c7623cc9269ea6203533726eaca",
"0xa873c34a329e28e28c3ea1159d959823621930c374c93d12b751312e098f1ca8",
"0x44c0cc2ef176a52d97469f594d70f8d827223720b88e68fec9a118540c0d4a9a",
"0x89d631597b59d7680d1468d8c157531ea1d2d810713828474b7505b34b0973db",
"0x90b8113a5d402816dfba79d107344519affe30bd91646c16257a3e0b516d3ee1",
"0xf5266d12bec450017d004d0a61eb1912ac94fea6e3504795bb826e1f7105d7a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
