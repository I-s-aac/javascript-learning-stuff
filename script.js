"use strict";

// class User {
//     constructor() {
//         this.firstName = "";
//         this.lastName = "";
//         this.email = "";
//         // don't store passwords like this
//         this.phone = 1111111111111;
//         this.cart = new Cart();
//     }
// }

// class BusinessUser extends User {
//     constructor() {
//         super();

//         this.businessName = "";
//         this.businessAddress = "a street address";
//         this.address2 = "another address"; // optional
//         this.city = "";
//         this.state = "";
//         this.zip = "";
//         this.employeeCount = 0;
//         this.industry = "";
//     }
// }

// class Product {
//     #reviews = [];
//     constructor() {
//         this.price = 0.00;
//         this.title = "title of product";
//         this.description = "description of item";
//         this.stars = 1; // range 1-5
//         this.features = {
//             "feature1": "stuff"
//         };
//         this.specs = {
//             "general": {
//                 "name": "value"
//             },
//             "other": {
//                 "name": "value"
//             }
//         }
//         this.images = {};
//     }

//     set addReview(review) {
//         this.#reviews.push(review);
//         // thing to do math with the new review's star amount
//     }
// }

// class Cart {
//     constructor() {
//         this.items = {};
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         this.items = this.items.filter((i) => i.id !== item.id)
//     }
// }




// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("myPromise");
//         Math.random() > 0.5 ? resolve() : reject();
//     }, 1000);
// });

// const myPromise2 = () =>
//     new Promise((resolve, reject) => {
//         Math.random() > 0.5 ? console.log(test) : console.log("didn't cause an error");
//         setTimeout(() => {
//             resolve("hello");
//         }, 300);
//     })

// myPromise2()
//     .then((thing) => {
//         console.log(thing, " <-- output from resolve");
//     })
//     .catch((error) => {
//         console.log(error, " <-- output from reject or errors");
//     })
//     .finally(() => {
//         console.log("always runs after the promise is finished");
//     });


// const test = param => param**2;
// console.log(test(4));

// fetch("https://swapi.dev/api/people/1/")
//     .then((response) => {
//         console.log(response);
//         if (!response.ok) { throw new Error("error in fetch") }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.warn("error in fetch: ", error);
//     })


// const timeoutFunc = (delay) => {
//     setTimeout(() => {
//         console.log("setTimeout 1");
//         setTimeout(() => {
//             console.log("setTimeout 2");
//             setTimeout(() => {
//                 console.log("setTimeout 3");
//                 setTimeout(() => {
//                     console.log("setTimeout 4");
//                 }, delay);
//             }, delay);
//         }, delay);
//     }, delay);
// };
// // timeoutFunc(100);
// let num = 0;
// const promiseFunc = (delay) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             num++;
//             console.log("timeout ", num);
//             num < 4 ? resolve() : reject();
//         }, delay);
//     })
//         .then(() => {
//             promiseFunc(delay);
//         })
//         .catch(() => {

//         })

// // promiseFunc(500);
// let delay = 500;
// const promiseTimeout = () => {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("hi");
//             resolve();
//         }, delay);
//     })
// }

// promiseTimeout();


// const promiseTimeout = (delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay)
//     })
// }

// let delay = 500;
// const asyncArrow = async (delay) => {
//     try {
//         await promiseTimeout(delay);
//         console.log("timeout 1");

//         await promiseTimeout(delay);
//         console.log("timeout 2");

//         await promiseTimeout(delay);
//         console.log("timeout 3");

//         await promiseTimeout(delay);
//         console.log("timeout 4");
//     } catch (error) {
//         console.log("an error happened: ", error);
//     }

// }

// asyncArrow(delay);


const test = async (url) => {
    try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        console.log(response);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.warn("error: ", error);
    }
}
// test();

const loadButton = document.getElementById("loadButton");
const nameDiv = document.getElementById("name");
const eyeColorDiv = document.getElementById("eyeColor");

const updateInfo = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        const name = data.name;
        const eyeColor = data.eye_color;
        nameDiv.innerText = name;
        eyeColorDiv.innerText = eyeColor;
    } catch (error) {
        console.log("error from updateInfo", error);
    }
}

loadButton.onclick = (event) => {
    updateInfo();
}