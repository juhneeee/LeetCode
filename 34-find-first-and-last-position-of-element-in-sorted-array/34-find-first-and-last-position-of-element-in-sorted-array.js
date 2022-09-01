/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solved by using binary search to find first and last target
// first is just binary search with specific case to continue
// last and left can be initialized to the index of first

var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    let first = -1
    
    while (left <= right && first == -1){
        const mid = ~~((left + right)/2)
        
        if (nums[mid] == target && nums[mid-1] != target){
            first = mid
        }
        if (nums[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    } 
    if(first == -1){
        return [-1,-1]
    }
    
    left = first
    right = nums.length - 1
    
    let last = first
    
    while (left <= right){
        const mid = ~~((left + right)/2)
        
        if (nums[mid] == target && nums[mid+1] != target){
            last = mid
        }
        if (nums[mid] <= target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    } 
    return [first,last]
};