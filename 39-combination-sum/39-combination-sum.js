/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
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
// target 7
// 2 2 2 // backtrack
// 2 2 3 // push , backtrack
// 2 3
// 2 6
// 2 7
// 3 3
// 3 6
// 3 7
// 6
// 7