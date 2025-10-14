/**
 * ### Purpose
 * Separate the construction of a complex object from its representation
 *
 * ### Key Components
 * Product: The complex object being built.
 * Builder: Defines the steps to build the product.
 * ConcreteBuilder: Implements the builder interface.
 * Director (optional): Orchestrates the building process.
 *
 * ### Benefits
 * Readable and fluent API via method chaining.
 * Flexible object creation without needing multiple constructors.
 * Encapsulates construction logic in one place.
 */

namespace builderDP {
  class Car {
    engine?: string;
    wheels?: number;
    color?: string;

    describe() {
      console.log(
        `Car with ${this.engine} Engine, ${this.wheels} Wheels, and ${this.color} Color.`
      );
    }
  }

  interface ICardBuilder {
    setEngine(engine: string): ICardBuilder;
    setWheels(wheels: number): ICardBuilder;
    setColor(color: string): ICardBuilder;

    build(): Car;
  }

  class CarBuilder implements ICardBuilder {
    car = new Car();

    setEngine(engine: string): ICardBuilder {
      this.car.engine = engine;
      return this;
    }

    setWheels(wheels: number): ICardBuilder {
      this.car.wheels = wheels;
      return this;
    }

    setColor(color: string): ICardBuilder {
      this.car.color = color;
      return this;
    }

    build(): Car {
      return this.car;
    }
  }

  const carBuilder = new CarBuilder();
  const car = carBuilder.setEngine("v8").setWheels(4).setColor("blue").build();
  console.log(car);
}
