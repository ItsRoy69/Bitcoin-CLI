const fs = require('fs');
const path = require('path');

const walletDirectory = path.join(__dirname, '..', 'Wallet List');

function loadWallet(walletName) {
    try {
        const filePath = path.join(walletDirectory, `${walletName}.json`);
        if (!fs.existsSync(filePath)) {
            console.error('No wallet directory found.');
            return null; 
        }

        const walletData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(walletData);

    } catch (error) {
        console.error('Error loading wallet:', error.message);
        throw error;
    }
}

module.exports = { loadWallet };