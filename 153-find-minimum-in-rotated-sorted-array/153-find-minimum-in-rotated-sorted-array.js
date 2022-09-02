/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const len = nums.length
    let left = 0,
        right = len-1
    
    while (left <= right){
        const mid = ~~((left+right)/2)
        
        if (nums[mid] <= nums[(mid-1+len)%len]){
            return nums[mid]
        // the smallest number will appear after the largest number.
        // the smallest number is the only number where adjacent vals decrease.
            
        } if (nums[mid] > nums[right]){
            left = mid+1
        } else {
            right = mid-1
        }
    }
};