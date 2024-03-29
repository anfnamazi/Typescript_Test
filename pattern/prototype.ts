interface IDog {
  name: string;
  bark: () => void;
  play: () => void;
}

class Dog implements IDog, Object {
  __proto__: any;
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  bark() {
    console.log("barking");
  }
  play() {
    console.log("playing");
  }
}

class SuperDog extends Dog {
  constructor(name: string) {
    super(name);
  }

  fly() {
    console.log("flying");
  }
}

const dog1 = new Dog("jesse");
const dog2 = new Dog("petty");

const superDog = new SuperDog("mega jesse");

Dog.prototype.play = () => {
  console.log("running");
};

dog1.__proto__.bark = () => {
  console.log("woof");
};

dog1.play();
dog2.play();
superDog.play();

dog1.bark();
dog2.bark();
superDog.bark();
