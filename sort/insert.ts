namespace insertSort {
  function insertSort<T>(arr: T[]): T[] {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0) {
        if (arr[j - 1] > arr[j]) {
          const temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
        j--;
      }
    }
    return arr;
  }

  console.log(insertSort<number>([6, 5, 4, 3, 2, 1]));
  console.log(insertSort<string>(["f", "e", "d", "c", "a"]));
}
