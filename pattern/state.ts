class State {
  toggle(light: Light): State {
    throw new Error("Method 'toggle()' must be implemented.");
  }
}

class OnState extends State {
  toggle() {
    console.log("Switching to Off State");
    return new OffState();
  }
}

class OffState extends State {
  toggle() {
    console.log("Switching to On State");
    return new OnState();
  }
}

class Light {
  private state: State;

  constructor() {
    this.state = new OffState();
  }

  public press() {
    this.state = this.state.toggle(this);
  }
}

// Usage
const light = new Light();
light.press(); // Switching to On State
light.press(); // Switching to Off State
light.press(); // Switching to On State
