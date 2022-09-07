/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows=matrix.length,
          cols=matrix[0].length
    
    for(let i=0; i<rows; i++){
        if(matrix[i][0] <=target && 
           matrix[i][cols-1] >= target){
            let l=0,
                r= cols-1
            while (l<=r){
                const mid= ~~((l+r)/2)
                if(matrix[i][mid]==target){return true}
                if(matrix[i][mid]>target){
                    r = mid-1
                } else {l = mid+1}
            }
        }
    } return false
};