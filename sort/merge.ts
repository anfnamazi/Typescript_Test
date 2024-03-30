namespace mergeSort {
  export function mergeSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = arr.length >> 1;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge<T>(mergeSort<T>(left), mergeSort<T>(right));
  }

  function merge<T>(left: T[], right: T[]): T[] {
    let leftIndex = 0;
    let rightIndex = 0;
    const result: T[] = [];

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

  console.log(mergeSort<number>([9, 8, 7, 6, 5, 4, 3, 2, 1]));
  console.log(mergeSort<string>(["f", "e", "d", "c", "a"]));
}
