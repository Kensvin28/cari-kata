function isValidCharacters(input: string): boolean {
  const regex = /^[a-zA-Z]*$/;
  return regex.test(input);
}

function isValidMapping(input: string): boolean {
  const pairs = input.split(',').map(pair => pair.trim());
  const regex = /^[1-9][0-9]*:[a-zA-Z]$/;
  return pairs.every(pair => regex.test(pair));
}

function isValidUnderscoreMapping(input: string): boolean {
  const regex = /^[a-zA-Z_]*$/;
  return regex.test(input);
}

export { isValidCharacters, isValidMapping, isValidUnderscoreMapping };