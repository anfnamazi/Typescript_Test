namespace quickSort {
  export function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }

    const randomIndex = Math.floor(Math.random() * arr.length);

    const left: T[] = [];
    const right: T[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[randomIndex]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }

    return quickSort<T>(left).concat(quickSort<T>(right));
  }

  console.log(quickSort<number>([5, 4, 3, 2, 1]));
  console.log(quickSort<string>(["f", "e", "d", "c", "a"]));
}
