// Task 1
let str = 'true';
let bool = false;
let num = 17;
let nothing = undefined;
let not = null;
console.log(typeof str , typeof bool , typeof num , typeof nothing , typeof not);

// Task 2
let height = 25;
let width = 15;
if (height > width) {
    console.log(height);
}else if (height === width) {
    console.log('Here the equal');
}else {
    console.log(width);
}
    //Болле продвинутая версия)

/* let height = 5;
let width = 15;
if (height > width) {
    console.log(`${height} > ${width}`);
}else if (height === width) {
    console.log(`${height} = ${width}`);
}else {
    console.log(`${height} < ${width}`);
} */

// Task 3
for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) console.log(i);
}

// Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = null;
if ( key && documents && pen && (apple || orange) ) {
    console.log(shouldGoToWork = 'Смело иди на работу!');
}else {
    console.log(shouldGoToWork = 'Кажется мы что-то забыли..');
}

// Task 5
let userMessage = +prompt('Введите желаемое число..');
if (userMessage % 5 === 0 && userMessage % 3 === 0) {
    alert('FizzBuzz');
}   else if (userMessage % 5 === 0) {
        alert('Fizz');
}   else if (userMessage % 3 === 0) {
        alert('Buzz');
}   else {
        alert ('Ошибка ввода');
}

// Task 6
let userAge = +prompt('Сколько тебе лет?')
if (userAge > 18) {
    alert('Попей пивка!');
}   else if (userAge >= 16 && userAge <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори')
}   else {
    alert('Пффф , пей колу молодняк!')
}

// Task 7
let userSide = prompt('В какую сторону света вы бы хотели отправиться?');
switch (userSide) {
    case userSide = 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case userSide = 'север':
        console.log('на север пойдешь много денег найдешь');
        break;            
    case userSide = 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case userSide = 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        console.log('Ошибка ввода , попробуйте еще раз!');
        break; 
}

//Advanced Level ================================

//Task 1
let firstName = prompt('Введите ваше имя..');
let lastName = prompt('Введите вашу фамилию..');
alert('Приветствуем ' + ( firstName[0].toUpperCase() + firstName.substring(1).toLowerCase() ) + ' ' + ( lastName[0].toUpperCase() + lastName.substring(1).toLowerCase() ) + '!');

//Task 2
let userNumber = +prompt('Введите желаемое число');
let mathMinus = +prompt('Сколько отнять?');
let mathPlus = +prompt('Сколько прибавить?');
let mathMultip = +prompt('Сколько умножить?');
let mathDivide = +prompt('Сколько разделить?');
let mathAnswer = ((userNumber - mathMinus + mathPlus) * mathMultip) / mathDivide;
alert(` ((${userNumber} - ${mathMinus} + ${mathPlus}) * ${mathMultip}) / ${mathDivide} = ${mathAnswer} `);

//Task 3
for (let i = 0; i <= 6; i++) {
    console.log('#'.repeat(i));
}