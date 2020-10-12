class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "No elements in queue!";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in queue!!!";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }


    printQueue() {
        for (let i = 0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.printQueue();

q.dequeue();
q.front();
q.isEmpty();




