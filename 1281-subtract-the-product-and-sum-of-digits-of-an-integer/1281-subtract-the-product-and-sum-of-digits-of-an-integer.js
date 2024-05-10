/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let s=n.toString().split('')
    let b=1
    let c=0
    for(let a=0;a<s.length;a++){
        b *= parseInt(s[a])
    }
    for(let a=0;a<s.length;a++){
        c += parseInt(s[a])
    }
    return b-c
};