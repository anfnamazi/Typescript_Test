namespace constrain {
  type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;

  function testFunc() {
    throw new Error("asgd");
    return "string";
  }

  type TestFunc = MyReturnType<typeof testFunc>;
}
