/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n, memo= {}) {
    if (n==0 || n==1){return n}
    if (n==2) return 1
    if(memo[n]){
        return memo[n]
    }
    
    const val = tribonacci(n-3,memo) + tribonacci(n-2,memo) + tribonacci(n-1,memo)
    memo[n]=val
    return  val
};