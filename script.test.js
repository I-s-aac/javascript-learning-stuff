describe("binarySearch", function () {
    // Test case for a target that exists in the middle of the array
    it("should return the correct index for an existing target", function () {
        const sortedArray = [1, 2, 3, 4, 5, 6];
        const target = 4;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(3); // Index of 4
    });

    // Test case for a target that does not exist in the array
    it("should return -1 for a target not in the array", function () {
        const sortedArray = [1, 2, 3, 4, 5, 6];
        const target = 7;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(-1);
    });

    // Test case for searching in an empty array
    it("should return -1 for an empty array", function () {
        const sortedArray = [];
        const target = 1;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(-1);
    });

    // Test case for searching in an array with one element (target present)
    it("should return 0 for an array with one element when the target is present", function () {
        const sortedArray = [10];
        const target = 10;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(0); // Only one element, at index 0
    });

    // Test case for searching in an array with one element (target absent)
    it("should return -1 for an array with one element when the target is absent", function () {
        const sortedArray = [10];
        const target = 5;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(-1);
    });

    // Test case for searching in an array with duplicate values
    it("should return the index of the first occurrence of the target in an array with duplicates", function () {
        const sortedArray = [1, 2, 4, 4, 4, 5];
        const target = 4;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(2); // First occurrence of 4
    });

    // Test case for searching in a large array
    it("should return the correct index in a large array", function () {
        const sortedArray = Array.from({ length: 1000 }, (_, i) => i);
        const target = 765;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(765);
    });

    // Test case for searching with negative numbers
    it("should correctly handle negative numbers", function () {
        const sortedArray = [-10, -5, 0, 5, 10];
        const target = -5;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(1);
    });

    // Test case for searching when the target is at the start of the array
    it("should return 0 when the target is the first element", function () {
        const sortedArray = [1, 2, 3, 4, 5];
        const target = 1;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(0);
    });

    // Test case for searching when the target is at the end of the array
    it("should return the last index when the target is the last element", function () {
        const sortedArray = [1, 2, 3, 4, 5];
        const target = 5;
        const result = binarySearch(sortedArray, target);
        expect(result).toBe(4);
    });
});
