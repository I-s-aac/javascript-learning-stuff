"use strict";

// returns index in an array of a given target, or -1 if not found
function binarySearch(array, target) {

    function search(array, target, start, end) {

        let midIndex = Math.floor((start + end) / 2);
        let midValue = array[midIndex];

        if (midValue === target) {
            return midIndex;
        } else if (start > end) {
            return -1;
        }

        if (midValue < target) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }

        return search(array, target, start, end);
    }

    return search(array, target, 0, array.length - 1);
}