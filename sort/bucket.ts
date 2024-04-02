namespace bucketSort {
  function bucketSort(arr: number[]): number[] {
    let min = Infinity;
    let max = -Infinity;
    for (let i of arr) {
      min = Math.min(min, i);
      max = Math.max(max, i);
    }
    const bucketSize = Math.min(arr.length, 6);
    const bucketLength = (max - min + 1) / bucketSize;

    let bucket: number[][] = [];

    for (let i = 0; i < arr.length; i++) {
      const bucketId = ~~((arr[i] - min) / bucketLength);

      if (bucket[bucketId]) {
        let j = bucket[bucketId].length - 1;
        while (j >= -1) {
          if (arr[i] <= bucket[bucketId][j + 1]) {
            bucket[bucketId][j + 1] = arr[i];
          } else {
            bucket[bucketId][j + 1] = bucket[bucketId][j];
          }
          j--;
        }
      } else {
        bucket[bucketId] = [];
        bucket[bucketId].push(arr[i]);
      }
    }
    const result: number[] = [];
    return result.concat(...bucket);
  }

  console.log(bucketSort([9, 8, 7, 5, 2, 6, 5, 4, 3, 2, 1]));
}
