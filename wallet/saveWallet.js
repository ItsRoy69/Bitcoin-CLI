const fs = require('fs').promises;
const path = require('path');
const { generateAddress } = require('./generateAddress');

const walletDirectory = path.join(__dirname, '..', 'Wallet List');

async function saveWallet(walletName, wallet) {
    try {
        await fs.mkdir(walletDirectory, { recursive: true });

        const btcAddress = generateAddress(wallet.mnemonic);
        const filePath = path.join(walletDirectory, `${walletName}.json`);
        const walletData = {
            name: walletName,
            mnemonic: wallet.mnemonic,
            address: btcAddress
        };

        await fs.writeFile(filePath, JSON.stringify(walletData, null, 2));

        console.log(`Wallet "${walletName}" saved locally.`);
        console.log(`Path: ${filePath}`);
    } catch (error) {
        console.error('Error saving wallet:', error);
    }
}

module.exports = { saveWallet };
