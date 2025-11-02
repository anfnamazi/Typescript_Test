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
    update(temperature: number): void;
  }

  class WeatherStation {
    observers: IObserver[] = [];
    temperature: number = 0;

    add(observer: IObserver): void {
      this.observers.push(observer);
    }

    remove(observer: IObserver): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(temperature: number): void {
      this.observers.forEach((observer) => observer.update(temperature));
    }
  }

  const station = new WeatherStation();

  class TemperatureDisplay implements IObserver {
    update(temperature: number): void {
      console.log(`Temperature Display: ${temperature}`);
    }
  }

  class TemperatureAlert implements IObserver {
    update(temperature: number): void {
      if (temperature > 30) {
        console.log("Temperature Alert: It's too hot!");
      }
    }
  }

  const display = new TemperatureDisplay();
  const alert = new TemperatureAlert();

  station.add(display);
  station.add(alert);

  station.notify(25); // Temperature Display: 25
  station.notify(35); // Temperature Display: 35, Temperature Alert: It's too hot!
}
