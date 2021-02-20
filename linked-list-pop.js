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

    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

   pop(){
       if(!this.head) return undefined;
       var current = this.head;
       var newTail = current;
       while(current.next){
           newTail = current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if(this.length === 0){
           this.head =null;
           this.tail = null;
       }
       return current;
   }



}

var list = new Likedlist();
list.push("karthy");
list.push("roclz");
list.push("wow");
