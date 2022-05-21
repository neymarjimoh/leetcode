/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = BigInt(a)+BigInt(b);
    let str = sum.toString();
    // console.log(str);
    index = str.indexOf('2');
     // console.log(index);
    while(index >= 0){
        str = str.replace('2','0'); 
        if(index === 0)
            str = '1'+str;
        else if(index ===1 && str[index-1]==='1' && str.length == 2){
            str = '100'
        }
        else{
            if(str[index-1]==='1')
                str = str.slice(0,index-1) + '2' + str.slice(index,str.length);
            
            else
                str = str.slice(0,index-1) + '1' + str.slice(index,str.length);       
        }
           
        index = str.indexOf('2');
    }
    return str;
};