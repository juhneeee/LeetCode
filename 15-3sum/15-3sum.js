/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    const result = []
    
    for (let i=0; i<nums.length; i++){
        if (i>0 && nums[i] == nums[i-1]) {continue}
        
        const target = nums[i]
        const arr = nums
        let left = i+1
        let right = arr.length-1
        
        while (left<right){
            // console.log({i,left,right})
            let currSum = target + arr[left] + arr[right]
            if (currSum == 0){
                result.push([target, arr[left], arr[right]])
                left++
                while(nums[left] == nums[left-1] && left < right){
                    left++
                }
            } else if(currSum < 0){
                left++
            } else {
                right--
            }            
        }
        
    }
    
    return result
};

// [-1, 0, 1, 1, 2]

// {1: [0,1], [-1,2]}