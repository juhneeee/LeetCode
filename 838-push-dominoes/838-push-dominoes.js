/**
 * @param {string} dominoes
 * @return {string}
 */


var pushDominoes = function(dominoes) {
    ".L.R...LR..L.."
    ".L/./R...L/R..L/.."
    let newStr = dominoes.replace(/L/g,"L,").replace(/R/g,",R")
    let arr = newStr.split(",")
    console.log(arr)
    
    let result = ""
    for(let i=0; i<arr.length;i++){
        const len = arr[i].length,
              boolL = /L/.test(arr[i]),
              boolR = /R/.test(arr[i]);
        if (boolL && boolR){
            let str = len%2 ? "." : "";
            for (let i=1; i<= len/2; i++){
                str = "R"+str+"L"
            }
            result+= str
        } else if (boolL || boolR) {
            let char = boolL ? "L" : "R",
                str = "";
            for(let i=0; i<len; i++){
                str += char
            }
            result+= str
        } else {
            result += arr[i]
        }
    }
    console.log(result)
    return result
};