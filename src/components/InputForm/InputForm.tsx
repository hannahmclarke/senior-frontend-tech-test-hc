import React, { useState } from "react";

import "./InputForm.css";

type InputFormProps = {
  inputString: string;
  inputShift: number;
  onStringChange: (val: string) => void;
  onShiftChange: (val: number) => void;
  onClick: (encryptDecrypt: EncryptDecrypt) => void;
};

export enum EncryptDecrypt {
  Encrypt = "encrypt",
  Decrypt = "decrypt",
}

const InputForm: React.FC<InputFormProps> = ({
  inputString,
  inputShift,
  onStringChange,
  onShiftChange,
  onClick,
}) => {
  const { Encrypt, Decrypt } = EncryptDecrypt;
  const [encryptDecrypt, setEncryptDecrypt] = useState<EncryptDecrypt>(Encrypt);
  return (
    <form data-testid="inputForm">
      <label htmlFor="stringInput">Input</label>
      <input
        id="stringInput"
        type="text"
        value={inputString}
        onChange={(e) => onStringChange(e.target.value)}
      />
      <div className="container">
        <div className="shift-container">
          <label htmlFor="shiftInput">Places to shift</label>
          <input
            id="shiftInput"
            type="number"
            value={inputShift}
            min={1}
            max={25}
            onChange={(e) => onShiftChange(Number(e.target.value))}
          />
        </div>
        <fieldset>
          <legend>Encrypt or decrypt?</legend>
          <label className="radio" htmlFor="encrypt">
            <input
              id="encrypt"
              type="radio"
              name="radioGroup"
              value={Encrypt}
              defaultChecked={true}
              onChange={(e) =>
                setEncryptDecrypt(e.target.value as EncryptDecrypt)
              }
            />
            Encrypt
          </label>
          <label className="radio" htmlFor="decrypt">
            <input
              id="decrypt"
              type="radio"
              name="radioGroup"
              value={Decrypt}
              onChange={(e) =>
                setEncryptDecrypt(e.target.value as EncryptDecrypt)
              }
            />
            Decrypt
          </label>
        </fieldset>
      </div>
      <button type="button" onClick={() => onClick(encryptDecrypt)}>
        Convert
      </button>
    </form>
  );
};

export default InputForm;
