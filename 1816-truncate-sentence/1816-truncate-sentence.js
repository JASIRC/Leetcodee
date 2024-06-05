/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const words = s.split(' ');
    const truncatedWords = words.slice(0, k);
    const truncatedSentence = truncatedWords.join(' '); 
    return truncatedSentence;
};