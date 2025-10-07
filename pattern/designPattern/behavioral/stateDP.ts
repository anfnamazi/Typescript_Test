/**
 * ### Core Concept
 * Instead of using conditionals to determine behavior, you encapsulate each state in its own class (or object), and delegate behavior to the current state.
 *
 * ### Benefits
 * Encapsulation: Each state handles its own behavior.
 * Open/Closed Principle: Easy to add new states without modifying existing code.
 * Cleaner Code: Avoids messy conditionals.
 */

namespace stateDP {
  class State {
    toggle(light: Light) {
      throw new Error("Method 'toggle()' must be implemented.");
    }
  }

  class OnState extends State {
    toggle(light: Light) {
      console.log("Switching to Off State");
      light.setState(new OffState());
    }
  }

  class OffState extends State {
    toggle(light: Light) {
      console.log("Switching to On State");
      light.setState(new OnState());
    }
  }

  class Light {
    state: State;

    constructor() {
      this.state = new OffState();
    }

    setState(state: State) {
      this.state = state;
    }

    public toggle() {
      this.state.toggle(this);
    }
  }

  // Usage
  const light = new Light();
  console.log(light.state);

  light.toggle(); // Switching to On State
  console.log(light.state);

  light.toggle(); // Switching to Off State
  console.log(light.state);

  light.toggle(); // Switching to On State
}
