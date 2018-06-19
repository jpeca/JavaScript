// Produces a new array that has the same elements in the inverse order
function reverseArray( array) {
  let rArray = [];
  for (let i = 0; i < array.length ; i++)  rArray.unshift(array[i]);
  return rArray;
}
// Modifies the array given as argument by reversing its elements.
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
