function removeElement(nums: number[], val: number): number {
  let l = 0;
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      r = i;
    } else {
      nums[l] = nums[i];
      l++;
    }
  }

  return l;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
