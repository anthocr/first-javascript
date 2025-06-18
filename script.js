//Code Along 3
addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.textContent = 'Add Item';

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        console.log('Button clicked!');
        const entry = document.createElement('li');
        entry.textContent = 'New Item';
        list.appendChild(entry);
        entry.addEventListener('click', () => {
            console.log('Item clicked: ', entry.textContent);
            entry.remove();
        });
    });

    const list = document.createElement('ul');
    document.body.appendChild(list);

});

//Initial Javascript testing
document.getElementById("greeting").textContent = "Hi there!";
document.getElementById("h1").textContent = "The Header";

let items = document.getElementsByClassName("red-color");
for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Text change";
}

const header = document.querySelector("h1");
console.log(header);
const red = document.querySelectorAll(".red-color");
console.log(red);
document.getElementById("click").addEventListener("click", function () {
    alert("Clicked button!");
});

const pAnimate = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(1)" },
];

const pTiming = {
    duration: 2000,
    iterations: 1
};

document.getElementById("greeting").animate(pAnimate, pTiming);