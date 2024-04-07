namespace iterator {
  class MyObject extends Object {
    [Symbol.iterator]() {
      const that = this;
      let counter = 0;
      return {
        next() {
          return {
            done: counter >= Object.entries(that).length,
            value: Object.entries(that)[counter++],
          };
        },
      };
    }
  }

  const obj = new MyObject();

  Object.assign(obj, { name: "Martin" });
  Object.assign(obj, { age: 18 });
  Object.assign(obj, { height: 180 });

  for (let i of obj) {
    console.log(i);
  }
}
