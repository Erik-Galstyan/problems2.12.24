function evaluateLogical(a, b, operation) {
  if (typeof operation != "string") {
    throw new Error("3rd argument must be string");
  }
  if (operation == "&&") {
    if (!Boolean(a)) {
      return a;
    } else {
      return b;
    }
  }
  if (operation == "||") {
    if (Boolean(a)) {
      return a;
    } else {
      return b;
    }
  }
  if (operation == "??") {
    if (a != null) {
      if (a != undefined) {
        return a;
      } else {
        return b;
      }
    } else {
      return b;
    }
  }
}

console.log(evaluateLogical(5, 1, "||"));
console.log(evaluateLogical(null, 1, "&&"));
console.log(evaluateLogical(0, null, "??"));
