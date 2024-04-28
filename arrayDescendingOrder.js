let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

numbers.sort(function(a, b) {
  return b - a; // Reverse the order by swapping b and a
});

console.log(numbers); // Output: [8, 7, 6, 5, 3, 3, 2, 1, -4]
