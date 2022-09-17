/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const sorted = changed.sort((a,b)=> a-b)
    const stack = []
    const result = []
    
    for (let i=0; i<sorted.length; i++){
        if(stack.length==0){stack.push(sorted[i])}
        else if (sorted[i] == 2* stack[0]){
            result.push(stack.shift())
        } else if (sorted[i] > 2* stack[0]){
            return []
        } else stack.push(sorted[i])
    }
    return stack.length ? [] : result
};