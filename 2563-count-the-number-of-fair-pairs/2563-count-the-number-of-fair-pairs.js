/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 function countLess(nums, val) {
    let res = 0;
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] >= val) {
            j--;
        } else {
            res += j - i;
            i++;
        }
    }
    return res;
}
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    return countLess(nums, upper + 1) - countLess(nums, lower);
};