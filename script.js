"use strict";
/*
// scope and stuff

const test = {
    "x": 5,
    func: function () {
        console.log("refers to test: ", this);
        function func2() {
            console.log("refers to window: ", this);
        }
        func2();
        const func3 = () => {
            console.log("refers to test ", this);
        }
        func3();
    }
}

test.func();

function test1() {
    console.log("refers to window: ", this);
}
const test2 = () => {
    console.log("refers to window: ", this);
}
function test3() {
    console.log(this);
    this.name = "words";
    this.func = () => {
        console.log(this);
        function testTest() {
            console.log(this);
        }
        testTest();
        const testTestTest = () => {
            console.log(this);
        }
        testTestTest();
    }
    this.func2 = function () {
        console.log(this);
    }
}

test1();
test2();
const test4 = new test3();
test4.func();
test4.func2();

class testClass {
    constructor() {
        this.x = 5;
        this.func1 = () => {
            console.log(this);
            function thing() {
                console.log(this);
            }
            thing();
            const thing2 = () => {
                console.log(this);
            }
            thing2();
        }
    }

    testFunction() {
        console.log(this);
        function testTestTestTest() {
            console.log(this);
        }
        testTestTestTest();
        const arrowFunc = () => {
            console.log(this);
            const func999 = () => {
                console.log(this);
            }
            func999();
        }
        arrowFunc();
    }
}

const eee = new testClass;
eee.func1();
eee.testFunction();

let thing5 = "words";
// woah that would have been super useful in my world generation and other things
// ternary operators on stuff
// basically, if the "thing" property of thing5 exists, go check the next property thats there
// it'll just return undefined if one of the properties doesn't exist, like thing
console.log(thing5?.thing?.a);
 */

// object oriented programming
// i know a pretty good amount about that, its almost as if i did game dev
// time for classes

class Class {
    constructor(prop1, prop2, prop3) {
        this.prop1 = prop1 ? prop1 : "cheese";
        this.prop2 = prop2 ? prop2 : "cheese";
        this.prop3 = prop3 ? prop3 : "cheese";
        this.otherClassFunction = function() {
            //code
        }
    }

    classFunction() {
        console.log(this);
        // function test() { // basically, dont do this cuz this doesn't always refer to the object
        //     console.log(this);
        // }
        // test();
        const test2 = () => {
            console.log(this);
            const test3 = () => {
                console.log(this);
            }
            test3();
        }
        test2();
    }
}

class SubClass extends Class {
    constructor(prop1, prop4) {
        super(prop1);
        this.prop4 = prop4 ? prop4 : "cheese";
    }
}

// const class1 = new Class("words");
const subClass1 = new SubClass("words");

subClass1.classFunction();


// example of using classes
class Entity {
    constructor(x, y, xv, yv, health) {
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.xv = xv ?? 0;
        this.yv = yv ?? 0;
    }

    applyVelocity() {
        this.x += this.xv;
        this.y += this.yv;
    }
}

class Enemy extends Entity {
    constructor(stats, x, y, xv, yv) {
        super(x, y, xv, yv);
        // this.stats = stats; or
        this.health = stats.health ?? 10;
        this.attack = stats.attack ?? 1;
        this.defense = stats.defense ?? 0;
    }
}
const mediumStats = {
    "health": 50,
    "attack": 5,
    "defense": 3
}
const bossStats = {
    "health": 100,
    "attack": 10,
    "defense": 10
}
const basicEnemy = new Enemy(mediumStats);
const bossEnemy = new Enemy(bossStats);
