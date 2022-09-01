/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const freq = new Set()
    nums.forEach(element => {
        freq.has(element) ? freq.delete(element):freq.add(element) 
    })
    for (let a of freq){
        return a
    }
};