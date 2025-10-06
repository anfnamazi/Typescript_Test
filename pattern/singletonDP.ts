/**
 * ### Benefits
 * Controlled access: Only one instance exists.
 * Global state: Useful for shared resources.
 * Lazy initialization: Instance is created only when needed.
 */

namespace singletonDP {
  class Logger {
    private static instance: Logger;

    private constructor() {
      // private constructor prevent direct installation
    }

    static getInstance() {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }

      return Logger.instance;
    }
  }

  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  console.log(logger1 === logger2);
}
