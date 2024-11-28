const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentInput = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.number || button.dataset.operator || button.dataset.equal || button.dataset.clear || button.dataset.del;

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (value === 'DEL') {
            deleteLastDigit();
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else {
            appendNumber(value);
        }
    });
});


function appendNumber(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function handleOperator(op) {
    currentInput += op;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '0';
    }
}

function clearDisplay() {
    currentInput = '0';
    display.textContent = '0';
}

function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    display.textContent = currentInput;
}