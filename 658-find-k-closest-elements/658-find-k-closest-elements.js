/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // x is target
    // k is quantity
    let minSum = null,
        minIndex = 0,
        sum = 0;
    
    for(let i=0; i<k; i++){
        sum += Math.abs(arr[i]-x)
    }
    minSum = sum

    for(let i=k; i< arr.length; i++){
        sum += Math.abs(arr[i]-x) - Math.abs(arr[i-k]-x)
        if (sum < minSum){
            minSum = sum
            minIndex = i-k+1
        }
    }
    const res = []
    for (let i = minIndex; i< minIndex+k; i++){
        res.push(arr[i])
    }
    return res
};