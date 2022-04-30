//Task 1
const getSum = function (num) {
    let sum = null;
    for (let i = 0;i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
getSum(100);

//Task 2
const percentUser = function (sum) {
    let percentInYear = 0.17;
    let creaditYear = 5;
    return (sum * percentInYear) * creaditYear;
}
console.log(percentUser(100));

//Task 3
const trimString = function (str , from , to) {return str.slice(from , to);}
console.log(trimString('hello' , 1 , 4));

//Task 4
const getSumNumbers = function (number) {
    let numberMass = String(number);
    let sum = 0;
    for (let i = 0; i < numberMass.length; i++) {
        sum = sum + +numberMass[i];
    }
    return sum;
}
console.log(getSumNumbers(2021));

//Task 5
const getSumSecond = function (a , b) {
    let sum = null;
    if (a === b) return a || b;
    else {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(getSumSecond(-1 , 2));

//Task 6
const foo = function () {return 'foo'};
const boo = function () {return 'boo'};
const fooboo = function (bool) {
    if (bool) return foo();
    return boo();
}
console.log(fooboo(false));

//Advansed Level =============

//Task 1
const triangle = function (a , b , c) {
    if ( (a + b < c) || (b + c < a) || (c + a < b) ) return false;
    else if ( a <= 0 || b <= 0 || c <= 0 ) return false;
    return true;
}
console.log(triangle(10 , 10 , 15));

//Task 2 ---

//Task 3
let userMoneySum = +prompt('Enter how mach you have..');
const TEL = 95.00;
const ACCESS = 5.5;
const NALOG = 2.0;
let sumAll = TEL + ACCESS + NALOG;
console.log(`Начальный баланс карты состовляет: ${userMoneySum}$`);
    const shoping = function () {
        if (userMoneySum < sumAll) console.log(`У вас недостаточно средтв! На данный момент баланс карты состовляет ${+userMoneySum} $`);
            else {
                for (let i = userMoneySum; i >= sumAll; i = i - sumAll) {
                    console.log(-sumAll + '$');
                    console.log(`Остаток карты: ${i - sumAll}$`);
                }
            }
    }
shoping();