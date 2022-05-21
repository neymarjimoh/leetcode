/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const result = [];
    for (let i = 0; i < image.length; i++) {
        let reversed = image[i].reverse();
        for (let j = 0; j < reversed.length; j++) {
            reversed[j] = reversed[j] == 0 ? 1 : 0;
        }
        result.push(reversed);
    }
    return result;
};