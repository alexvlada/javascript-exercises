
//alert("Hello, world!");

for (let i = 1; i <= 9; i++) {
    // Calculate the number of 'X's to print
    let numXs = 9 - i;
    let line = '';

    // Append 'X's to the line
    for (let j = 0; j < numXs; j++) {
        line += 'X';
    }

    // Append the numbers to the line
    for (let k = 0; k < i; k++) {
        line += i;
    }

    // Output the line
    console.log(line);
}