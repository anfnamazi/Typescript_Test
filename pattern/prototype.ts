namespace protoType {
  /* #region interfaces */
  interface IDog {
    name: string;
    bark: () => void;
    play: () => void;
  }
  /* #endregion */

  /* #region classes */
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
  /* #endregion */

  /* #region definition */
  // ordinary
  const dog1 = new Dog("jesse");
  const dog2 = new Dog("petty");
  // inherited
  const superDog = new SuperDog("mega jesse");
  // with Object.create
  const superDog2 = Object.create(superDog);
  /* #endregion */

  /* #region change prototype */
  Dog.prototype.play = () => {
    return "running";
  };

  dog1.__proto__.bark = () => {
    return "woof";
  };
  /* #endregion */

  // testing paly method
  console.log(`dog1 ${dog1.play()}`);
  console.log(`dog2 ${dog2.play()}`);
  console.log(`superDog ${superDog.play()}`);

  // testing bark method
  console.log(`dog1 ${dog1.bark()}`);
  console.log(`dog2 ${dog2.bark()}`);
  console.log(`superDog ${superDog.bark()}`);

  // testing obj created with Object.create
  console.log(`superDog2 ${superDog2.bark()}`);
  console.log(`Direct properties of superDog2 ${Object.keys(superDog2)}`);
  console.log(
    `Prototype properties of superDog2 ${Object.keys(superDog2.__proto__)}`
  );
}
