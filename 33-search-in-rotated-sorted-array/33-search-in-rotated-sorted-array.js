/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        
        if (nums[mid]==target){return mid}
        if (nums[left] <= nums[mid]){
            if (target >= nums[left] &&
                target < nums[mid]
               ) right = mid-1
            else left = mid+1
        } 
        else {
            if (target <= nums[right] &&
                target > nums[mid]) 
                left = mid+1
            else right = mid-1
        }
    }
    return -1
};

//  0
// [4,5,6,7,0,1,2]
//  0 1 2 3 4 5 6
// nums[left] = 4
// nums[right] = 2
// nums[3] = 7
// target is not between 4-7
