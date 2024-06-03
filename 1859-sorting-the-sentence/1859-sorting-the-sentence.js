/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let newStr=[]
    s.split(" ").forEach( word => {
        for(let i = 0 ; i < word.length ; i++){
            if( !isNaN(word[i])){
                newStr[word[i]] = word.slice(0,i)
            }
        }
    })
    return newStr.join(" ").trim()
};