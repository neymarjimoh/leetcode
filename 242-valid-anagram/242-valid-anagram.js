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
};