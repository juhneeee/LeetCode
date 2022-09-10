/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const memo={0:0}
    let maxD=0
    if(nums.length==1){return 0}
    
    for(let i=0; i<nums.length; i++){
        const num=nums[i]
        if (num+i > maxD){
            for(let j=maxD+1; j<=num+i; j++){
                memo[j]= memo[i]+1
                if(j==nums.length-1){return memo[j]}
            }
            maxD= num+i
        }
    }
    console.log(memo)
};

// create a memo storing index: number of jumps to reach index
// keeptrack of var maxD
// Each time we can move futher than maxD; Also add new vals in between to indicate number of jumps
// stop when we reach last index (nums length-1)