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
    return "barking";
  }
  play() {
    return "playing";
  }
}

class SuperDog extends Dog {
  constructor(name: string) {
    super(name);
  }

  fly() {
    return "flying";
  }
}

const dog1 = new Dog("jesse");
const dog2 = new Dog("petty");

const superDog = new SuperDog("mega jesse");

Dog.prototype.play = () => {
  return "running";
};

dog1.__proto__.bark = () => {
  return "woof";
};

console.log(`dog1 ${dog1.play()}`);
console.log(`dog2 ${dog2.play()}`);
console.log(`superDog ${superDog.play()}`);

console.log(`dog1 ${dog1.bark()}`);
console.log(`dog2 ${dog2.bark()}`);
console.log(`superDog ${superDog.bark()}`);

const superDog2 = Object.create(superDog);

console.log(`superDog2 ${superDog2.bark()}`);

console.log(`Direct properties of superDog2 ${Object.keys(superDog2)}`);
console.log(
  `Prototype properties of superDog2 ${Object.keys(superDog2.__proto__)}`
);
