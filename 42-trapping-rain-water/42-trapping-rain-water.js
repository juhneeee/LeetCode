/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {    
    // iterate check if bar is a peak
    const pools= {}
    let left = 0
    let right = height.length-1
    let rubble = 0
    let result = 0
    
    for (let i=0; i< height.length; i++){
        rubble+= height[i]
        
        // left to right peaks
        if (height[i] >= height[left]){
                pools[left]= i
                left = i
        }
    }
    for (let i=height.length-1; i>= 0; i--){
        // right to left
        if (height[i] >= height[right]){
                pools[i]= right
                right = i
            
        }
    }
    console.log(pools)
    for (let k in pools){
        let h = Math.min(height[k],height[pools[k]]),
            b = pools[k] - k,
            area = b*h;
        result += Math.max(area,0)
    }
    return result - rubble + height[left]
};