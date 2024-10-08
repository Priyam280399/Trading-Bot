# Trading Bot Backend Application

## Documentation

### Trading Logic
The bot uses a simple trading strategy:
- **Buy**: Purchases 1 unit of stock when the price drops by 2%.
- **Sell**: Sells 1 unit of stock when the price increases by 3%.
- The bot tracks the balance, stock holdings, and calculates profit/loss based on the trades made.

### API Usage
- **Start Trading**:  
  `GET /start`  
  Starts the trading bot and begins monitoring stock prices.
  
- **Get Summary**:  
  `GET /summary`  
  Returns a report detailing the current balance, stock holdings, total profit/loss, and trade history.

### How to Run the Application
1. Clone the repository:  
   `git clone https://github.com/Priyam280399/Trading-Bot.git`
2. Install dependencies:  
   `npm install`
3. Start the server:  
   `node server.js`
4. Use the API:
   - Navigate to `http://localhost:3000/start` to start the bot.
   - Navigate to `http://localhost:3000/summary` to view the summary report.
