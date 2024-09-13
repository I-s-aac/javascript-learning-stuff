const div = document.getElementById("div");


const log = (stuff) => {
    div.innerText += stuff
    div.innerHTML += "<br>";
}


log(typeof([1, 3, 2]))

function calculateFactorial() {
    let n = document.getElementById("numberInput").value
    let n2 = n;
    for (let i = n2 - 1; i > 1; i--) {
    n *= i
    }
    log(`factorial of ${n2} is ${n}`)   
}

