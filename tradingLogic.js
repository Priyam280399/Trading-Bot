// tradingLogic.js
const state = require('./state'); // Import shared state

function buyStock(stockPrice) {
  if (state.balance > stockPrice) {
    state.stockHolding += 1;
    state.balance -= stockPrice;
    state.purchasePrice = stockPrice;
    console.log(`Bought at $${stockPrice}`);
  }
}

function sellStock(stockPrice) {
  if (state.stockHolding > 0) {
    state.stockHolding -= 1;
    state.balance += stockPrice;
    const profit = stockPrice - state.purchasePrice;
    console.log(`Sold at $${stockPrice} with a profit of $${profit.toFixed(2)}`);
  }
}

function tradingStrategy(stockPrice, lastPrice) {
  const priceChange = ((stockPrice - lastPrice) / lastPrice) * 100;

  // Buy if price dropped by 2% or more
  if (priceChange <= -2) {
    buyStock(stockPrice);
  }

  // Sell if price increased by 3% or more
  if (priceChange >= 3) {
    sellStock(stockPrice);
  }
}

module.exports = { tradingStrategy };
