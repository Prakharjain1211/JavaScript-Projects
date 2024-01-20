const mainTitle = document.querySelector("#title");
const btnDecerement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");
let currValue = 0;

btnIncrement.addEventListener('click', ()=>{
    currValue++;
    mainTitle.textContent = currValue;
})

btnDecerement.addEventListener('click', ()=>{
    currValue--;
    mainTitle.textContent = currValue;
})

btnReset.addEventListener('click',()=>{
    currValue = 0;
    mainTitle.textContent = currValue;
})