// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//this code is comparing the numbers 4 and 9. It is evaluating whether 4 is less than 9. 
//this statement is true so the code will print out 'true' into the console.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//this code is setting a variable called books to the number 3. 
//It is then evaluating whether 4 is less than books which is set to 3, so the answer would be false
//the code will print out false into the console.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// this code is setting two variables of friends and siblings. It is then evaluating whether the number of friends, 
//which is set to 6, is greater than the number of siblings which is set to 2. the statement is true so the code
//will print out true in the console.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// this code sets two variables, the number of attendees which is set to 9 and the number of meals which is set
//to 8. The code is then evaluating whether the number of attendees does not equal the number of meals. This
//statemet is true so the code will print out true into the console.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age < 2);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: it evaluated to true because in my head, i googled how long dogs are puppies for and it says 
//generally under two they are considered puppies so i evaluated if the dog was less than 2, it would be
//considered a puppy therefore this statement is true and printed out true. 