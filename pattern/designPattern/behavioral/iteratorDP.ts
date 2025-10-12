/**
 * ### Core Concepts
 * The Iterator design pattern is a behavioral pattern that provides a way to access the elements of a collection (like an array or list) sequentially without exposing its underlying representation.
 *
 * ### Key Concepts
 * Iterator: An object that encapsulates the logic for traversing a collection.
 * Iterable: A collection that provides an interface to create an iterator.
 * Separation of concerns: The collection and the traversal logic are decoupled.
 *
 * ### Benefits
 * Makes your code cleaner and more modular.
 * Supports multiple traversal strategies (e.g., reverse, filtered).
 * Works well with custom data structures.
 */

namespace iteratorDP {
  interface Iterator<T> {
    next(): { value: T | null; done: boolean };
  }

  interface IterableCollection<T> {
    createIterator(): Iterator<T>;
  }

  class WordCollection implements IterableCollection<string> {
    private items: string[] = [];

    addItem(item: string) {
      this.items.push(item);
    }

    createIterator(): Iterator<string> {
      return new AlphabeticalOrderIterator(this);
    }

    getItems() {
      return this.items;
    }
  }

  class AlphabeticalOrderIterator implements Iterator<string> {
    private position: number = 0;
    private sortedItems: string[];

    constructor(collection: WordCollection) {
      this.sortedItems = [...collection.getItems()].sort();
    }

    next(): { value: string | null; done: boolean } {
      if (this.position < this.sortedItems.length) {
        return { value: this.sortedItems[this.position++], done: false };
      } else {
        return { value: null, done: true };
      }
    }
  }

  const collection = new WordCollection();
  collection.addItem("Banana");
  collection.addItem("Orange");
  collection.addItem("Apple");

  const iterator = collection.createIterator();

  let result = iterator.next();
  while (!result.done) {
    console.log(result.value);
    result = iterator.next();
  }
}
