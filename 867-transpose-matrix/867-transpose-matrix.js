/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];
    for(let i=0; i< rows; i++){
        for(let j =0; j < cols; j++){
            if(!result[j]){
                result[j] = [];
            } 
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};