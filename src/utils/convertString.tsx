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
  // Split the string into an array of characters
  const splitString = inputValue.split("");
  let returnString = "";
  // Determines the shift value based on whether encrypting or decrypting
  const shiftValue = isEncrypt ? shiftNum : 26 - shiftNum;
  splitString.forEach((char) => {
    // Gets the initial ASCII code for the character
    const originalCode = char.charCodeAt(0);
    const isLowerCase = originalCode >= 65 && originalCode <= 90;
    const isUpperCase = originalCode >= 97 && originalCode <= 122;
    if (isLowerCase) {
      const newCode = ((originalCode + shiftValue - 65) % 26) + 65;
      const newChar = String.fromCharCode(newCode);
      returnString += newChar;
    } else if (isUpperCase) {
      const newCode = ((originalCode + shiftValue - 97) % 26) + 97;
      const newChar = String.fromCharCode(newCode);
      returnString += newChar;
    } else {
      // Non-letter characters are ignored
      returnString += char;
    }
  });
  return returnString;
};
