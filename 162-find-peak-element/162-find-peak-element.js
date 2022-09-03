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
//          L M  R  

// Within any given position, one of its neighbors will be larger.
// unless that position is peak.

// we can pick the interval LEFT or RIGHT of mid.
// side doesnt matter as long as the adjacent number is larger than mid.
    