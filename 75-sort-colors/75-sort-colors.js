/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const freq = [0,0,0]
    
    nums.forEach(num=>{
        freq[num]++
    })
    console.log(freq)
    let n=0
    for (let i = 0; i <= 2 ; i++){
        while (freq[i]>0){
            nums[n]=i
            freq[i]--
            n++
        }
    }

    
};