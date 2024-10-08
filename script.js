"use strict";


// linked lists
// single and double 
// single
// stuff in the list has a reference to the next thing, last one points to null
// double
// stuff in the list has a pointer to previous and next item

class Node {
    constructor(data) {
        this.data = data ?? 0;
        this.next = null;
    }
}

class DoubleNode extends Node {
    constructor(data) {
        super(data);
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    prepend(data) {
        const node = new Node(data);


        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    deleteWithValue(data) {
        let currentNode = this.head;

        if (this.head === null) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        while (currentNode !== null) {
            if (currentNode.next?.data === data) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    printList() {
        if (this.head !== null) {
            let currentNode = this.head;
            while (currentNode !== null) {
                console.log(currentNode.data, currentNode.next);
                currentNode = currentNode.next;
            }
        }
    }
    insertAt(index, data) {
        const node = new Node(data);

        if (index < 0) {
            return;
        }
        if (index === 0) {
            this.prepend(node);
            return;
        }

        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode !== null && currentIndex < index) {
            if (currentIndex === index - 1) {
                node.next = currentNode.next;
                currentNode.next = node;
                return;
            }

            currentIndex++;
            currentNode = currentNode.next;
        }
        // index larger than list length, append node to list
        this.append(node);

    }
}

class DoubleLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }
    prepend() {
        
    }
    printReverse() {

    }
}

const list = new LinkedList();

list.append("water");
list.append("water 2");
list.prepend("water prepend");
list.printList();
console.log("line break");
list.deleteWithValue("water 2");
list.printList();