namespace mergeSort {
  export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = arr.length >> 1;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  export function merge(left: number[], right: number[]): number[] {
    let leftIndex = 0;
    let rightIndex = 0;
    const result: number[] = [];

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex));
  }

  console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
}
