/**
 * @param {number} n
 * @return {number}
 */

// base cases. memo case. recursive call + add to memo
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