/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let output = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                dfs(grid, i, j);
                output += 1;
            }
        }
    }
    return output;
    
    function dfs(grid, rowNum, colNum, memo = {}) {
        // make sure it is not out of scope of the grid (graph)
        if (rowNum < 0 || rowNum >= grid.length || colNum < 0 || colNum >= grid[0].length || grid[rowNum][colNum] == "0"
           || `r${rowNum}c${colNum}` in memo)         {
            return;
        }
        memo[`r${rowNum}c${colNum}`] = true;
        grid[rowNum][colNum] = "0";
        // check for both vertical and horizontal
        dfs(grid, rowNum, colNum + 1, memo);
        dfs(grid, rowNum , colNum - 1, memo);
        dfs(grid, rowNum + 1, colNum, memo);
        dfs(grid, rowNum - 1, colNum, memo);
    }
};