class LinkedList{

    constructor(){
        this.headNode = null;
        this.tailNode = null;
        this.size = 0;
    }

    append(value){
        const node = new Node(value);
        if (this.tailNode === null) {
            this.headNode = node;
            this.tailNode = node;
        } else {
            this.tailNode.nextNode = node;
            this.tailNode = node;
        }
            this.size++;
    }

    prepend(value){
        const node = new Node(value);
        if(this.headNode === null){
            this.headNode = node;
            this.tailNode = node;
        }else{
            node.nextNode = this.headNode;
            this.headNode = node;
        }
        this.size++;
    }

    getSize(){
        return this.size;
    }

    getHead(){
        return this.headNode
    }

    getTail(){
        return this.tailNode
    }
    
    getAt(index){
        if(this.headNode === null){
            return;
        }
        let counter = 0;
        let node = this.headNode;
        while(node !== null){
            if(counter === index){
                return node;
            }else{
                node = node.nextNode
                counter++;
            }
        }
    }
    
    popNode(){
        if(this.headNode === null){
            return;
        }
        let previousNode = null;
        let currentNode = this.headNode;
        while(currentNode.nextNode !== null){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if(currentNode === null){
            return
        }
        previousNode.nextNode = currentNode.nextNode;
        this.tailNode = previousNode;
        this.size--;
    }
    
    contains(value){
        if(this.headNode === null){
            return;
        }
        let node = this.headNode;
        while(node !== null){
            if(node.value === value){
                return true
            }else{
                node = node.nextNode
            }
        }
        return false;
    }
    
    find(value){
        if(this.headNode === null){
            return;
        }
        let node = this.headNode;
        let counter = 0;
        while(node !== null){
            if(node.value === value){
                return counter;
            }else{
                node = node.nextNode;
                counter++;
            }
        }
        return null;
    }
    
    toString(){
        if(this.headNode === null){
            return;
        }
        let node = this.headNode;
        let string = '';
        while(node !== null){
            string += `( ${node.value} ) ->`;
            node = node.nextNode
        }
        return string;
    }

    removeAt(index){
        if(this.headNode === null){
            return;
        }
        let prev = null;
        let current = this.headNode;
        let counter = 0;
        while(current !== null){
            if(counter === index){
                if(current === this.headNode){
                    this.headNode = current.nextNode;
                }
                this.tailNode = prev;
                prev.nextNode = null;
                this.size--;
                break;
            }else{
                prev = current;
                current = current.nextNode;
                counter++;
            }
        }
    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}