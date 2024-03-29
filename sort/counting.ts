namespace countingSort {
  export function countingSort(arr: number[]): number[] {
    const map = new Map();
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
      } else {
        map.set(arr[i], 1);
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
      }
    }

    const result: number[] = [];
    for (let j = min; j <= max; j++) {
      for (let k = 0; k < map.get(j); k++) {
        result.push(j);
      }
    }

    return result;
  }

  console.log(countingSort([7, 3, 6, 5, 4, 9, 3, 5, 2, 1]));
}
