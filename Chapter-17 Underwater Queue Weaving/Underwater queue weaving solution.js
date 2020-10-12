// Implement the weave function. Weave function receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the alternating contents of the two queues. The function should handle queues of different lengths without inserting "undefined" into the new one. Do not access the array inside of any queue, only use the "add", "remove" and "peek" functions.

// Queue Implementation
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


// Weave Function

function weave(sourceOne, sourceTwo) {
    let q = new Queue():

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.enqueue(sourceOne.dequeue());
        }

        if (sourceTwo.peek()) {
            q.enqueue(sourceTwo.dequeue());
        }
    }

    return q;
}