namespace findSingleNum {
  function singleNumber(nums: number[]): number {
    const map = new Map();
    for (let i of nums) {
      if (map.has(i)) {
        map.set(i, map.get(i) + 1);
      } else {
        map.set(i, 1);
      }
    }
    let single: number = 0;
    map.forEach((v: number, k: number) => {
      if (v === 1) {
        single = k;
      }
    });
    return single;
  }

  // other solution

  function singleNumber2(nums: number[]): number {
    let res = 0;

    for (let num of nums) {
      res ^= num;
    }

    return res;
  }

  console.log(singleNumber([1, 0, 1]));
  console.log(singleNumber([4, 1, 2, 1, 2]));
}
