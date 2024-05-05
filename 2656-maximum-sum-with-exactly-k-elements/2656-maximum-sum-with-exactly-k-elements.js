/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a, b) => a - b);
    let max_val =nums[nums.length-1];
       let sum =max_val;
        for(let i =1;i <k ;i++){
            sum += max_val+i ;
         }
            return sum;
};