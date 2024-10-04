// profitLossTracker.js
const state = require('./state'); // Import shared state

let trades = [];

function recordTrade(type, stockPrice) {
  const trade = { type, stockPrice, timestamp: new Date() };
  trades.push(trade);
}

function getSummaryReport() {
  const totalProfitLoss = trades.reduce((total, trade) => {
    if (trade.type === 'sell') {
      return total + (trade.stockPrice - state.purchasePrice); // Calculate profit
    }
    return total;
  }, 0);

  return {
    balance: state.balance,
    stockHolding: state.stockHolding,
    totalProfitLoss,
    trades,
  };
}

module.exports = { recordTrade, getSummaryReport };
