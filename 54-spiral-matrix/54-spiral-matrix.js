/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
const rows= matrix.length,
      cols= matrix[0].length,
      result= [],
      cos = [1, 0, -1, 0],
      sin = [0, 1, 0, -1],
      visited= new Set()
let x= 0,
    y= 0,
    dir= 0,
    steps=1
while(steps <= rows*cols){
    let nextX= x + sin[dir],
        nextY= y + cos[dir]
    if (nextX < 0 || nextX >= rows ||  //checking if x,y is invalid
        nextY < 0 || nextY >= cols ||  //or if it is already visited
        visited.has(nextX+","+nextY)){
        dir= (dir+1) %4     
    }
    result.push(matrix[x][y])
    visited.add(x+","+y)     // add current spot to the set
    x+= sin[dir]
    y+= cos[dir]
    steps++
}
return result
};