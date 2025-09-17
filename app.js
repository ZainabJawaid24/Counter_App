const value = document.getElementById("value");
const btnInc = document.getElementById("increase");
const btnDec = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

let count = 0;

function displayCount(){
    value.textContent = count;

    if(count > 0){
        value.style.color = "#2575fc";
    } else if(count < 0){
        value.style.color = "#ff3838";
    } else{
        value.style.color = "#333";
    }
}

btnInc.addEventListener("click", () =>  {
    count++;
    displayCount();
})
btnDec.addEventListener("click", () =>  {
    count--;
    displayCount();
})
btnReset.addEventListener("click", () =>  {
    count = 0;
    displayCount();
})

displayCount();