/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const OFFSET= "A".charCodeAt(0)-1
    const len = columnTitle.length
    let result = 0
    
    for (let i =0; i< len; i++){
        const power = len - i -1
        result += (columnTitle[i].charCodeAt(0)-OFFSET)* 26**power
    }
    return result
};
