let button = document.getElementById('button');
let title = document.getElementById('title');

let counter = 0;


button.addEventListener('click', () => {
    counter++;
    title.innerText = counter;
    console.log(counter);
})
