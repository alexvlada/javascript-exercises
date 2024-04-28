function printThreeLargest(arr) {
  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second; // Update third to second's value
      second = first; // Update second to first's value
      first = arr[i]; // Update first to the new highest value
    } else if (arr[i] > second) {
      third = second; // Update third to second's value
      second = arr[i]; // Update second if current is in between first and second
    } else if (arr[i] > third) {
      third = arr[i]; // Update third if current is in between second and third
    }
  }

  if (third === -Infinity) {
    console.log("Less than three unique elements in array.");
  } else {
    console.log("The three largest elements are:", first, second, "and", third);
  }
}

// Example usage
let numbers = [2, 1, 23, 12, 3, 26, 11];
printThreeLargest(numbers);