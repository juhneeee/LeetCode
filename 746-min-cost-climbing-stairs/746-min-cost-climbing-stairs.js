/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {}
    const top = cost.length+1
    
    function minCost(n){
        if(memo[n]){
            return memo[n]
        } if (n==0 || n== 1){
            memo[n]=0
            return 0
        }
        const val = Math.min(minCost(n-1)+(cost[n-1]||0),
                             minCost(n-2)+cost[n-2]||0)
        memo[n]= val
        return val
    }
    minCost(top)
    console.log(memo)
    return memo[top]

};