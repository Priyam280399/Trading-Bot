const express = require('express');
const { getMockStockPrice } = require('./stockPriceSimulator');
const { tradingStrategy } = require('./tradingLogic');
const { getSummaryReport, recordTrade } = require('./profitLossTracker');
const state = require('./state'); // Import shared state

const app = express();
const PORT = 3000;

// Store the last price to compare with the new price
let lastStockPrice = getMockStockPrice();

// Function to run the trading bot
function runTradingBot() {
  setInterval(() => {
    const currentStockPrice = getMockStockPrice();
    console.log(`Current Stock Price: $${currentStockPrice}`);

    // Apply the trading strategy
    tradingStrategy(currentStockPrice, lastStockPrice);

    // Update last price
    lastStockPrice = currentStockPrice;
  }, 5000); // Runs every 5 seconds (or any interval you like)
}

// Route to start the trading bot
app.get('/start', (req, res) => {
  runTradingBot();
  res.send('Trading bot started...');
});

// Route to get a summary report
app.get('/summary', (req, res) => {
  const summary = getSummaryReport();
  res.json(summary);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
