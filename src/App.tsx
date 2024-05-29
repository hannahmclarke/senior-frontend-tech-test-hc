import { useState, useContext } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { convertString } from "./utils/convertString";
import InputForm, { EncryptDecrypt } from "./components/InputForm/InputForm";
import Output from "./components/Output/Output";

function App() {
  const {
    initialInputValue,
    initialShiftValue,
    initialConvertedString,
    initialOutputHeading,
    initialButtonClicked,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState<string>(initialInputValue);
  const [shiftNum, setShiftNum] = useState<number>(initialShiftValue);
  const [convertedString, setConvertedString] = useState<string>(
    initialConvertedString
  );
  const [outputHeading, setOutputHeading] =
    useState<string>(initialOutputHeading);
  const [buttonClicked, setButtonClicked] =
    useState<boolean>(initialButtonClicked);

  /**
   * Handles form submission by calling the convertString function
   * and setting the output string and heading, and setting the buttonClicked
   * state to true
   *
   * @param isEncrypt an enum set to either Encrypt or Decrypt
   */
  const handleSubmit = (encryptDecrypt: EncryptDecrypt): void => {
    const isEncrypt = encryptDecrypt === EncryptDecrypt.Encrypt;
    const returnString = convertString(inputValue, shiftNum, isEncrypt);
    setConvertedString(returnString);
    setOutputHeading(isEncrypt ? "Encryption result" : "Decryption result");
    setButtonClicked(true);
  };

  return (
    <>
      <div>
        {/* <h1>The Bots Frontend coding challenge</h1>
        <p>
          For this challenge we would like you to create a{" "}
          <a href="https://en.wikipedia.org/wiki/Caesar_cipher">
            Caeser Cipher
          </a>
          . You will create an input, which will take any string and apply the
          cipher, then display the results below.
        </p>
        <h2>The Spec</h2>
        <ul>
          <li>
            Create a form which takes a string input, and outputs the string
            with the cipher applied
          </li>
          <li>
            Add a form element to set if the cipher is applied forwards or
            backwards
          </li>
          <li>Numbers & special characters should be ignored</li>
        </ul>

        <h2>Getting started</h2>
        <ul>
          <li>Open a terminal and run `npm run dev`</li>
          <li>A second terminal can be opened to run tests: `npm run test`</li>
        </ul>

        <h2>Considerations</h2>
        <ul>
          <li>No libraries please</li>
          <li>Please provide the solution with tests & types</li>
          <li>Expected time should be 1 hour</li>
        </ul>
        <p>
          Please fork this repo and send us a link to your solution. Good luck!
        </p> */}
        <h1 id="appHeading">Caesar Cipher</h1>
        <InputForm
          inputString={inputValue}
          onStringChange={(value) => setInputValue(value)}
          inputShift={shiftNum}
          onShiftChange={(value) => setShiftNum(value)}
          onClick={handleSubmit}
        />
        {buttonClicked && (
          <>
            {convertedString !== "" ? (
              <Output
                outputString={convertedString}
                outputHeading={outputHeading}
                isEmpty={false}
              />
            ) : (
              <Output outputString="Please enter a string to convert" isEmpty />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
