/*
### Benefits
- Decouples sender and receiver of requests.
- Flexible: You can change the chain dynamically.
- Extensible: Add new handlers without modifying existing ones.
*/

namespace chaninOfResponsibility {
  interface IHandler {
    setNext(handler: IHandler): void;
    handle(request: string): void;
  }

  abstract class Handler implements IHandler {
    private nextHandler: IHandler | null = null;
    setNext(handler: IHandler): void {
      this.nextHandler = handler;
    }

    handle(request: string): void {
      if (this.nextHandler) {
        this.nextHandler.handle(request);
      } else {
        console.log("No handler for", request);
      }
    }
  }

  class BillingHandler extends Handler {
    handle(request: string): void {
      if (request === "billing") {
        console.log("BillingHandler handled the request.");
      } else {
        super.handle(request);
      }
    }
  }

  class TechnicalSupportHandler extends Handler {
    handle(request: string) {
      if (request === "technical") {
        console.log("TechnicalSupportHandler handled the request.");
      } else {
        super.handle(request);
      }
    }
  }

  class GeneralHandler extends Handler {
    handle(request: string) {
      if (request === "general") {
        console.log("GeneralHandler handled the request.");
      } else {
        super.handle(request);
      }
    }
  }

  // Client code
  const billingHandler = new BillingHandler();
  const techSupportHandler = new TechnicalSupportHandler();
  const generalHandler = new GeneralHandler();

  billingHandler.setNext(techSupportHandler);
  techSupportHandler.setNext(generalHandler);

  const requests = ["general", "billing", "unknown", "technical"];

  for (const request of requests) {
    billingHandler.handle(request);
  }
}
