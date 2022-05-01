// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => console.log(element)); //Arrow Function
fibonacci.forEach(function (element) {console.log(element)}); //Function Declaration

//Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let usersMember = users.map((elem , i) => console.log(`member ${i + 1}: ${elem}`)); //Arrow Function
let usersMember2 = users.map(function (elem , i) {console.log(`member ${i + 1}: ${elem}`)}); //Function Declaration

//Task 3
const filterNumbers = [7, -4, 32, -90, 54, 32, -21];
let numbersPositive = filterNumbers.filter(num => num > 0); //Arrow Function
let numbersPositive2 = filterNumbers.filter(function (num) {num >= 0}); //Function Declaration
console.log(numbersPositive);

//Task 4 ---------

//Task 5 ------------------
const findNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]; //Arrow Function
let numbersDivide = findNumbers.find(num => num % 2 === 0);
console.log(numbersDivide);
const findNumbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]; //Function Declaration
let numbersDivide2 = findNumbers2.find(function(num) { num % 2 === 0});
console.log(numbersDivide2);

//Advanced Level ==========================

//Task 1 ------------

//Task 2
//With Filter ----
const badWords = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']; 
let userMessage = prompt('Enter message to your friend!');
let userMessageArrays = userMessage.split('');
let userMessageResult = userMessageArrays.filter(elem => {
    return !badWords.includes(elem);
})
console.log(userMessageResult.join(''));
//With Map ----
const badWords2 = ['idiot', 'blunt', 'badWord'];
let userMessage2 = prompt('Enter message to your friend!');
let userMessage2Arrays = userMessage2.split(' ');
let userMessage2Result = userMessage2Arrays.map(elem => {
    if(badWords2.includes(elem)) {
        return '#'.repeat(elem.length);
    }
    return elem;
})
console.log(userMessage2Result.join(' '));
//With Replace ----
let userMessage3 = prompt('Enter message to your friend!');
let userMessage3Result = userMessage3.replace(/[aeiouy]/gi, '');
console.log(userMessage3Result);