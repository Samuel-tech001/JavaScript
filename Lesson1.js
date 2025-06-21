//counter program
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseButton.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
