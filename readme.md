Used Formula for generating random values

<!-- randomIntInclusive(min, max) {
  // Ensure min/max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Math.random() ⨉ (max – min + 1) gives [0, max–min+1), floor → [0, max–min]
  return Math.floor(Math.random() * (max - min + 1)) + min;
} -->

