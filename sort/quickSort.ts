namespace quickSort {
  export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const randomIndex = Math.floor(Math.random() * arr.length);

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[randomIndex]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }

    return quickSort(left).concat(quickSort(right));
  }

  console.log(quickSort([5, 4, 3, 2, 1]));
}
