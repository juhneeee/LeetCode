/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let i = 0
    let j = 0
    let steps = 0
    
    let dir = 0
    const sin= [0,1,0,-1]
    const cos= [1,0,-1,0]
    
    const result = []
    for (let a = 0; a< n ; a++){
        result.push([])
    }
    while (steps < n*n){
        result[i][j] = steps+1
        let nextI= i+sin[dir],
            nextJ= j+cos[dir]
        
        if(nextI >= n ||
           nextI < 0 ||
           nextJ >= n ||
           nextJ < 0 ||
           result[nextI][nextJ]){
            dir = (dir + 1) %4
        }
        i += sin[dir]
        j += cos[dir]
        steps++
    }
    return result
};