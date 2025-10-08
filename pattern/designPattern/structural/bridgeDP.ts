/**
 * ### Core concepts
 * The Bridge Pattern is a structural design pattern that decouples an abstraction from its implementation. Instead of binding them tightly, it uses composition to link them, allowing both to change without affecting each other.
 * Think of it as building a bridge between two hierarchies: one for abstractions and one for implementations.
 *
 * ### Key components
 * Abstraction: Defines the high-level interface and holds a reference to the implementer.
 * Refined Abstraction: Extends the abstraction with more specific behavior.
 * Implementor: Defines the interface for implementation classes.
 * Concrete Implementor: Implements the operations defined in the implementor interface.
 *
 * ### Benefits
 * Decouples abstraction from implementation
 * Improves scalability and flexibility
 * Supports runtime switching of implementations
 */

namespace bridgeDP {
  // Implementor
  interface IDevice {
    turnOn(): void;
    turnOff(): void;
    setVolume(volume: number): void;
  }

  // Concrete Implementor
  class Radio implements IDevice {
    turnOn(): void {
      console.log("Radio on!");
    }
    turnOff(): void {
      console.log("Radio off!");
    }
    setVolume(volume: number): void {
      console.log("Radio volume: " + volume);
    }
  }

  class TV implements IDevice {
    turnOn(): void {
      console.log("TV on!");
    }
    turnOff(): void {
      console.log("TV off!");
    }
    setVolume(volume: number): void {
      console.log("TV volume: " + volume);
    }
  }

  // Abstraction
  class Remote {
    constructor(private device: IDevice) {}

    turnOn() {
      this.device.turnOn();
    }
    turnOff() {
      this.device.turnOff();
    }
    setVolume(volume: number) {
      this.device.setVolume(volume);
    }
  }

  // Refined Abstraction
  class AdvancedRemote extends Remote {
    mute() {
      super.setVolume(0);
    }
  }

  // Usage
  const radio = new Radio();
  const tv = new TV();

  const radioRemote = new Remote(radio);
  const tvRemote = new AdvancedRemote(tv);

  radioRemote.turnOn();
  radioRemote.setVolume(3);

  tvRemote.mute();
  tvRemote.turnOff();
}
