/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const result = []
    const firstWordArr = [...words[0]]
    
    for(const letter of firstWordArr) {
        if(words.every(word => word.includes(letter))) {
            result.push(letter)
            words = words.map(word => word.replace(letter, ''))
        }
    }    
    
    return result
};