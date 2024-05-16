/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0
    let sum=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++
        }else if(nums[i]!=1){
            if(count>sum){
                sum=count
            }
            count=0
        }
    }
    if(count>sum){
                sum=count
            }
    return sum
};