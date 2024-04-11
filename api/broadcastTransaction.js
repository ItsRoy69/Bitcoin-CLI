const axios = require('axios');
const { generateAddress } = require('../wallet/generateAddress');

async function broadcastTransaction(mnemonic, apiKey) {
    try {
        const walletAddress = generateAddress(mnemonic);
        console.log(`Fetching transactions for address: ${walletAddress}`);

        const apiUrl = `https://api.blockcypher.com/v1/btc/test3/addrs/${walletAddress}/full`;

        const config = {
            headers: {
                Authorization: `Token ${apiKey}`,
            },
        };

        const response = await axios.get(apiUrl, config);

        const transactions = response.data.txs || [];

        const formattedTransactions = transactions.map((tx) => {
            const amountBTC = tx.outputs.reduce((total, output) => {
                return total + output.value;
            }, 0) / 100000000;

            return {
                date: new Date(tx.confirmed || tx.received),
                amountBTC: amountBTC,
                confirmations: tx.confirmations || 0,
                address: tx.inputs[0].addresses[0],
            };
        });

        return formattedTransactions;
    } catch (error) {
        console.error('Error fetching Bitcoin transactions:', error.message);
        throw error;
    }
}

module.exports = { broadcastTransaction };
