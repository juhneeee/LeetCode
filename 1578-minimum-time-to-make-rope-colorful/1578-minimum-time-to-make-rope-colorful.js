/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let slow = 0,
        fast = 1,
        time = 0;
    while (fast < colors.length){
        if(colors[slow] == colors[fast]){
            if (neededTime[slow]>neededTime[fast]){
                time += neededTime[fast]
            } else {
                time += neededTime[slow]
                slow = fast
            }
        } else {
            slow = fast}
        fast++
    }
    return time
};