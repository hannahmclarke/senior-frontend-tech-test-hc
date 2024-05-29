/**
 * Converts string by determining ASCII codes for each character,
 * and shifting position to the right by the specified number of places for encryption,
 * or by the reverse for decryption.
 *
 * Uppercase characters run from 65 - 90
 *
 * Lowercase characters run from 97 - 122
 *
 * None-letters are ignored.
 * @param inputValue the string to convert
 * @param shiftNum the number of places to shift
 * @param isEncrypt true if encrypting, false if decrypting
 * @returns the converted string
 */
export const convertString = (
  inputValue: string,
  shiftNum: number,
  isEncrypt: boolean
): string => {
  const splitString = inputValue.split("");
  let returnString = "";
  const shiftValue = isEncrypt ? shiftNum : 26 - shiftNum;
  splitString.forEach((char) => {
    const originalCode = char.charCodeAt(0);
    const isLowerCase = originalCode >= 65 && originalCode <= 90;
    const isUpperCase = originalCode >= 97 && originalCode <= 122;
    if (isLowerCase) {
      const newValue = ((originalCode + shiftValue - 65) % 26) + 65;
      const newChar = String.fromCharCode(newValue);
      returnString += newChar;
    } else if (isUpperCase) {
      const newValue = ((originalCode + shiftValue - 97) % 26) + 97;
      const newChar = String.fromCharCode(newValue);
      returnString += newChar;
    } else {
      returnString += char;
    }
  });
  return returnString;
};
