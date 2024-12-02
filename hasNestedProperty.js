function hasNestedProperty(obj, path) {
  if (typeof obj != "object" || obj == null || typeof path != "string") {
    throw new Error("Bad passing arguments type");
  }

  path = path.split(".");
  
  
  for (let i = 0; i < path.length; ++i) {
    if (!(path[i] in obj)) {
      return false;
    } else {
      if (obj[path[i]] != null && typeof obj[path[i]] == "object") {
        obj = obj[path[i]];
      }
    } 
  }
  return true;
}

const user = { name: "Alice", address: { city: "Wonderland", zip: "12345", a: {l: 3} } };
console.log(hasNestedProperty(user, "name")); // true
console.log(hasNestedProperty(user, "address.city")); // true
console.log(hasNestedProperty(user, "address.state")); // false
console.log(hasNestedProperty(user, "address.a.l")); // true
