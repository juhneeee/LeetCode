/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const hash = {}
    let min = 10000
    let max = 0
    const memo = {}
    
    nums.forEach(num =>{
        hash[num] = hash[num] || 0
        hash[num] += num
        if (num < min) min= num
        if (num > max) max= num
    })
    for(let i=min; i<=max; i++){
        if (i==min || i==min+1){
            memo[i] = hash[i] || 0
        } else {
            const val = Math.max(memo[i-2] + (hash[i] || 0),
                                (memo[i-3] || 0)+(hash[i] || 0))
            memo[i] = val
        }
    }
    return Math.max(memo[max], memo[max-1] || 0)
};


// converted the problem into house robber.
// changed array of nums into a hash of num:sum
// then i iterated over this with houserobber solution