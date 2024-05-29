/**
 * @jest-environment jsdom
 */

import { act } from "react";
import { createRoot } from "react-dom/client";
import Output from "./Output";

describe("Output", () => {
  it("renders correctly when isEmpty is false", () => {
    const container = document.createElement("div");
    const root = createRoot(container);

    act(() =>
      root.render(
        <Output
          outputString="output string"
          isEmpty={false}
          outputHeading="heading"
        />
      )
    );

    const outputHeading = container.querySelector("#outputHeading");
    const output = container.querySelector("#container");

    expect(outputHeading).not.toBeNull();
    expect(outputHeading?.textContent).toBe("heading");

    expect(output).not.toBeNull();
    expect(output?.textContent).toBe("output string");
  });

  it("renders correctly when isEmpty is true", () => {
    const container = document.createElement("div");
    const root = createRoot(container);

    act(() =>
      root.render(<Output outputString="Please enter a string" isEmpty />)
    );

    const outputHeading = container.querySelector("#outputHeading");
    const output = container.querySelector("#validation");

    expect(outputHeading).toBeNull();

    expect(output).not.toBeNull();
    expect(output?.textContent).toBe("Please enter a string");
  });
});
