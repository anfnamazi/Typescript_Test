namespace digitsArray {
  function plusOne(digits: number[]): number[] {
    let str = digits.join("");
    let num = BigInt(str) + 1n;
    let newStr = num.toString();
    let newDigits = [];
    for (let i of newStr) {
      newDigits.push(+i);
    }

    return newDigits;
  }

  console.log(plusOne([4, 3, 2, 1]));
  console.log(plusOne([9, 9]));
}
