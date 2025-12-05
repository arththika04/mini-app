const countDisplay = document.querySelector("#count");
const increaseBtn =document.querySelector("#increase");



let count = 0;

increaseBtn.addEventListener("click",()=> {
    count++;
    countDisplay.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.innerText =count;
});




