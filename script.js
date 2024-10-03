"use strict";
// challenge 1
// [1,2,2,1]
// find the first number that repeats (would be 2 in this case)
// apparently can also be done using a set, but i didn't know what a set was until today

// let array = [1, 2, 2, 1];
let array = ["a", "b", "c", "b"];

function findNthRepeat(array, count = 1) { // could be slightly faster without for...of
    let timesSeen = {};

    for (const item of array) {
        if (timesSeen[item] === count) {
            return item;
        }

        timesSeen[item] = timesSeen[item] ?? 0;
        timesSeen[item] += 1;
    }
}
