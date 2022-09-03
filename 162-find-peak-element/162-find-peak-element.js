/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const len = nums.length
    let left = 0,
        right = len-1
    
    while (left <= right){
        const mid = ~~((left + right)/2)
        if (nums[mid]>(nums[mid+1] || -Infinity) &&
            nums[mid]>(nums[mid-1] || -Infinity)){
            return mid
        }
        
        if (nums[mid+1] > nums[mid] ){
            left = mid+1
        } else {
            right = mid-1
        }
    }        
};

// [1,2,1,3,5,6,4]
//  0 1 2 3 4 5 6 
//  L     M      R
//        L M    R
//          L M  R       

// Within any given range there must exist a number larger than its neighbor
    