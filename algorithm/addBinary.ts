function addBinary(a: string, b: string): string {
  const maxLength = Math.max(a.length, b.length);
  let carry = 0;
  let result = "";
  a = a.padStart(maxLength);
  b = b.padStart(maxLength);
  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = +a[i] + +b[i] + carry;
    result = (sum % 2) + result;
    carry = (sum - (sum % 2)) / 2;
  }
  if (carry) {
    result = carry + result;
  }

  return result;
}

console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));
