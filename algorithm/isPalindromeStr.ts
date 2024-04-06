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
    return true;
  }

  //other solution
  function isPalindrome2(s: string): boolean {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, "");
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }
    }
    return true;
  }

  console.log(isPalindrome2("race a car"));
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
}
