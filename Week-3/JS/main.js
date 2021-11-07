let textBox = document.getElementaryById(`text-box`);
let btn = document.getElementaryById(`btn`)

btn.addEventListener(`click`, function (){
    textBox.textContent =`Bye,Bye!`;
})