/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // x is target
    // k is quantity
    arr.sort((a,b)=> Math.abs(a-x)-Math.abs(b-x))
    console.log(arr)
    const result = arr.slice(0,k)
    console.log(result)
    result.sort((a,b)=>a-b)
    console.log(result)
    return result
};