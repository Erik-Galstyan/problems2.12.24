function evaluateTruthiness (arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The argument must be an array");
  }

  let res = {};
  res.truthy = arr.filter((data) => Boolean(data) === true);
  res.falsy = arr.filter((data) => Boolean(data) === false);
  return res;
}



console.log(evaluateTruthiness([0, 1, "", "hello", null, undefined, false, true, [], {}]));
// Output: { truthy: [1, "hello", true, [], {}], falsy: [0, "", null, undefined, false] }