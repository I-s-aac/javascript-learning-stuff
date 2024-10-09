"use strict";

// binary search trees
// the key in a node must be larger or equal to any key to the left, and smaller/equal to any key to the right
// wonky
// fast, list stuff in order easily, apparently easy to implement
// disadvantage: if unbalanced, O(n) worst
// methods: insert, find, remove, size, print
// uses: sorted, no duplicates, like a map but with sorted keys, a phone book, dictionary, any sorteddatacollection

// example
// recursion is kinda confusing
// edit: recursion is very confusing
class Node {
    constructor(value) {
        this.value = value ?? null;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        let currentNode = this.root;

        if (!currentNode) {
            this.root = node;
            return;
        }
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            } else {
                return
            }
        }
    }
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, value) {
        if (!node) { return null; }
        if (value === node.value) {
            if (node.left === null && node.right === null) { return null; }
            if (node.left === null) { return node.right; }
            if (node.right === null) { return node.left; }

            let tempNode = this.find(node.right.value);
            node.value = tempNode.value;

            const removedValues = [
                ...this.nodeToArray(node.left),
                ...this.nodeToArray(node.right)
            ]
            node.left = null;
            node.right = null;

            removedValues.forEach((value) => {
                this.insert(value);
            });
            return node;

        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
        } else {
            node.right = this.removeNode(node.right, value);
        }
    }
    find(value) {
        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return null;
            }
        }
    }
    nodeToArray(node) {
        if (!node) { return []; }
        return [
            ...this.nodeToArray(node.left),
            node.value,
            ...this.nodeToArray(node.right)
        ]
    }
    size() {
        return this.nodeSize(ths.root);
    }
    nodeSize(node) {
        if (!node) { return 0; };
        return 1 + this.nodeSize(node.left) + this.nodeSize(node.right);
    }
    print() {
        console.log(this.nodeToArray(this.root));
    }
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(8);
tree.insert(4);
// tree.print();

function thing(node, doToNode) {
    if (node !== null) {
        thing(node.left, doToNode);
        doToNode(node);
        thing(node.right, doToNode);
    }
}
thing(tree.root, (node) => { console.log(node.value) });

function thing2(node, doToNode) {
    if (node !== null) {
        doToNode(node);
        thing2(node.left, doToNode);
        thing2(node.right, doToNode);
    }
}
thing2(tree.root, (node) => { console.log(node.value) })

// heaps
// a parent node must be greater than or equal to its children
// binary heap: parent node is greater or equal to childern, node max children = 2, top node is biggest
// methods: insert, find, remove, extractMax
// uses: heapsort search algorith, priority queue, some graph algorithms

class BinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp() { // not sure how this works
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element <= parent) { break; }
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }
    find(value) {

    }
    remove(value) {
        const index = this.heap.indexOf(value);
        if (index === -1) { return; }
        this.heap[index] = this.heap.pop();
        this.bubbleDown();
    }
    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
    }
    bubbleDown() {
        let index = 0
        const length = this.heap.length;
        const element = this.heap[0]
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;
            let leftChild, rightChild

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > elemnent) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) { break; }
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}