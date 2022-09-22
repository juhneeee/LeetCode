/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(/\s+/)
    let revArr = []
    for (let i in arr){
        revArr.push(arr[i].split("").reverse().join(""))
    }
    return revArr.join(" ")
};