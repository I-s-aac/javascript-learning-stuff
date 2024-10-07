"use strict";
// the stack
// last in, first out (how you move stuff in a stack, ex. push/pop)
// peek (return top element w/o removing), clear, and size, are other methods for doing stack stuff
// stacks are arrays, but different bc semantic meaning and time complexity, stack have O(1) time complex methods
// stack methods: push, pop, peek, size
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.isEmpty() ? null : this.items.pop();
    }
    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}


let string = "{}{aa}a}{a{()aaa}";

function checkThing() {
    const stack = new Stack();
    let extraStuff = string.match(/[^(){}[\]]/g);
    let str = string.replace(/[^(){}]+/g, "");

    for (let i = 0; i < str.length; i++) {

        if (
            (stack.peek() === "{" && str[i] === "}") ||
            (stack.peek() === "(" && str[i] === ")") ||
            (stack.peek() === "[" && str[i] === "]")
        ) {
            stack.pop();
        } else if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        }
    }
    if (stack.size() !== 0) {
        console.warn("doesn't work");
    } else {
        console.log("works");
    }
    console.log(extraStuff.join(""));
}
checkThing();

function betterThing() {
    const stack = new Stack();
    const open = ["{", "(", "["];
    const close = ["}", ")", "]"];
    const matches = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    for (const char of string) {
        if (open.includes(char)) {
            stack.push(char);
        } else if (close.includes(char)) {
            if (stack.isEmpty()) {
                return false;
            }
            // mismatched brackets
            if (matches[stack.pop() !== char]) {
                return false;
            }
        } else {
            // do stuff?
        }
    }
}


// reverse polish notation
// num num num + *
// num + num * num?

// weak map
// const items = new WeakMap();





// queue, first in, first out



class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.isEmpty() ? null : this.items.shift();
    }
    peek() {
        return this.isEmpty() ? null : this.items[0];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}


// do reverse polish notation
// 3 4 -
// is
// 3 - 4

// wow RPN is kinda confusing
// but it also makes sense if you thonk hard enough

function reversePolishNotation(input) {
    const tokens = input.split(" ");
    const stack = new Stack();
    for (const token of tokens) {
        if (!["+", "-", "*", "/", "%"].includes(token)) {
            stack.push(Number(token));
        } else {
            let num2 = stack.pop();
            let num1 = stack.pop();

            let result = null;
            switch (token) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                case "%":
                    result = num1 % num2;
                    break;
            }
            stack.push(result);
        }
    }

    const finalResult = stack.pop();
    return finalResult;
}
console.log(
    reversePolishNotation("6 8 + 10 + 12 14 + -")
);