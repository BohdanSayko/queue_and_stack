class Queue{
    constructor(){
        this.array = [];
    }

    dequeue(){
        this.array.shift();
    }

    enqueue(number){
        this.array.push(number);
    }

    peek(){
        return this.array[0];
    }
}

let queue = new Queue();

for(let i = 1; i <= 10; i++){
    queue.enqueue(i);
}
queue.dequeue();
console.log(queue.peek());
