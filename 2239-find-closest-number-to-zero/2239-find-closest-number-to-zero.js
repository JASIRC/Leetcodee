/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = Number.MAX_VALUE;
    for (let i of nums) {
        if (Math.abs(i) < Math.abs(res) || i === Math.abs(res)) {
            res = i;
        }
    }
    return res;
};