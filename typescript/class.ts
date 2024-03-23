namespace testClass {
  interface ITest {
    sample: string;
  }

  interface ITest {
    test: number;
  }

  export class Test<T extends string, U extends number> implements ITest {
    sample: string;
    test: number;
    constructor(t: T, u: U) {
      this.sample = t;
      this.test = u;
    }
    indicator(): void {
      console.log(this.sample, this.test);
    }
  }

  console.log(JSON.stringify(Test.prototype));

  const obj = new Test("asg", 23);
  obj.indicator();
}
