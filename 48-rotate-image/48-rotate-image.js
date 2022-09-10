/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    
    for (let i = 0; i < m; i++){
        for (let j=i+1; j < n; j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    
    for (let i=0; i < m; i++){
        matrix[i].reverse()
    }
};