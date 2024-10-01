"use strict";

// const magicBox = document.getElementById("magicBox");
// // const input = document.getElementById("text");

// async function wait(ms = 0) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function getSampleText() {
//     try {
//         const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
//         // const response = await fetch("https://loremipsum.dev/api");
//         const data = await response.json();
//         const text = data.join("\n\n"); // Join the array into a single string
//         console.log(data);
//         return text;
//     } catch (error) {
//         console.error('Error:', error);
//         return '';
//     }
// }
// let breakMagic = false;
// let colors = [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "purple"
// ]
// let currentColor = 0;


// async function doMagic() {
//     //let string = input.value;
//     breakMagic = true;
//     let string = await getSampleText();
//     breakMagic = false;
//     magicBox.innerHTML = "";

//     for (let i = 0; i < string.length; i++) {
//         if (breakMagic) {
//             magicBox.innerText = "";
//             break;
//         }

//         let char = string[i] === " " ? "&nbsp;" : string[i];


//         magicBox.innerHTML += char;




//         // if ((i % 200) === 0 && i !== 0) { magicBox.innerHTML += "-<br>"; }
//         await wait();
//     }


//     // await wait(5000);
//     // doMagic();
// }


// localStorage

