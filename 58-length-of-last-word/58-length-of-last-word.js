/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(/\s+/)
    console.log(arr)
    while (arr.length){
        if (arr[arr.length-1]==" " || arr[arr.length-1]==""){
            arr.pop()
        } else {return arr[arr.length-1].length}
    }
};