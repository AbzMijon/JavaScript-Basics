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
