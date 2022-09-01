/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {}
    let result
    nums.forEach(num => {
        hash[num] = hash[num] || 0
        hash[num]++
        if (hash[num] >= nums.length/2){
            result= num
        }
    })
    return result
};

// create hash table
// while you create it you can check if you found majority