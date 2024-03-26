interface IDog {
  name: string;
  bark: () => void;
  play: () => void;
}

class Dog implements IDog {
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

dog1.play();
dog2.bark();
