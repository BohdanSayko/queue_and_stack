class Stack{
    constructor(){
        this.arr = [];
    }

    push(number){
        this.arr.push(number);
    }

    pop(){
        this.arr.pop();
    }

    peek(){
       return this.arr[this.arr.length - 1];
    }
}

let stack = new Stack();

for(let i = 1; i < 10; i++){
	stack.push(i);
}
stack.pop();
console.log(stack.peek());
