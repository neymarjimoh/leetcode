/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a,b)=>a[0]-b[0]);

    let res = [];
    let previous = intervals[0];

    // merge
    for(let i=1;i<intervals.length;i++) {
        let current = intervals[i];
        if(previous[1] >= current[0]) {
            previous[1] = Math.max(previous[1],current[1]);
        } else {
            res.push(previous);
            previous = current;
        }
    }
    res.push(previous);
    
    return res;
};