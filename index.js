const generatorButton = document.getElementById('btn');

const displayScreen = document.getElementById("display");

let result = '';

generatorButton.onclick = () => {
    const number = Number(document.getElementById('userInput').value);
    for(let i = 1; i <= 12; i++) {
        result += `${number} * ${i} = ${number * i} <br>`
    }

    displayScreen.innerHTML = result;
}