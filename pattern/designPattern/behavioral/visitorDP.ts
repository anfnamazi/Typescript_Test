/**
 * ### Core idea
 * Instead of adding methods to your classes, you create a Visitor object that “visits” each element and performs operations. The pattern separates data structures from the operations performed on them.
 *
 * ### Benefits
 * Open/Closed Principle: Add new operations without changing existing classes.
 * Separation of concerns: Keeps data and operations separate.
 * Scalability: Easy to add new visitors for new behaviors.
 */

namespace visitorDP {
  interface IFileSystem {
    accept(visitor: IVisitor): void;
  }

  class File implements IFileSystem {
    constructor(public name: string, public size: number) {}

    accept(visitor: IVisitor): void {
      visitor.visitFile(this);
    }
  }

  class Directory implements IFileSystem {
    constructor(public name: string, public children: IFileSystem[]) {}

    accept(visitor: IVisitor): void {
      visitor.visitDirectory(this);
    }
  }

  interface IVisitor {
    visitFile(file: File): void;
    visitDirectory(directory: Directory): void;
  }

  class SizeCalculatorVisitor implements IVisitor {
    totalSize: number = 0;
    visitFile(file: File): void {
      this.totalSize += file.size;
    }

    visitDirectory(directory: Directory): void {
      for (const i of directory.children) {
        i.accept(this);
      }
    }
  }

  class StructurePrinterVisitor implements IVisitor {
    indent = 0;

    visitFile(file: File): void {
      console.log(`${" ".repeat(this.indent)}- ${file.name} (${file.size} KB)`);
    }

    visitDirectory(directory: Directory): void {
      console.log(`${" ".repeat(this.indent)}+ ${directory.name}/`);
      this.indent += 2;
      for (const i of directory.children) {
        i.accept(this);
      }
      this.indent -= 2;
    }
  }

  const fsTree = new Directory("root", [
    new File("file1.txt", 100),
    new Directory("docs", [
      new File("resume.pdf", 200),
      new File("coverletter.docx", 150),
      new Directory("docs", [
        new File("cv.pdf", 200),
        new File("evidence.docx", 150),
      ]),
      new File("file1.txt", 100),
    ]),
  ]);

  const sizeVisitor = new SizeCalculatorVisitor();
  fsTree.accept(sizeVisitor);
  console.log("Total size:", sizeVisitor.totalSize); // 450

  const printVisitor = new StructurePrinterVisitor();
  fsTree.accept(printVisitor);
}
