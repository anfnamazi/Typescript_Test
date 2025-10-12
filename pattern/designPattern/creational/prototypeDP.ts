/**
 * ### Core Idea
 * Instead of building a new object manually, you clone an existing one. This is done via a clone() method or similar mechanism.
 *
 * ### Benefits
 * Performance: Avoids expensive object creation.
 * Flexibility: Easily create variations of existing objects.
 * Decoupling: Reduces dependency on constructors or class hierarchies.
 */

namespace protoTypeDP {
  interface IPrototype {
    clone(): IPrototype;
  }

  class Circle implements IPrototype {
    constructor(public radius: number, public color: string) {}

    clone() {
      return new Circle(this.radius, this.color);
    }
  }

  const circle = new Circle(10, "blue");
  const cloneCircle = circle.clone();

  console.log(circle, cloneCircle);
}
