// Implement a Queue data structure using two stacks, Do not create an array inside of the Queue class, Queue should implement the methods "add", "remove" and "peek".

// Stack Class

class Stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        for (let i = 0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}


// Queue Class

class Queue{
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        let record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        let record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    isEmpty() {
        return this.first.length == 0;
    }
}