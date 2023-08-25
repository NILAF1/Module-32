function stopWatch() {
  let x = 0;
  return function () {
    x++;
    return x;
  };
}

const firstPerson = stopWatch();
console.log(firstPerson());
console.log(firstPerson());
console.log(firstPerson());
console.log(firstPerson());
console.log(firstPerson());
console.log(firstPerson());

const secondPerson = stopWatch();
console.log(secondPerson());
console.log(firstPerson());

console.log(secondPerson());
console.log(secondPerson());
console.log(secondPerson());
console.log(secondPerson());
console.log(secondPerson());
console.log(secondPerson());
