namespace extend {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat() {
      return "eating";
    }
    sleep = function () {
      return "sleeping";
    };
  }
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
    bark() {
      super.eat();
      // super.sleep(); not working because not method
      // super.name; not working because not method
      return "woof";
    }
  }

  const dog = new Dog("jesse");
  console.log(dog);
  //////////////////////////Extend Array//////////////////////////
  class MyArray extends Array<string> {
    popCapitalize() {
      return super.pop()?.toUpperCase();
    }
  }

  const arr = new MyArray("a", "b", "c", "d", "e", "f");
  console.log(arr.popCapitalize());
}
