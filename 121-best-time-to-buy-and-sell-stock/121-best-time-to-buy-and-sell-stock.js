/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity
    let currProfit = 0
    
    for (let i=0; i<prices.length; i++){
        if(prices[i]< minPrice){
            minPrice = prices[i]
        }
        if(prices[i]-minPrice > currProfit){
            currProfit = prices[i]-minPrice
        }
    }
    return currProfit
};