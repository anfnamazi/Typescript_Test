/**
 * ### Benefits
 * Performance: Avoids expensive object creation.
 * Flexibility: Easily create variations of existing objects.
 * Decoupling: Reduces dependency on constructors or class hierarchies.
 */

namespace protoTypeDP {
  interface Prototype {
    clone(): Prototype;
  }

  class Circle implements Prototype {
    constructor(public radius: number, public color: string) {}

    clone() {
      return new Circle(this.radius, this.color);
    }
  }

  const circle = new Circle(10, "blue");
  const cloneCircle = circle.clone();

  console.log(circle, cloneCircle);
}
