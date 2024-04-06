namespace validPalindrome {
  function isPalindrome(s: string): boolean {
    let str = "";
    let reverseStr = "";
    const reg = new RegExp(`^[a-zA-Z0-9]*$`);
    for (let i of s) {
      if (i !== " " && reg.test(i)) {
        let c = i.toLowerCase();
        str += c;
        reverseStr = c + reverseStr;
      }
    }
    return reverseStr === str;
  }

  console.log(isPalindrome("race a car"));
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
}
