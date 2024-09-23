/* // functions

console.log(this);
class myClass {
    constructor() {
        this.x = 0;
        // "this" refers to itself as a class
    }
}

let test = new myClass();

const test2 = () => {
    this.y = 0;
    // this uses global scope
    return this;
}

let test3 = test2();

console.log(test, test3);
const myFunction2 = function () {
    console.log(this);
}
myFunction2();

const myFunction3 = () => {
    console.log(this);
}
myFunction3();

() => {
    console.log("does this do anything");
}

// functions are objects
function a() {
    let variable = 0;
}
// console.log(variable); causes an error, variable is undefined


thing();

function thing() {
    console.log("thing called using code magic");
} */

/* function colors(red="red", blue="blue", purple="purple") {
    console.log(red, blue, purple);
}

const add = (a, b) => a + b;

colors();
let myColors = colors;
myColors();

let num = add(5, 10); */

// method: function of an object
/* 
const clickFunction = function () {
    console.log("stuff");
}
document.body.onload = function() {
    console.log("test");
}

document.addEventListener("clicK", clickFunction);
// document.removeEventListener("click", clickFunction); */

let number1 = 0;
let operator = null;
let number2 = 0;

const output = document.getElementById("output");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => {
    if (a === 0 || b === 0) return "Divide by 0 error";
    return a / b;
}
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;

function reset() {
    number1 = 0;
    number2 = 0;
    operator = null;
    output.innerText = 0;
}

function modifyOutput(modification) {
    output.innerText += modification;
}

function nextNumber(operation) {
    number1 = Number(output.innerText);
    output.innerText = "0";
    operator = operation;
}

function calculate() {
    let result = "NaN";
    let number2 = Number(output.innerText);
    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "%":
            result = mod(number1, number2);
            break;
    }
    output.innerText = result;
}

