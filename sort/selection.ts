namespace selectionSort {
  function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      let minIndex = i;
      while (j < arr.length) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        j++;
      }
      if (i !== minIndex) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }
  console.log(selectionSort([4, 3, 2, 1]));
}
