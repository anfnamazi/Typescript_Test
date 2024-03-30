namespace bobbleSort {
  export function bobbleSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
    const last = arr.pop();
    bobbleSort<T>(arr);
    arr.push(last as T);
    return arr;
  }

  console.log(bobbleSort<number>([7, 5, 4, 3, 2, -3, 0]));
  console.log(bobbleSort<string>(["f", "e", "d", "c", "a"]));
}
