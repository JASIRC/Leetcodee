/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const temp = [];
    for (let i = 0; i < nums.length - 1; i++) {
        temp.push(nums[i] + nums[i+1]);
    }
    const hashmap = new Map();
    for (let i = 0 ; i < temp.length; i++) {
        if (hashmap.has(temp[i])) return true;
        hashmap.set(temp[i], 1);
    }
    return false;
};