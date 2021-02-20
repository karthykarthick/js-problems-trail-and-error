class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


// var node = new Node("hi");
// node.next = new Node("hello");
// node.next.next = new Node("how are");


class Likedlist{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
           this.head = newNode;
           this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new Likedlist();

