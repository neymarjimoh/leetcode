function isHappy(n: number): boolean {
    const seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(num: number): number {
    const numStr = '' + num;
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const currNum = parseInt(numStr[i]);
        sum += Math.pow(currNum, 2);
    }
    return sum;
}
                                      
