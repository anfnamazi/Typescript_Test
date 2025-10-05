namespace state {
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
