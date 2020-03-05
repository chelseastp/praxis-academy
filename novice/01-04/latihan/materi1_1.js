const firstString = '3 + 3'; // Creates a string literal value
const secondString = new String('3 + 3'); // Creates a String object
eval(firstString); // Returns the number 6
eval(secondString); // Returns the string "3 + 3"