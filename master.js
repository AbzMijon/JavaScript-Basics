// Task About New Users In Web-Site
const UserSample = function(name , age , isWife , skills)  {
    this.name = name;
    this.age = age;
    this.isWife = isWife;
    this.skills = skills;
}
const newUser1 = new UserSample('Vlad', 19, false, ['js', 'react', 'html']);
const newUser2 = new UserSample('Dima', 32, true, ['css', 'english', 'html']);
const newUser3 = new UserSample('Egor', 15, false, ['js', 'react', 'angular']);
const newUser4 = new UserSample('Oleg', 29, true, ['php', 'hmtl', 'css']);
const newUser5 = new UserSample('Yaroslav', 60, true, ['c#', 'Blender', 'Unity']);

let allUser = [newUser1, newUser2, newUser3, newUser4, newUser5];
console.log(allUser);
const allUserFilter = allUser.filter(elem => elem.age <= 18);
console.log(allUserFilter);
let accountTest = allUserFilter.map((elem , index) => `${index + 1} ${elem.name} - Passed Registration!`);
const resultAccount = () => {
    for (const iterator of accountTest) {
        console.log(iterator);
    }
}
resultAccount();


// Task with big DOM Arrays
const bigArr = [ [1, 2, 3, -4, 5, 6] , [-1, 99, 13, -13, -32] ];
console.log(bigArr[0][2]);
const oneBigArr = bigArr[0].concat(bigArr[1]);
const bigArrFilter = oneBigArr.filter(elem => elem <= 0);
console.log(bigArrFilter);

//Task with bad words (filter)
const badWords = ['fuck', 'bitch', 'idiot'];
let userStr = 'go fuck youself'
let userStrArr = userStr.split(' ');
let resultUserStr = userStrArr.filter(elem => {
    return !badWords.includes(elem);
})
console.log(resultUserStr.join(' '));

//Task with bad words (map)
const badword2 = ['badWord', 'badword'];
let userStr2 = 'go badword youself'
userStr2 = userStr2.split(' ');
const userStr2Filter = userStr2.map(elem => {
    if(badword2.includes(elem)) return '#'.repeat(elem.length);
    return elem;
})
console.log(userStr2Filter.join(' '));

//Task about array of items in shops and they sum with reduce
const productsList = {
        fish: 26,
        meat: 46,
        crips: 1,
        banana: 1,
        apple: 0.5,
        potato: 1.5,
        cola: 2,
        fanta: 2,
        water: 1,
        juice: 1.5,
        bear: 3,
        phone: 245,
        pc: 2585,
        book: 2.5,
}
const basket = [];
let userProducts = prompt('Enter what products you want !!!SPACE!!!');
userProducts = userProducts.split(' ');
const productsFilter = userProducts.map(elem => {
    if (Object.keys(productsList).includes(elem)) {
        return basket.push(elem);
    }
})
console.log(basket);

//Isogramm
let someStr = 'helo';
someStr = someStr.split('');
let resultArr = [];
const someStrFilter = someStr.filter(elem => {
    if(!resultArr.includes(elem)) return resultArr.push(elem);
})
if (someStr.join('') === someStrFilter.join('')) {
    console.log(true);
}
else console.log(false);