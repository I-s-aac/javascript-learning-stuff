const textThingy = document.getElementById("div");


function logToTextThingy(stuff) {
    if (textThingy !== null && typeof textThingy === "object") {
        textThingy.innerText += stuff
        textThingy.innerHTML += "<br>";
    }
}



function calculateFactorial() {
    let n = document.getElementById("numberInput").value
    let n2 = n;
    for (let i = n2 - 1; i > 1; i--) {
        n *= i
    }
    logToTextThingy(`factorial of ${n2} is ${n}`)
}

