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
const findNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let numbersDivide = findNumbers.find(num => num % 2 === 0);
console.log(numbersDivide);

const obj = {a:'1' , b:'2' , c:'3'};
console.log(obj);