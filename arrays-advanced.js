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

//Task 4
const fibonacciSum = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const fibonacciSumResult = fibonacciSum.reduce((prev , next) => prev + next, 0);
const fibonacciSum2Result = fibonacciSum.reduce(function(prev , next) {prev + next}, 0);
console.log(fibonacciSumResult);
console.log(fibonacciSum2Result);

//Task 5
const findNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]; //Arrow Function
let numbersDivide = findNumbers.find(num => num % 2 === 0);
console.log(numbersDivide);
const findNumbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]; //Function Declaration
let numbersDivide2 = findNumbers2.find(function(num) { num % 2 === 0});
console.log(numbersDivide2);

//Advanced Level ==========================

//Task 1
const students = [];
const Student = function(name, rate , salary) {
    this.name = name;
    this.rate = rate;
    this.salary = salary;
    students.push(this);
}
const newStudent1 = new Student('Валентин', 'A', 3600);
const newStudent2 = new Student('Ярослав', 'A', 2500);
const newStudent3 = new Student('Егор', 'A', 2200);
const newStudent4 = new Student('Андрей', 'B', 1600);
const newStudent5 = new Student('Влад', 'C', 1400);
console.log(students);

const groupCredutSum = students.reduce((total , item) => {
    switch(item.rate) {
        case 'A':
            total = total + (item.salary * 12);
            break;
        case 'B':
            total = total + (item.salary * 9);
            break;
        case 'C':
            total = total + (item.salary * 6);
            break;
        case 'D':
            break;
        default:
            'Error 404';
    }
    return total;
} ,0) 
console.log(`Your group have credits on sum: ${groupCredutSum}`); 
console.log( (3600 * 12) + (2500 * 12) + (2200 * 12) + (1600 * 9) + (1400 * 6) ); //Проверка ;)

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

//Task 3
const userStrRepeat = 'Abcde';
const userStrRepeatArr = userStrRepeat.split('');
const result = userStrRepeatArr.map((elem, i) => {
    return elem[0].toUpperCase() + elem.repeat(i);
})
console.log(result.join(''));

//Task 4
let highAndLow = "1 2 3 4 5"; // return "5 1"
highAndLow = highAndLow.split(' ');
const highAndLowResult = Math.max(...highAndLow) + ' ' +  Math.min(...highAndLow); //С codewars узнал такое решение)
console.log(highAndLowResult);

//Task 5
let userStrIsogramm = 'hello';
userStrIsogramm = userStrIsogramm.split('');
let resultIsogrammArr = [];
const isogrammFilter = userStrIsogramm.filter(elem => {
    if(!resultIsogrammArr.includes(elem)) {
        resultIsogrammArr.push(elem);
    }
});
if (userStrIsogramm.join('') === resultIsogrammArr.join('')) console.log(`Word ${userStrIsogramm.join('')} - Isogramm !`);
else console.log(`Word ${userStrIsogramm.join('')} - NOT a Isogramm..`);