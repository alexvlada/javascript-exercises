let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // Output: [-4, 1, 2, 3, 3, 5, 6, 7, 8]
