/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let a=nums1.reduce((a,b)=>a+b)
    let b=nums2.reduce((a,b)=>a+b)
    let minus=(b-a)/nums1.length
    return minus
};