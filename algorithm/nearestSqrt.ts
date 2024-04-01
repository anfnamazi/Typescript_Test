namespace nearestSqrt {
  function mySqrt(x: number): number {
    let left = 0;
    let right = x;
    let mid = x >> 1;
    while (left <= right) {
      if (mid * mid === x) {
        return mid;
      }
      if (mid * mid < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      mid = (right + left) >> 1;
    }

    return mid;
  }

  console.log(mySqrt(10));
  console.log(mySqrt(9));
  console.log(mySqrt(8));
}
