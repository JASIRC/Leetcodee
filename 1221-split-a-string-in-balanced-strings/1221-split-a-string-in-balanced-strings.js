/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0
    let res = 0
    for(let val of s){
        val === 'L' ? count ++ : count --
        if(count === 0){
            res ++
        }
    }
    return res 
};