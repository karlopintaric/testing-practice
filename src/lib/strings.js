export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  const charArray = string.split("");

  return charArray.reverse().join("");
}
