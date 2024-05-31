/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let left=[0]
    let right=[0]
    let sum=0
    let array=[]
    for(let i=0;i<nums.length-1;i++){
       sum=sum+nums[i]
       left.push(sum)
    }
    sum=0
    for(let i=nums.length-1;i>0;i--){
        sum=sum+nums[i]
       right.unshift(sum)
    }
    for(let i=0;i<nums.length;i++){
        if(left[i]>right[i]){
        array.push(left[i]-right[i])
    }else{
        array.push(right[i]-left[i])
    }
    }
    return array
};