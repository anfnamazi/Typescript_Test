namespace maxSubArrSum {
  function maxSubArrSum(arr: number[], n: number): number {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let { max, index } = findMax(arr);
      delete arr[index];
      sum += max;
    }
    return sum;
  }

  function findMax(arr: number[]) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
        index = i;
      }
    }
    return { max, index };
  }
  let before = performance.now();
  console.log(maxSubArrSum([5, 1, 9, 8, 2, 6, 8], 3));
  let after = performance.now();
  console.log((after - before) / 1000);
}
