// ## Mild

// Write a JavaScript program that defines a variable that stores a Number. The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd. Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var num = 6;

if (num % 2 === 0){
    console.log('even')
} else {
    console.log('odd')
}

// ## Medium

// Using the following variables:

// ```javascript
var goodDrivingRecord = false;
var age = 24;
// ```

if (goodDrivingRecord == true && age > 25){
    console.log('You get a discount on the car rental!');
} else if (goodDrivingRecord === true || age > 25){
    console.log('You have to pay full price.');
} else if (goodDrivingRecord === false && age < 25){
    console.log('Please have another person sign up for this rental car.');
} else {
    console.log('Please try again!');
}

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

// ## Spicy
var num = 8;

if (num % 3 === 0){
    console.log('Fizz');
} else if (num % 5 === 0){
    console.log('Buzz');
} else if (num % 3 === 0 && num % 5 === 0){
    console.log('FizzBuzz');
} else {
    console.log(num);
}
// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.