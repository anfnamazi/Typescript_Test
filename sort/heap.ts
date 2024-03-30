namespace heapSort {
  function maxHeapify<T>(arr: T[], i: number): T[] {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // find largest
    if (arr[left] > arr[largest]) {
      largest = left;
    }
    if (arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      //swap
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      //recursive
      maxHeapify<T>(arr, largest);
    }

    return arr;
  }

  export function heapSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }

    // create max heap from array
    for (let i = (arr.length >> 1) - 1; i >= 0; i--) {
      maxHeapify(arr, i);
    }

    // swap maximum value of the array to the end
    const temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;

    // remove sorted section
    let maxValue = arr.pop();

    return heapSort(arr).concat(maxValue);
  }

  console.log(heapSort<number>([9, 8, 7, 6, 5, 4, 3, 2, 1]));
  console.log(heapSort<string>(["f", "e", "d", "c", "a"]));
}
