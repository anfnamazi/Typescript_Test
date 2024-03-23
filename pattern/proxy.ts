namespace proxy {
  const obj: {
    a: string;
    b?: string;
  } = { a: "asdga" };

  const proxyObj = new Proxy(obj, {
    get(obj, prop) {
      return `get ${Reflect.get(obj, prop)}`;
    },
    set(obj, prop, value) {
      Reflect.set(obj, prop, `set ${value}`);
      return true;
    },
  });

  proxyObj.b = "b";
  console.log(proxyObj.b);
}
