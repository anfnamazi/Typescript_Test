namespace shellSort {
  function shellSort(arr: number[]): number[] {
    for (let gap = arr.length >> 1; gap > 0; gap = gap >> 1) {
      for (let i = gap; i < arr.length; i++) {
        let j = i;
        while (j >= gap) {
          if (arr[j - gap] > arr[j]) {
            const temp = arr[j - gap];
            arr[j - gap] = arr[j];
            arr[j] = temp;
          }
          j -= gap;
        }
      }
    }
    return arr;
  }

  const sorted = shellSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  console.log(sorted);
}
