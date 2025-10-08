/**
 * ### Core concepts
 * The Command Pattern is a behavioral design pattern that decouples the sender of a request (Invoker) from the object that performs the action (Receiver). It wraps a request as a command object, which can be executed, stored, or passed around.
 *
 * ### Use cases
 * GUI buttons triggering actions
 * Undo/redo functionality
 * Task queues
 * Macro recording
 *
 * ### Key components
 * Command Interface declaring the execute() method
 * ConcreteCommand Implements the Command interface and binds a Receiver to an action
 * Receiver Knows how to perform the actual work
 * Invoker Stores and triggers commands
 * Client Creates commands and configures the Invoker
 *
 * ### Benefits
 * Decouples sender and receiver
 * Supports undo/redo
 * Enables logging and queuing
 * Promotes extensibility and cleaner code
 */

namespace commandDP {
  // command
  interface ICommand {
    execute(): void;
  }

  // receiver
  class Receiver {
    runCommand1() {
      console.log("Receiver run command1.");
    }
    runCommand2() {
      console.log("Receiver run command2.");
    }
  }

  // Concentrate command
  class Command1 implements ICommand {
    constructor(private receiver: Receiver) {}
    execute(): void {
      this.receiver.runCommand1();
    }
  }
  class Command2 implements ICommand {
    constructor(private receiver: Receiver) {}
    execute(): void {
      this.receiver.runCommand2();
    }
  }

  class Invoker {
    commands: Record<string, ICommand> = {};

    register(commandName: string, command: ICommand) {
      this.commands[commandName] = command;
    }

    trigger(commandName: string) {
      if (!this.commands.hasOwnProperty(commandName)) {
        return console.log(commandName + " not available!");
      }

      this.commands[commandName].execute();
    }
  }

  // Usage
  const receiver = new Receiver();
  const command1 = new Command1(receiver);
  const command2 = new Command2(receiver);

  const invoker = new Invoker();
  invoker.register("cmd1", command1);
  invoker.register("cmd2", command2);

  invoker.trigger("cmd2");
  invoker.trigger("cmd1");
  invoker.trigger("cmd3");
}
