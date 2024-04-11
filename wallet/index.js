const { generateAddress } = require('./generateAddress');
const { generateBip39Mnemonic } = require('./generateBip39Mnemonic');
const { generateUnusedBitcoinAddress } = require('./generateUnusedBitcoinAddress');
const { listWallets } = require('./listWallets');
const { loadWallet } = require('./loadWallet');
const { saveWallet } = require('./saveWallet');

module.exports = {
  generateAddress,
  generateBip39Mnemonic,
  generateUnusedBitcoinAddress,
  listWallets,
  loadWallet,
  saveWallet
};