function isPalindrome(x: number): boolean {
    let str = `${x}`;
    let reversed="";
    for (let i of str) {
        reversed = i + reversed
    }
    return str === reversed;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))