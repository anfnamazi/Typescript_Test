function shallowCompareSqMaps(map: Map<any, any>, mapSq: Map<any, any>) {
  if (map.size !== mapSq.size) {
    return false;
  }
  for (let [key, val] of map) {
    if (!mapSq.has(key**2) || mapSq.get(key**2) !== val) {
      return false;
    }
  }
  return true;
}

function convertToMap(arr: number[]): Map<any, any> {
  const map = new Map();
  for (let i of arr) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  return map;
}

function sameSq(arr: number[], arrSq: number[]): any {
  const map = convertToMap(arr);
  const mapSq = convertToMap(arrSq);
  const isEq = shallowCompareSqMaps(map, mapSq);
  return isEq;
}

console.log(sameSq([3, 1, 2, 1], [1, 4, 1, 9]));
