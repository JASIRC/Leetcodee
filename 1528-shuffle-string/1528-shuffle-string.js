/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let a=s.split('')
    let b=[]
    for(let i=0;i<s.length;i++){
        for(let j=0;j<indices.length;j++){
            if(indices[j]==i){
                b[i]=a[j]
            }
        }
    }
    let c=b.join('')
    return c
};