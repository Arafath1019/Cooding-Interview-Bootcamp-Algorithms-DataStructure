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


let s = new Stack();