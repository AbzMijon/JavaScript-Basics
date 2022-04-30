// Task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

// Task 2
let sec = 60;
let min = 60;
let hours = 24;
let days = 365;
let myAgeInSeconds = sec * min * hours * days * 16;
console.log(myAgeInSeconds);

// Task 3
let count = 42;
let userName = '42';

console.log( count + '' );
console.log(String(count));
console.log(count.toString());

console.log(+userName);
console.log(Number(userName));
console.log(parseInt(userName));

// Task 4
let a = 1;
let b = 2;
let c = "белых медведей";
console.log(String(a) + b + ' ' + c); // or console.log(String(a) + String(b) + ' ' + c);

// Task 5
let word1 = 'доступ';
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубило';
let main = word1 + word2 + word3 + word4 + word5;
console.log(main.length);

// Task 6
let name = 'Егрик';
let age = 16;
let isProgrammer = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isProgrammer);

// Task 7
let userTitle = 'Name:' + prompt('Your name') + ',' + 'Age:' + ' ' + prompt('Your age');
console.log(`information about person: ${userTitle}`);

// *Advanced* Task 1
let first = 4;
let second = 3;
first = first + second - first;
second = second * 4 / second;
console.log(first);
console.log(second);

// *Advansed Task 2*
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = 'беги!';
console.log(cipher);
//or
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);

//---------Ready For Review----------