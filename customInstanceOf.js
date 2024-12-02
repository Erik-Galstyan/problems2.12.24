


function customInstanceOf (obj, thatClass) {
  if (typeof thatClass != "function" || typeof obj != "object" || obj == null) {
    throw new Error("Wrong passed argument types");
  }

  let proto = Object.getPrototypeOf(obj);

  while (proto != null) {
    if (proto == thatClass.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(customInstanceOf(dog, Dog));     // true
console.log(customInstanceOf(dog, Animal));  // true
console.log(customInstanceOf(dog, Array));   // false