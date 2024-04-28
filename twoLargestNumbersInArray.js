function printTwoLargest(arr) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
  
    // Print the first two elements
    console.log("The two largest elements are:", arr[0], "and", arr[1]);
  }
  
  // Example usage
  let numbers = [20, 34, 12, 59, 48];
  printTwoLargest(numbers);