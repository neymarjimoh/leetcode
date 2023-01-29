// SOLUTION 1:
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const ans = [];
    if (p.length > s.length) return ans;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const sMap = {};
    const pMap = {};
    for (const char of alphabet) {
        sMap[char] = 0;
        pMap[char] = 0;
    }

    for (i = 0; i < p.length; i++) {
        pMap[p[i]]++;
        sMap[s[i]]++;
    }

    let left = 0;
    let right = p.length - 1;

    for (right; right < s.length; right++) {
        if (isSameObj(sMap, pMap)) ans.push(left);
        sMap[s[left]]--;
        sMap[s[right + 1]]++;
        left++;
    }

    return ans;
};

function isSameObj(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}








// SOLUTION 2:
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    const pCounts = countChars(p, p.length);
    const sCounts = countChars(s, p.length);
    let left = 0;
    let right = p.length - 1;
    
    while (right < s.length) {
        if (sameCounts(pCounts, sCounts)) {
            res.push(left);
        }
        
        // Update counts
        sCounts[s[left]]--;
        sCounts[s[right + 1]]++;
        
        // Update window
        left++;
        right++;
    }
    
    return res;
};

// Returns a map of { char => charCount }
function countChars(str, length) {
    const counts = {};
    
    for (const char of "abcdefghijklmnopqrstuvwxyz") {
        counts[char] = 0;
    }
    
    for (let i = 0; i < length; i++) {
        counts[str[i]]++;
    }
    
    return counts;
}

// Given two counts, returns true if they all contain the same counts
function sameCounts(counts1, counts2) {
    for (const char of "abcdefghijklmnopqrstuvwxyz") {
        if (counts1[char] !== counts2[char]) {
            return false;
        }
    }
    
    return true;
}
