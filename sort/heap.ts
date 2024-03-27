namespace heapSort {
  function maxHeapify(arr: number[], i: number): number[] {
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
      maxHeapify(arr, largest);
    }

    return arr;
  }

  export function heapSort(arr: number[]): number[] {
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

    return heapSort(arr).concat(maxValue as number);
  }

  console.log(heapSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
}
