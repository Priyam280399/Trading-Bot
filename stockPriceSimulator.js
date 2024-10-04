function getMockStockPrice() {
    return (Math.random() * 100).toFixed(2); // returns a price between 0 and 100
  }
  
  module.exports = { getMockStockPrice };