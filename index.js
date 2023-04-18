class LinkedList{

    constructor(){
        this.headNode = null;
        this.tailNode = null;
        this.size = 0;
    }

    append(value){
        const node = new Node(value);
        this.tailNode.nextNode = node;
        this.tailNode = node;
        this.size++;
    }

    prepend(value){
        const node = new Node(value);
        this.headNode.nextNode = node;
        this.nextNode = node;
        this.size++;
    }

    size(){
        return this.size;
    }

    head(){
        return this.headNode
    }

    tail(){
        return this.tailNode
    }

    at(index){

    }

    pop(){
        const node = new Node()

        this.size--;

    }

    contains(value){

    }

    find(value){

    }

    toString(){

    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}