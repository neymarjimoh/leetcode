/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let previous = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (previous[1] >= intervals[i][0]) {
            previous[1] = Math.max(previous[1], intervals[i][1]);
        } else {
            res.push(previous);
            previous = intervals[i];
        }
    }
    res.push(previous);
    
    return res;
};