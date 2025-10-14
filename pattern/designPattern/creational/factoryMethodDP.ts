/**
 * ### Core Concepts:
 * You want to delegate the instantiation logic to subclasses.
 * You need to decouple object creation from its usage.
 * You want to follow the Open/Closed Principle (open for extension, closed for modification).
 *
 * ### Structure
 * Product: The interface or abstract class for objects the factory creates.
 * ConcreteProduct: The actual implementation of the product.
 * Creator: Declares the factory method.
 * ConcreteCreator: Implements the factory method to return a specific product.
 *
 * ### Benefits
 * Encapsulates object creation logic.
 * Promotes loose coupling between client and concrete classes.
 * Supports open/closed principle by allowing new types via subclassing.
 */

namespace factoryMethodDP {
  // Product
  interface INotification {
    send(message: string): void;
  }

  // ConcreteProduct
  class EmailNotification implements INotification {
    send(message: string): void {
      console.log("Sent email message: " + message);
    }
  }

  class SMSNotification implements INotification {
    send(message: string): void {
      console.log("Sent sms message: " + message);
    }
  }

  // Creator
  abstract class NotificationFactory {
    abstract createNotification(): INotification;

    notify(message: string) {
      const notification = this.createNotification();
      notification.send(message);
    }
  }

  // ConcreteCreator
  class EmailNotificationFactory extends NotificationFactory {
    createNotification(): INotification {
      return new EmailNotification();
    }
  }

  class SMSNotificationFactory extends NotificationFactory {
    createNotification(): INotification {
      return new SMSNotification();
    }
  }

  // Usage
  const emailNotification = new EmailNotificationFactory();
  emailNotification.notify("This is a test massage for email");

  const smsNotification = new SMSNotificationFactory();
  smsNotification.notify("This is a test massage for sms");
}
