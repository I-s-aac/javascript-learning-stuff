const greetMessage = document.getElementById("greetMessage");
const date = new Date();
const timeOfPageLoad = date.getHours();


switch (true) {
    case (timeOfPageLoad >= 0 && timeOfPageLoad < 12):
        greetMessage.innerText = "Good Morning";
        break;
    case (timeOfPageLoad >= 12 && timeOfPageLoad < 18):
        greetMessage.innerText = "Good Afternoon";
        break;
    case (timeOfPageLoad >= 18 && timeOfPageLoad < 22):
        greetMessage.innerText = "Good Evening";
        break;
    case (timeOfPageLoad == 22 || timeOfPageLoad == 23):
        greetMessage.innerText = "Good Night";
        break;
    default:
        greetMessage.innerText = "you are in an invalid time";
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (a !== 0 && b !== 0) {
        return a / b;
    }
    return "error: divide by 0";

};
const modulus = (a, b) => a % b;
const powerOf = (a, b) => a ** b;

let var1;
let var2;
let var3;


function calculate() {
    let result = NaN;
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    // result = eval(`${number1} ${operation} ${number2}`);

    switch (operation) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        case "**":
            result = powerOf(number1, number2);
            break;
        case "%":
            result = modulus(number1, number2);
            break;
        default:
            result = NaN;
    }
    
    document.getElementById("output").innerText = result;
}