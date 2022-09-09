/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let step = 1,
        m = grid.length,
        n = grid[0].length,
        maxStep= m+n-1
    
    while (step < maxStep){
        for(let i=0; i< Math.max(m,n); i++){
            if (i<m&&step-i>=0&&step-i<n){
                let minD= Math.min(
                    i>0?grid[i-1][step-i]:Infinity,
                    step>i?grid[i][step-i-1]:Infinity)
                // console.log(i, step-i, minD)
                grid[i][step-i]+= minD  
            }
        }
        step++
    }
    console.log(grid)
    return grid[m-1][n-1]
};

//for each valid node, check min of left and up adjacent. then increment it