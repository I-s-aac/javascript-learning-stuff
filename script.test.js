describe("selectionSort", function() {
    it("should sort an array of numbers in ascending order", function() {
        expect(selectionSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    });

    it("should return an empty array when given an empty array", function() {
        expect(selectionSort([])).toEqual([]);
    });

    it("should handle an array with one element", function() {
        expect(selectionSort([42])).toEqual([42]);
    });

    it("should sort an already sorted array", function() {
        expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it("should sort an array with duplicate values", function() {
        expect(selectionSort([3, 1, 2, 2, 3])).toEqual([1, 2, 2, 3, 3]);
    });

    it("should sort a reverse sorted array", function() {
        expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle large numbers", function() {
        expect(selectionSort([1000000, 500, 0, -1000, 250])).toEqual([-1000, 0, 250, 500, 1000000]);
    });

    it("should handle negative numbers", function() {
        expect(selectionSort([-1, -5, 3, 2, 0])).toEqual([-5, -1, 0, 2, 3]);
    });

    it("should return the same array when all elements are the same", function() {
        expect(selectionSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
});
