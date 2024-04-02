namespace observer {
  interface IDog {
    name: string;
    bark: string;
    setBark: (value: string) => void;
  }
  let dog1: IDog = {
    name: "jesse",
    bark: "barking",
    setBark(bark: string) {
      this.bark = bark;
    },
  };
  let dog2: IDog = {
    name: "petty",
    bark: "barking",
    setBark(bark: string) {
      this.bark = bark;
    },
  };

  class Broadcaster {
    list: IDog[] = [];
    add(dog: IDog): void {
      this.list.push(dog);
    }
    broadcast(newBark: string): void {
      this.list.forEach((dog) => dog.setBark(newBark));
    }
  }

  const broadcast = new Broadcaster();

  broadcast.add(dog1);
  broadcast.add(dog2);

  broadcast.broadcast("woof");

  console.log(dog1, dog2);
}
