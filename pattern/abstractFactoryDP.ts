/**
 * ### Core Concept
 * Instead of instantiating objects directly, you use a factory that produces related objects. Each factory corresponds to a specific family of products.
 *
 * ### Benefits
 * Encapsulation: Groups related object creation.
 * Consistency: Ensures compatible objects are used together.
 * Scalability: Easy to add new families (e.g., HighContrastTheme).
 */

namespace abstractFactoryDP {
  interface IButton {
    render(): void;
  }

  interface ITextbox {
    render(): void;
  }

  class LightButton implements IButton {
    render(): void {
      console.log("Render light button");
    }
  }

  class LightTextbox implements ITextbox {
    render(): void {
      console.log("Render light textbox");
    }
  }

  class DarkButton implements IButton {
    render(): void {
      console.log("Render dark button");
    }
  }

  class DarkTextbox implements ITextbox {
    render(): void {
      console.log("Render dark textbox");
    }
  }

  interface IUIComponentFactory {
    createButton(): IButton;
    createTextbox(): ITextbox;
  }

  class LightThemeFactory implements IUIComponentFactory {
    createButton(): IButton {
      return new LightButton();
    }
    createTextbox(): ITextbox {
      return new LightTextbox();
    }
  }

  class DarkThemeFactory implements IUIComponentFactory {
    createButton(): IButton {
      return new DarkButton();
    }
    createTextbox(): ITextbox {
      return new DarkTextbox();
    }
  }

  function renderUI(factory: IUIComponentFactory) {
    const button = factory.createButton();
    const textbox = factory.createTextbox();

    button.render();
    textbox.render();
  }

  // Render dark UI component sample
  const darkTheme = new DarkThemeFactory();
  renderUI(darkTheme);

  // Render light UI component sample
  const lightTheme = new LightThemeFactory();
  renderUI(lightTheme);
}
