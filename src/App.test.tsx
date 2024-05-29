/**
 * @jest-environment jsdom
 */

import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppContext, defaultState } from "./AppContext";

describe("App", () => {
  it("renders correctly", () => {
    const container = document.createElement("div");
    const root = createRoot(container);

    act(() => root.render(<App />));

    const heading = container.querySelector("#appHeading");
    const inputForm = container.querySelector('[data-testid="inputForm"]');
    const output = container.querySelector('[data-testid="output"]');
    const validationOutput = container.querySelector(
      '[data-testid="validationOutput"]'
    );

    expect(heading).not.toBeNull();
    expect(heading?.textContent).toBe("Caesar Cipher");

    expect(inputForm).not.toBeNull();

    // There should be no output or validation output on initial render
    expect(output).toBeNull();
    expect(validationOutput).toBeNull();
  });

  it("renders validation output when button has been clicked and inputValue is empty", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    const state = { ...defaultState, initialButtonClicked: true };

    act(() =>
      root.render(
        <AppContext.Provider value={state}>
          <App />
        </AppContext.Provider>
      )
    );
    const output = container.querySelector('[data-testid="validationOutput"]');

    expect(output).not.toBeNull();
    expect(output?.textContent).toBe("Please enter a string to convert");
  });

  it("renders output when button has been clicked with inputValue, convertedString and outputHeading not empty", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    const state = {
      ...defaultState,
      initialButtonClicked: true,
      initialInputValue: "input string",
      initialConvertedString: "output string",
      initialOutputHeading: "heading",
    };

    act(() =>
      root.render(
        <AppContext.Provider value={state}>
          <App />
        </AppContext.Provider>
      )
    );
    const output = container.querySelector("#container");
    const outputHeading = container.querySelector("#outputHeading");

    expect(output).not.toBeNull();
    expect(output?.textContent).toBe("output string");

    expect(outputHeading).not.toBeNull();
    expect(outputHeading?.textContent).toBe("heading");
  });
});
