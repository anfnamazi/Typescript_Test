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
    console.log("bark");
  }
  play() {
    console.log("bark");
  }
}

const dog1 = new Dog("jesse");
const dog2 = new Dog("petty");

Dog.prototype.play = () => {
  console.log("play");
};

dog1.__proto__.bark = () => {
  console.log("woof");
};

dog1.play();
dog2.play();

dog1.bark();
dog2.bark();
