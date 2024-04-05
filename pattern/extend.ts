namespace extend {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat() {
      return "eating";
    }

    sleep() {
      return "sleeping";
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
    bark() {
      return "woof";
    }
  }

  const dog = new Dog("jesse");

  console.log(dog);
}
