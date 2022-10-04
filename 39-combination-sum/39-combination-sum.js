/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Runtime: 134 ms, faster than 55.75% of JavaScript online submissions for Combination Sum.
// Memory Usage: 45 MB, less than 88.15% of JavaScript online submissions for Combination Sum.

var combinationSum = function(candidates, target) {
    const res = []
    
    function backtrack(path, start, sum){
        if(sum == target){
            res.push([...path])
            return
        }
        if(sum == target - 1 || sum > target){
            return
        }
        
        for (let i=start; i<candidates.length; i++){
            sum+= candidates[i]
            path.push(candidates[i])
            
            backtrack(path, i, sum)
            
            sum-= candidates[i]
            path.pop()
        }
    }
    
    backtrack([], 0, 0)
    return res
};
