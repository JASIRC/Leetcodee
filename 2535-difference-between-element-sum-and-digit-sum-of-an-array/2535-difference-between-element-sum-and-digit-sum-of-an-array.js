/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element_sum=nums.reduce((a,b)=>a+b)
    let a=nums.join('').split('').map(Number)
    let digit_sum=a.reduce((a,b)=>a+b)
    return element_sum-digit_sum
};