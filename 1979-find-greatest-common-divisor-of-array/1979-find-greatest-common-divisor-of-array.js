/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    while (max !== 0) {
        let temp = max;
        max = min % max;
        min = temp;
    }
    return min
};