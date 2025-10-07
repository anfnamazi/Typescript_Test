/**
 * ### Core Concepts:
 * Add responsibilities to objects at runtime.
 * Promote open/closed principle: open for extension, closed for modification.
 * Avoid subclass explosion by using composition instead of inheritance.
 *
 * ### Examples:
 * You order a basic coffee.
 * Then you add milk, sugar, or whipped cream.
 * Each addition decorates the original coffee, enhancing it without changing the base.
 *
 * ### Benefits:
 * You want to add features to objects without altering their class.
 * You need flexible combinations of behaviors.
 * You want to avoid deep inheritance trees.
 */

namespace decoratorDP {
  interface INotifier {
    send(message: string): void;
  }

  class BasicNotifier implements INotifier {
    send(message: string): void {
      console.log("Sending Message: " + message);
    }
  }

  class NotifierDecorator implements INotifier {
    constructor(protected wrappee: INotifier) {}

    send(message: string): void {
      this.wrappee.send(message);
    }
  }

  class EmailNotifier extends NotifierDecorator {
    send(message: string): void {
      super.send(message);
      console.log("Sending Email: " + message);
    }
  }

  class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
      super.send(message);
      console.log("Sending SMS: " + message);
    }
  }

  // Usage
  const notifier = new BasicNotifier();
  const emailNotifier = new EmailNotifier(notifier);
  const allNotifier = new SMSNotifier(emailNotifier);

  allNotifier.send("System update available!");
}
