namespace mergeSortedArray {
  function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
  ): number[] {
    const tNums1 = nums1.slice(0, m);
    let left = 0;
    let right = 0;
    let i = 0;
    while (i < m + n) {
      if (nums2[right] < tNums1[left]) {
        nums1[i] = nums2[right];
        right++;
      } else if (left < m) {
        nums1[i] = tNums1[left];
        left++;
      } else if (right < n) {
        nums1[i] = nums2[right];
        right++;
      }
      i++;
    }
    return nums1;
  }

  console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
}
