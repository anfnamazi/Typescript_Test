namespace sumZero {
  function sumZero(sortedArr: number[]): [number, number] | undefined {
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] >= 0) {
        return;
      }
      let min = 0;
      let max = sortedArr.length - 1;
      while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (sortedArr[mid] === Math.abs(sortedArr[i])) {
          return [sortedArr[i], sortedArr[mid]];
        } else if (Math.abs(sortedArr[i]) > sortedArr[mid]) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
    }
  }
  let before = performance.now();
  console.log(sumZero([-3, -1, 0, 2, 3]));
  let after = performance.now();
  console.log((after - before) / 1000);
}
