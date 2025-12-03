//Oscar Romero 11-29-2025

let currentExpression = '';

//this function will grab the number intered by the user and log it into the system and enter it into the currentExpression
function appendNumber(number) {
    currentExpression += number;
    document.getElementById('result').value = currentExpression;
}

//this function likewise will add the operator and add it to the currentExpression line
function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    document.getElementById
}

// this function will calculate the numbers and the operator used 
function calculateResult() {
    try{
        currentExpression = eval(currentExpression.replace('÷', "/").replace('×', '*'));
        document.getElementById('result').value = currentExpression;
    }
    catch{
        document.getElementById('result').value = 'Error';
    }
}

//this function clears the calculator 
function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}

const button = document.getElementById("enterButton");

enterButton.addEventListener('click', () => {           /*the event listener for the equal button*/
    enterButton.classList.add('pulsing-button');
    setTimeout(() => {
        enterButton.classList.remove('pulsing-button');
    }, 1000);
});
