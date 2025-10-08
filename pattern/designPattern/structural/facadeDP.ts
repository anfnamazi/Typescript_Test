/**
 * ### Core Concepts
 * The Facade Pattern provides a simplified interface to a complex subsystem. It hides the intricacies of multiple classes and exposes a clean, unified API for clients to use.
 *
 * ### Case
 * Imagine a home theater setup with multiple components: DVD player, projector, lights, and sound system. Instead of controlling each one individually, we create a Facade to manage them all.
 *
 * ### Benefits
 * Simplifies usage: One method call replaces multiple subsystem calls.
 * Decouples client: The client doesn't need to know subsystem details.
 * Improves readability: Cleaner, more maintainable code.
 */

namespace facadeDP {
  class DVDPlayer {
    on() {
      console.log("DVD player on!");
    }

    play(movie: string) {
      console.log("Playing movie: " + movie);
    }

    off() {
      console.log("DVD player off!");
    }
  }

  class Projector {
    on() {
      console.log("Projector on!");
    }

    setMode(mode: string) {
      console.log("Projector mode change to " + mode);
    }

    off() {
      console.log("Project off!");
    }
  }

  class Lights {
    dim(level: number) {
      console.log("Lights dimmed to level " + level);
    }

    on() {
      console.log("Lights on!");
    }
  }

  class HomeTheaterFacade {
    constructor(
      private dvdPlayer: DVDPlayer,
      private projector: Projector,
      private lights: Lights
    ) {}

    watchMovie(dimLevel: number, movie: string, screenMode: string) {
      this.lights.dim(dimLevel);
      this.dvdPlayer.on();
      this.projector.on();
      this.dvdPlayer.play(movie);
      this.projector.setMode(screenMode);
    }

    endMovie() {
      this.lights.on();
      this.dvdPlayer.off();
      this.projector.off();
    }
  }

  // Usage
  const dvdPlayer = new DVDPlayer();
  const projector = new Projector();
  const lights = new Lights();

  const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, lights);
  console.log("########## start ##########");
  homeTheater.watchMovie(10, "Romeo & juliet", "Widescreen");
  console.log("########## end ##########");
  homeTheater.endMovie();
}
