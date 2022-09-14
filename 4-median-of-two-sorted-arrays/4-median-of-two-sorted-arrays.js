/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a,b)=>a-b)
    const mid = Math.floor((arr.length-1)/2)
    console.log({arr, mid})
    return arr.length %2 ? 
        arr[mid] : 
        (arr[mid] + arr[mid+1])/2 
};
    