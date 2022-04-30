//Task 1
const person = {
    name: 'John' ,
    age: 22 ,
}
delete person.age;
delete person.name;
console.log(person);

//Task 2
const carTools = {
    wheels: 4 ,
    seats: 5 ,
}
console.log('wheels' in carTools);

//Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true ,
}
console.log(Object.keys(student)); //Намного проще)
console.log(Object.values(student));

//Или

for (const key in student) {
    console.log(key);
}
for (const key in student) {
    console.log(student[key]);
}

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
}
console.log(colors['ru pum pu ru rum'].red , colors['ru pum pu ru rum'].blue);

//Task 5
const salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}

const generatorMiddleSalaries  = function () {
    const valuesInSalaries = Object.values(salaries);
    let middleSalaries = null;
    for (let i = 0; i < valuesInSalaries.length; i++) {
        middleSalaries = (middleSalaries + valuesInSalaries[i]);
    }
    console.log(middleSalaries / valuesInSalaries.length);
}
generatorMiddleSalaries();

//Task 6
let userName = prompt('Create Your Name!');
let userPass = prompt('Now , create Your Password!');
const userInfo = {
    Name: userName ,
    Password: userPass ,
}
let userNameAgain = prompt('Repeat Your Name..');
let userPassAgain = prompt('Repeat Your Password..');
if (userNameAgain === userInfo.Name && userPassAgain === userInfo.Password) alert(`Добро Пожаловать ${userInfo.Name}!`);
else alert('Неверный Логин или Пороль!');

//Advanced Level ========================

//Task 1
let firstTeamGoals = '2';
let secondTeamGoals = '5';
const obj = {
    1:'Один',
    2:'Два',
    3:'Три',
    4:'Четыре',
    5:'Пять',
    6:'Шесть',
    7:'Семь',
    8:'Восемь',
    9:'Девять' ,
}
const objValues = Object.values(obj);
for (let i = 0; i < objValues.length; i++) {
    if (firstTeamGoals == i) console.log(objValues[i - 1]);
    else if (secondTeamGoals == i) console.log(objValues[i - 1]);
}

//Task 2
const student1 = {
    name: 'Polina',
    age: 27,
}
const student2 = {
    name: 'Polina',
    age: 27,
}
const firstFunction = Object.keys(student1) + Object.values(student1);
const secondFunction = Object.keys(student2) + Object.values(student2);
if (firstFunction === secondFunction) console.log(true);
else console.log(false);    