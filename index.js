"use strict";
// i didnt know previously that you didnt have to reference other modules than just the main js file, good to know
import * as script2 from "./script2.js"; // without a default, returns a module object
import script1 from "./script1.js"; // with a default, returns just an object

console.log(script2);
console.log(script1);

function testInfo(info) {
    let re = /^\d{3}-\d{3}-\d{4}$/;
    let works = re.exec(info);
    works ? console.log("valid phone number: ", info) : console.warn("invalid phone number: ", info);
}


document.getElementById("phoneButton").addEventListener("click", (event) => {
    testInfo(document.getElementById("phone").value);
});


let string = "hello my name is jonathan. i am 46 years old.";
let string2 = "hello my name is dave. i am 46 years old.";
let re1 = /jonathan/;
let re2 = /46/;
let re3 = /jonathan|46/gi;

// console.log(re3.exec(string2));
console.log(string.match(re3));

