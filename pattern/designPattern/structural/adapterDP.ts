/**
 * ### Core Concepts
 * Convert one interface to another expected by the client.
 * Promote code reusability and flexibility.
 * Useful when integrating legacy code or third-party libraries.
 *
 * ### Benefits
 * Integrating new code with legacy systems.
 * Wrapping third-party libraries to match your app’s interface.
 * Bridging incompatible interfaces in large systems.
 */

namespace adapterDP {
  class FahrenheitSensor {
    constructor(private temperature: number) {}
    getTemperature() {
      return this.temperature;
    }
  }

  interface ICelsiusSensor {
    getTemperatureInCelsius(): number;
  }

  class TemperatureAdapter implements ICelsiusSensor {
    constructor(private readonly sensor: FahrenheitSensor) {}

    getTemperatureInCelsius(): number {
      const fahrenheit = this.sensor.getTemperature();

      return ((fahrenheit - 32) * 5) / 9;
    }
  }

  // Usage
  const fahrenheitSensor = new FahrenheitSensor(98.6);

  const adapter = new TemperatureAdapter(fahrenheitSensor);
  console.log(adapter.getTemperatureInCelsius());
}
