/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let sorted = stones.sort((a, b) => b - a);  
    while (sorted.length > 1) {
        if (sorted[0] === sorted[1]) {
            sorted = sorted.slice(2);
        } else {
            sorted[0] = Math.abs(sorted[0] - sorted[1]);
            sorted.splice(1, 1);
            sorted = sorted.sort((a, b) => b - a);
        }
    }
    return sorted[0] || 0;
};