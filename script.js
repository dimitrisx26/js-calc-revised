const resultScreen = document.querySelector(".screen");
const btnClear = document.querySelector(".clear-key");
const btnNum = document.querySelectorAll(".num-key");
const btnOp = document.querySelectorAll(".op-key");
const btnPoint = document.querySelector(".point-key");
const btnResult = document.querySelector(".result-key");

let op = "";
let num1 = "";
let num2 = "";
let result = "";

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}
function modulo(num1, num2) {
    return Number(num1) % Number(num2);
}

function operate() {
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return subtract(num1, num2);
    } else if (op === '*') {
        return multiply(num1, num2);
    } else if (op === '/') {
        if (num2 === 0) {
            resultScreen.innerHTML = "Error";
        } else{
            return divide(num1, num2);
        }

    } else if (op === '%') {
        return modulo(num1, num2);
    }
}

function display(num) {
 
   
    if (num1 == "") {
        num1 = num;
        resultScreen.innerHTML = num1;
    } else if (op == "") {
        num1 = num1 + num;
        resultScreen.innerHTML = num1;
    } 

    if (num1 != "" && num2 == "" && op != "") {
        num2 = num;
        resultScreen.innerHTML = num2;
    } else if (op != "") {
        num2 = num2 + num;
        resultScreen.innerHTML = num2;
    }

}

function clearScreen() {
    num1 = "";
    num2 = "";
    op = "";
    result = "";
    resultScreen.innerHTML = '0';
}

function calcResult() {
    result = operate();
    const temp = result;
    clearScreen();
    num1 = temp;
    result = temp;
    resultScreen.innerHTML = result;
}

btnNum.forEach(number => {
    number.addEventListener("click", event => {
        const num = number.innerHTML;
        display(num);
    });
});

btnOp.forEach(operator => {
    operator.addEventListener("click", event => {
        if(num1 != "" && op == "") {
            op = operator.innerHTML;
        }
    });
});

btnClear.addEventListener("click", event => {
    clearScreen();
});

btnResult.addEventListener("click", event => {
    calcResult();
});