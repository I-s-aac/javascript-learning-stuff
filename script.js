/* adding thingies
    let x = 20000;
    let y = 3;
    x = ++y;
    console.log(x); // logs 4
    console.log(y); // logs 4
 */


/* assignment operators
    +=, -=, =, *=, /=, %=
*/


/* logical operators
    ==, equal to
    ===, equal value and type
    <, <=, >=, >
    !=, not equal
    !==, not equal value or not equal type
    ?, ternary operator, ex. let variable = condition ? valueIfTrue : valueIfFalse;
    can also do
    let variable = condition1 ? value1 : condition2 ? value2 : value3
    or
    let variable = condition1 ? condition2 ? value1 : value2 : value3
    let variable = false ? true ? 1 : 2 : 3; // variable is equal to 3
*/


/* functions 1
    function func(x, y) {
        do stuff
    }
    same as
    const func = (x, y) => {
        do stuff
    }
    same as
    const func = (x, y) => do stuff;
*/


/* conditional execution (aka if statements)
    code
    code

    if (condition evaluates to true) {
        do thingA
    } else {
        do thingB
    }

    code
    code

    switch (expression) {
        case "a":
            code;
            break;

        case 1:
            code;
            break;

        case "1":
        case "2":
            code;
            break;

        default:
            code;
            shouldn't need break because it's at the bottom
    }

    code
    code

    if (conditon evaluates to true) {
        code
    } else if (condition2 evaluates to true) {
        code 
    } else {
        code 
    }

    code
    code

    if (a || b) or. apparently a "|" is called a pipe
    if (!a) not
    if (a && b) and
    xor doesn't exist, but can be made manually using more logic stuff

*/


/* getting truthiness
truthiness of "test" = !!"test"
*/


/* fizz buzz
    let number = 15;
    let text = "";

    text += a && b ? "FizzBuzz" : a ? "Fizz" : b ? "Buzz" : number;
    console.log(text);

    text = "";

    text += (number % 3 === 0) && (number % 5 === 0) ? "FizzBuzz" : (number % 3 === 0) ? "Fizz" : (number % 5 === 0) ? "Buzz" : number;
    console.log(text);

    text = "";

    if (a) text += "Fizz";
    if (b) text += "Buzz";
    if (text === "") text = number;

    console.log(text);
*/


/* more switch stuff
function getDrinkPrice(size) {
    size = size.toLowerCase();
     let prices = {
        "small": "$2.00",
        "medium": "$3.50",
        "large": "$4.50",
        "xlarge": "6.00"
    };
    if (prices[size] !== undefined) {
        return prices[size];
    }
    return "invalid size"
    
    switch (size) {
        case "small":
            return "$2.00";
        case "medium":
            return "$3.50";
        case "large":
            return "$4.50";
        case "xlarge":
            return "$6.00";
        default:
            return "invalid size";
    }
}


let price = getDrinkPrice("large");

console.log(price);
*/


/* palindrome checker 
function checkPalindrome(string) {
    string = string.toLowerCase();
    const regex = /[^a-z]+/g;
    string = string.replace(regex, "");

    const reversed = string.split("").reverse().join("") === string;
   
    return reversed

}
console.log(checkPalindrome("apple"));
console.log(checkPalindrome("ra  cec  ar"));
*/
