/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    function compare(a,b){
        for (let i =0; i<a.length; i++){
           if ( b.includes(a[i])) {
               return false
           }
        } 
        return true
    }
    
    let max = 0
    for (let i =0; i<words.length; i++){
        for (let j=i+1; j<words.length; j++){
           if( compare(words[i],words[j])) {
               max = max> words[i].length * words[j].length? max : words[i].length * words[j].length
           }
        }
        
    }
    return max
};