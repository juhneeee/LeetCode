/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0
    nums.forEach((num,i)=>{
        if (i <= max){
            max = Math.max(max, num+i)
        }
    })
    return max >= nums.length-1
};