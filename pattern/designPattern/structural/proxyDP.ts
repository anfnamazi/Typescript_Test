/**
 * ### Why use
 * To control access to an object (e.g., authentication, lazy loading).
 * To add functionality like logging, caching, or monitoring.
 * To delay expensive operations until absolutely necessary.
 *
 * ### Types
 * Virtual Proxy: Delays creation or loading of a resource.
 * Protection Proxy: Controls access based on permissions.
 * Remote Proxy: Represents an object in a different address space (e.g., network).
 * Smart Proxy: Adds extra behavior when accessing the object (e.g., reference counting).
 *
 * ### Benefits
 * Efficient resource usage.
 * Cleaner access control.
 * Easy to add cross-cutting concerns (logging, caching, etc.).
 */

namespace proxyDP {
  interface IVideo {
    play(): void;
  }

  class RealVideo implements IVideo {
    constructor(private filename: string) {
      this.loadFromDisk();
    }

    loadFromDisk() {
      console.log(`Loading Video: ${this.filename}`);
    }

    play(): void {
      console.log(`Playing Video: ${this.filename}`);
    }
  }

  class ProxyVideo implements IVideo {
    realVideo: RealVideo | null = null;
    constructor(private filename: string) {}

    play(): void {
      if (!this.realVideo) {
        this.realVideo = new RealVideo(this.filename);
      }
      this.realVideo.play();
    }
  }

  const proxyVideo = new ProxyVideo("test.mp4");
  // Video is not loaded yet
  console.log("Video created");

  // Now we play it — loading happens here
  proxyVideo.play();

  // Playing again — no loading this time
  proxyVideo.play();
}
