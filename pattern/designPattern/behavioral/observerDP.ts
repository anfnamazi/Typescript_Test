/**
 * ### Core Concept
 * Subject: Maintains a list of observers and notifies them of changes.
 * Observer: Defines an interface for receiving updates.
 * Concrete Observers: Implement the update logic.
 *
 * ### Benefits
 * Loose coupling: Observers don’t need to know about each other.
 * Scalability: Easy to add/remove observers.
 * Flexibility: Works well for event systems, UI frameworks, and reactive programming.
 */

namespace observerDP {
  interface IObserver {
    update(tempature: number): void;
  }

  class WeatherStation {
    observers: IObserver[] = [];
    tempature: number = 0;

    add(observer: IObserver): void {
      this.observers.push(observer);
    }

    remove(observer: IObserver): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(tempature: number): void {
      this.observers.forEach((observer) => observer.update(tempature));
    }
  }

  const station = new WeatherStation();

  class TempatureDisplay implements IObserver {
    update(tempature: number): void {
      console.log(`Tempature Display: ${tempature}`);
    }
  }

  class TempatureAlert implements IObserver {
    update(tempature: number): void {
      if (tempature > 30) {
        console.log("Tempature Alert: It's too hot!");
      }
    }
  }

  const display = new TempatureDisplay();
  const alert = new TempatureAlert();

  station.add(display);
  station.add(alert);

  station.notify(25); // Tempature Display: 25
  station.notify(35); // Tempature Display: 35, Tempature Alert: It's too hot!
}
