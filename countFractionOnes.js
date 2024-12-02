function countFractionOnes(str) {
  if (typeof str != 'string') {
    throw new Error("The Argument must be a string");
  }
  let countOfOnes = 0;
  let condition = 64 - 52;
  for (let i = str.length - 1; i != condition; --i) {
    if (str[i] == "1") {
      ++countOfOnes;
    }
  } 
  return countOfOnes;
}


console.log(countFractionOnes("1100000000011010000000000000000000000000000000000000000000000000"));
// Output: 1

console.log(countFractionOnes("0 01111111011 1001100110011001100110011001100110011001100110011010"));
// Output: 26