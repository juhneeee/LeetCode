/**
 * @param {number[]} nums
 * @return {number}
 */

// iterate over array creating a table of max earning possible
var rob = function(nums) {    
    const memo= {}
    const len = nums.length
    let n = 0
    
    if (len==1){return nums[0]}

    while (n < len){
        if (n==0 || n==1){
            memo[n] = nums[n]
        } else {
            const val = Math.max(memo[n-2]+ nums[n],
                                (memo[n-3] || 0)+nums[n])
            memo[n] = val
        }
        n++
    }
    return Math.max(memo[len-1], memo[len-2])
    
};