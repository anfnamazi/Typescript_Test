function strCharCount(str: string): Record<string, number> {
  let charNum: Record<string, number> = {};
  for (let i of str) {
    if (charNum.hasOwnProperty(i)) {
      charNum[i]++;
    } else if (i !== " ") {
      charNum[i] = 1;
    }
  }
  return charNum;
}

console.log(strCharCount("hello world again"));
