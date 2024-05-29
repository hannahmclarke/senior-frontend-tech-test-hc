/**
 * @jest-environment jsdom
 */

import { act } from "react";
import { createRoot } from "react-dom/client";
import InputForm from "./InputForm";

describe("InputForm", () => {
  const mockFn = jest.fn();
  const initialProps = {
    inputString: "",
    inputShift: 1,
    onStringChange: mockFn,
    onShiftChange: mockFn,
    onClick: mockFn,
  };
  const container = document.createElement("div");
  const root = createRoot(container);

  it("renders correctly", () => {
    act(() => root.render(<InputForm {...initialProps} />));
    const stringInput = container.querySelector(
      "#stringInput"
    ) as HTMLInputElement;
    const shiftInput = container.querySelector(
      "#shiftInput"
    ) as HTMLInputElement;
    const encryptRadio = container.querySelector(
      "#encrypt"
    ) as HTMLInputElement;
    const decryptRadio = container.querySelector(
      "#decrypt"
    ) as HTMLInputElement;
    const button = container.querySelector("button") as HTMLButtonElement;

    expect(stringInput).not.toBeNull();
    expect(stringInput.value).toBe("");

    expect(shiftInput).not.toBeNull();
    expect(shiftInput.value).toBe("1");

    expect(encryptRadio).not.toBeNull();
    expect(encryptRadio.checked).toBe(true);

    expect(decryptRadio).not.toBeNull();
    expect(decryptRadio.checked).toBe(false);

    expect(button).not.toBeNull();
  });

  it("sets alternate radio button to false when one is clicked", () => {
    act(() => root.render(<InputForm {...initialProps} />));
    const encryptRadio = container.querySelector(
      "#encrypt"
    ) as HTMLInputElement;
    const decryptRadio = container.querySelector(
      "#decrypt"
    ) as HTMLInputElement;

    // Check initial values are correct
    expect(encryptRadio.checked).toBe(true);
    expect(decryptRadio.checked).toBe(false);

    act(() => {
      decryptRadio.click();
    });

    // Check values after decrypt radio button is clicked
    expect(encryptRadio.checked).toBe(false);
    expect(decryptRadio.checked).toBe(true);
  });
});
