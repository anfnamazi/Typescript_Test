/**
 * ### Definition
 * The Composite design pattern is a structural pattern that lets you treat individual objects and compositions of objects uniformly. It's especially useful when dealing with tree-like structures such as DOM trees, file systems, or UI components.
 *
 * ### Concepts
 * Component: An interface or abstract class that defines common operations.
 * Leaf: Represents individual objects (end nodes).
 * Composite: Represents groups of components (can contain leaves or other composites).
 * The key idea is that both Leaf and Composite implement the same interface, so clients can interact with them in the same way.
 */
namespace compositeDP {
  // Component
  interface IGraphic {
    draw(): void;
  }

  // Leaf
  class Circle implements IGraphic {
    constructor(private name: string) {}

    draw(): void {
      console.log(`Drawing Circle with name: ${this.name}`);
    }
  }

  class Square implements IGraphic {
    constructor(private name: string) {}

    draw(): void {
      console.log(`Drawing Square with name: ${this.name}`);
    }
  }

  class GraphicGroup {
    private graphics: IGraphic[] = [];

    add(graphic: IGraphic) {
      this.graphics.push(graphic);
    }

    remove(graphic: IGraphic) {
      this.graphics.filter((i) => i !== graphic);
    }

    draw() {
      console.log("Drawing Group:");
      this.graphics.forEach((i) => i.draw());
    }
  }

  const circle1 = new Circle("Circle A");
  const square1 = new Square("Square A");
  const circle2 = new Circle("Circle B");

  const group1 = new GraphicGroup();
  group1.add(circle1);
  group1.add(square1);

  const group2 = new GraphicGroup();
  group2.add(group1);
  group2.add(circle2);

  group2.draw();
}
