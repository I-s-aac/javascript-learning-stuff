"use strict";

// sorting algorithms
function doRecursion(array, index = 0) {
    if (index >= array.length) {
        return array;
    }

    let lowest = index;

    for (let i = index; i < array.length; i++) {
        if (array[i] < array[lowest]) {
            lowest = i;
        }
    }

    [array[index], array[lowest]] = [array[lowest], array[index]];

    return doRecursion(array, index + 1);
}

function selectionSort(array) {
    // the recursion thingy can also be used
    let diminishingArray = array.slice();
    let sortedArray = [];


    let lowest = array[0];
    let lowestIndex = 0;

    while (diminishingArray.length > 0) {

        lowest = diminishingArray[0];
        lowestIndex = 0;

        for (let i = 0; i < diminishingArray.length; i++) {
            if (diminishingArray[i] < lowest) {
                lowest = diminishingArray[i];
                lowestIndex = i;
            }
        }

        sortedArray.push(lowest);
        diminishingArray.splice(lowestIndex, 1)[0];

    }

    return sortedArray;
}
