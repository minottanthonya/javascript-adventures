// create a function with 2 parameters, first and last. have it pring to the console
// "your first name is: first, you last name is: last" using a string literal remember string literals
// accepts valies inside of a string use this symbol: ${}

function name(first, last){
  console.log(`Your first name is: ${first} Your last name is: ${last}`)
}
name("Tony", "Minott")

// Write a function that accepts two numbers as parameters and then returns or console.logs the product of them.

function mult(num1, num2){
	return num1*num2;
}
var product = mult(2,2);

console.log(product);