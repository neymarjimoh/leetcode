/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     let map = new Map()
     for (let i = 0; i< s.length; i++) {
         let value = map.get(s.charAt(i))
         if (value) {
            value++
             map.set(s.charAt(i), value)

         } else{
             map.set(s.charAt(i), 1)
         }
     }

     
     for (let i = 0; i< t.length; i++) {
         let char1 = t.charAt(i)
     
         let value =  map.get(char1)
     
         if (value) {
     
             if (value === 1) {
     
                 map.delete(char1)
             } else {
                 value--
     
                 map.set(char1, value)
             }

         } else {
     
             return false
         }
     }

     if (map.size !== 0) {
     
        return false
     } else {
         return true
     }
     
     
     
     
     
     // second way
 const sLength = s.length;
    const tLength = t.length;
    if (sLength != tLength) return false;
    const charMap = {};
    for (let i = 0; i < sLength; i++) {
        const currentChar = s[i];
        if (currentChar in charMap) {
            charMap[currentChar] += 1;
        } else {
            charMap[currentChar] = 1;
        }
    }
    
    for (let i = 0; i < tLength; i++) {
        const currentChar = t[i];
        if (currentChar in charMap) {
            if (charMap[currentChar] < 1) {
                return false
            } else {
                charMap[currentChar] -= 1;
            }
        } else {
            return false;
        }

    }
    
    return true;
};
