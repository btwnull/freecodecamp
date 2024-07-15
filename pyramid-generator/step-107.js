// The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array. .unshift() returns the new length of the array it was called on.

// Example Code
// const countDown = [2, 1, 0];
// const newLength = countDown.unshift(3);
// console.log(countDown); // [3, 2, 1, 0]
// console.log(newLength); // 4
// Use const to declare an unshifted variable, and assign it the result of calling .unshift() on your numbers array. Pass 5 as the argument. Then print your unshifted variable.

const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
