const resultScreen = document.querySelector(".screen");
const btnClear = document.querySelector(".clear-key");
const btnNum = document.querySelectorAll(".num-key");
const btnOp = document.querySelectorAll(".op-key");
const btnPoint = document.querySelector(".point-key");
const btnResult = document.querySelector(".result-key");

let op = "";
let num1 = null;
let num2 = null;
let result = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
function modulo(num1, num2) {
    return num1 % num2;
}

function operate(op, num1, num2) {
    Number(num1);
    Number(num2);
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return subtract(num1, num2);
    } else if (op === '*') {
        return multiply(num1, num2);
    } else if (op === '/') {
        return divide(num1, num2);
    } else if (op === '%') {
        return modulo(num1, num2);
    }
}

btnNum.forEach(btn => {
    btn.addEventListener("click", event => {
        console.log(btn.innerHTML);
        num1 = num1 + btn.innerHTML;
        resultScreen.innerHTML = num1;
    });
});

btnOp.forEach(btn => {
    btn.addEventListener("click", event => {
        console.log(btn.innerHTML);
        if(num1 != null && op == "") {
            op = btn.innerHTML;
        }
    });
});

btnClear.addEventListener("click", event => {
    console.log(btnClear.innerHTML);
    console.log(btnResult.innerHTML);
    num1 = null;
    num2 = null;
    op = '';
    result = null;
    resultScreen.innerHTML = '0';
});

btnResult.addEventListener("click", event => {
    result = operate(op, num1, num2);
    num1 = result;
    resultScreen.innerHTML = result;
});

