/**
 * ### Definition
 * The Flyweight pattern is a structural design pattern that helps reduce memory usage by sharing common data between multiple similar objects. It's especially useful when you have a large number of objects that share a lot of state.
 *
 * ### Concepts
 * Intrinsic state: Shared, immutable data stored in the flyweight object.
 * Extrinsic state: Unique data passed in by the client at runtime.
 * Instead of creating thousands of identical objects, you reuse a few shared ones and pass in the unique data when needed.
 *
 * ### Benefits
 * You have many objects with shared data.
 * Memory usage is a concern.
 * The shared state is immutable.
 *
 * ### Sample
 * Imagine a text editor rendering thousands of characters. Each character has:
 * A font (shared)
 * A position (unique)
 */

namespace flyweightDP {
  interface IPosition {
    x: number;
    y: number;
  }

  interface ICharacterFlyweight {
    render(position: IPosition): void;
  }

  class CharacterFlyweight implements ICharacterFlyweight {
    constructor(private font: string) {}

    render(position: IPosition): void {
      console.log(
        `Rendering ${this.font} font in position: ${JSON.stringify(position)}`
      );
    }
  }

  class CharacterFactory {
    flyweights: Map<string, CharacterFlyweight> = new Map();

    getCharacter(font: string) {
      if (!this.flyweights.has(font)) {
        this.flyweights.set(font, new CharacterFlyweight(font));
      }

      return this.flyweights.get(font)!;
    }

    getSize() {
      return this.flyweights.size;
    }
  }

  const factory = new CharacterFactory();

  const fonts = ["Arial", "Times New Roman", "Courier"];
  for (let i = 0; i < 100; i++) {
    const font = fonts[i % fonts.length];
    const character = factory.getCharacter(font);
    character.render({ x: i, y: i * 2 });
  }

  console.log(`Total flyweights created: ${factory.getSize()}`);
}
