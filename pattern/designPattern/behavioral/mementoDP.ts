/**
 * ### Definition
 * The Memento Design Pattern is a behavioral design pattern that allows an object to save and restore its state without exposing its internal structure. It's especially useful for implementing undo/redo functionality.
 *
 * ### Core Concepts
 * Originator: The object whose state needs to be saved/restored.
 * Memento: A snapshot of the Originator’s state.
 * Caretaker: Manages the history of Mementos.
 *
 * ### Benefit
 * Implementing undo/redo
 * Saving checkpoints in games
 * Preserving state before risky operations
 */

namespace mementoDP {
  class Memento {
    constructor(private state: string) {}

    getState() {
      return this.state;
    }
  }

  class TextEditor {
    private content: string = "";

    write(text: string) {
      this.content += text;
    }

    getContent() {
      return this.content;
    }

    save() {
      return new Memento(this.content);
    }

    restore(memento: Memento) {
      this.content = memento.getState();
    }
  }

  class History {
    private mementos: Memento[] = [];

    push(memento: Memento) {
      this.mementos.push(memento);
    }

    pop() {
      return this.mementos.pop();
    }
  }

  // Usage
  const textEditor = new TextEditor();
  const history = new History();

  textEditor.write("Hello,");
  const memento = textEditor.save();
  history.push(memento);

  textEditor.write("world!");
  console.log(textEditor.getContent());

  textEditor.restore(history.pop()!);
  console.log(textEditor.getContent());
}
