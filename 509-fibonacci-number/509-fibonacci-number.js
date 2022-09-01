/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n==0 || n== 1) {
        return n
    }
    if (memo[n]){
        return memo[n]
    }
    let val = fib(n-1, memo) + fib(n-2,memo)
    memo[n]= val
    return val
};