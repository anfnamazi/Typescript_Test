/**
 * ### Core Concepts
 * Imagine a group of colleagues in an office. Instead of everyone shouting across the room, they communicate through a manager (the mediator). This keeps things organized and reduces chaos.
 *
 * ### Key components
 * Mediator Interface: Declares communication methods.
 * Concrete Mediator: Implements coordination logic.
 * Colleague Components: Communicate via the mediator.
 *
 * ### Benefits
 * Decouples components: Reduces dependencies between objects.
 * Centralized control: Easier to manage complex interactions.
 * Improves maintainability: Changes in communication logic affect only the mediator.
 */

namespace mediatorDP {
  interface IChateMediator {
    sendMessage(message: string, sender: User): void;
  }

  class User {
    constructor(private name: string, private mediator: IChateMediator) {}

    send(message: string) {
      console.log(this.name + " sends: " + message);
      this.mediator.sendMessage(message, this);
    }

    receive(message: string, user: User) {
      console.log(this.name + " receives from " + user.name + ": " + message);
    }
  }

  class ChatRoom implements IChateMediator {
    private users: User[] = [];

    register(user: User) {
      this.users.push(user);
    }

    sendMessage(message: string, sender: User): void {
      this.users.forEach((user) => {
        if (user !== sender) {
          user.receive(message, sender);
        }
      });
    }
  }

  //Usage
  const chatRoom = new ChatRoom();

  const alice = new User("Alice", chatRoom);
  const bob = new User("Bob", chatRoom);
  const charlie = new User("Charlie", chatRoom);

  chatRoom.register(alice);
  chatRoom.register(bob);
  chatRoom.register(charlie);

  alice.send("Hello everyone!");
}
