export default function caesarCipher(string, shift) {
  const charArray = string.split("");
  const shiftedCharArray = charArray.map((s) => {
    const isLetter = checkIfLetter(s);
    if (!isLetter) {
      return s;
    }

    return shiftChar(s, shift);
  });

  return shiftedCharArray.join("");
}

function shiftChar(char, shift) {
  const isLower = checkIfLowerCase(char);
  const charCode = char.toLowerCase().charCodeAt(0);

  let newCharCode = charCode + (shift % 26);
  newCharCode = newCharCode > 122 ? 97 + (newCharCode - 122) - 1 : newCharCode;

  let shiftedChar = String.fromCharCode(newCharCode);

  if (!isLower) {
    shiftedChar = shiftedChar.toUpperCase();
  }

  return shiftedChar;
}

function checkIfLowerCase(s) {
  return s === s.toLowerCase();
}

function checkIfLetter(s) {
  return s.match(/[a-z]/gi);
}
