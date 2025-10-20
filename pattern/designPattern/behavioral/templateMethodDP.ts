/**
 * ### Definition
 * the Template Method pattern is a classic behavioral design pattern that defines the skeleton of an algorithm in a base class but lets subclasses override specific steps without changing the overall structure. It's perfect when you want to enforce a consistent process while allowing flexibility in parts of it.
 *
 * ### Core Concepts
 * The base class defines a template method that outlines the steps of an algorithm.
 * Some steps are implemented in the base class (shared logic).
 * Other steps are abstract or hook methods that subclasses must implement or can optionally override.
 *
 * ### Benefits
 * Code reuse: Shared logic lives in the base class.
 * Consistency: The algorithm structure is enforced.
 * Flexibility: Subclasses customize only the necessary parts.
 */

namespace templateMethodDP {
  interface IData {
    name: string;
    age: number;
  }

  abstract class DataExporter {
    export(): void {
      const data = this.fetchData();
      const formatted = this.formatData(data);
      this.saveToFile(formatted);
    }

    protected fetchData() {
      return [
        { name: "test", age: 22 },
        { name: "tset", age: 33 },
      ];
    }

    abstract formatData(data: unknown[]): string;

    saveToFile(content: string) {
      console.log("saving...");
      console.log(`${content} saved!`);
    }
  }

  class CSVExporter extends DataExporter {
    formatData(data: IData[]): string {
      return data.map((i) => `${i.name}, ${i.age}`).join("\n");
    }
  }

  class JSONExporter extends DataExporter {
    formatData(data: IData[]): string {
      return JSON.stringify(data);
    }
  }

  const csvExporter = new CSVExporter();
  csvExporter.export();

  const jsonExporter = new JSONExporter();
  jsonExporter.export();
}
