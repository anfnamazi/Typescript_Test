namespace observer {
  interface IDog {
    name: string;
    bark: string | undefined;
    setBark: (value: string) => void;
  }
  let dog1: IDog = {
    name: "jesse",
    bark: undefined,
    setBark(bark: string) {
      this.bark = bark;
    },
  };
  let dog2: IDog = {
    name: "petty",
    bark: undefined,
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
    remove(dog: IDog): void {
      const index = this.list.indexOf(dog);
      this.list.splice(index, 1);
    }
  }

  const broadcast = new Broadcaster();

  broadcast.add(dog1);
  broadcast.add(dog2);

  broadcast.remove(dog1);

  broadcast.broadcast("woof");

  console.log(dog1, dog2);
}
