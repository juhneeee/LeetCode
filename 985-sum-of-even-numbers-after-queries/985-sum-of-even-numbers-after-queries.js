/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const result = []
    let sum = 0
    for (let i in nums){
        nums[i]%2 ? null : sum+= nums[i]
    }
    
    for (let [val,i] of queries){
        if(nums[i]%2){
            //oddcase
            val % 2 ? sum+= nums[i]+val : null
            nums[i] % 2 ? null: sum+= nums[i]
        } else {
            //evencase
            val % 2 ? sum-= nums[i] : sum+= val
        }
        nums[i] += val
        result.push(sum)
    }
    return result
};