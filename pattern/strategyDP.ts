/**
 * ### Core Concepts
 * Context: The object that uses a strategy.
 * Strategy Interface: Defines a common interface for all supported algorithms.
 * Concrete Strategies: Implement different variations of the algorithm.
 *
 * ### Benefits
 * Flexibility: Easily switch strategies at runtime.
 * Open/Closed Principle: Add new strategies without modifying existing code.
 * Decoupling: Keeps business logic separate from implementation details.
 */

namespace strategyDP {
  interface IPaymentStrategy {
    pay(amount: number): void;
  }

  class CreditCardPayment implements IPaymentStrategy {
    pay(amount: number): void {
      console.log("Paying " + amount + " using Credit Card");
    }
  }

  class PayPalPayment implements IPaymentStrategy {
    pay(amount: number): void {
      console.log("Paying " + amount + " using PayPal");
    }
  }

  class BitcoinPayment implements IPaymentStrategy {
    pay(amount: number): void {
      console.log("Paying " + amount + " using Bitcoin");
    }
  }

  class ShoppingCart {
    private paymentStrategy: IPaymentStrategy;

    constructor(paymentStrategy: IPaymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy: IPaymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }

    checkout(amount: number) {
      this.paymentStrategy.pay(amount);
    }
  }

  // Usage
  const cart = new ShoppingCart(new CreditCardPayment());
  cart.checkout(100); // Paying 100 using Credit Card

  cart.setPaymentStrategy(new PayPalPayment());
  cart.checkout(200); // Paying 200 using PayPal

  cart.setPaymentStrategy(new BitcoinPayment());
  cart.checkout(300); // Paying 300 using Bitcoin
}
