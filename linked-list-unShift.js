class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class singlyLinkedList{
    constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
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

//     traverse(){
//         var current = this.head;
//         while(current){
//             console.log(current.val);
//             current = current.next;
//         }
//     }

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
       return current;
       console.log(current.val);
       console.log(newTail.val);
   }

   shift(){
       if(!this.head) return undefined;
       var currentHead = this.head;
       this.head = currentHead.next;
       this.length--;
       if(this.length === 0){
           this.tail = null;
       }
       return currentHead;
   }

   unshift(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      }else{
           newNode.next = this.head;
           this.head = newNode;
      }
     
      this.length++;
      return this;
   }
}

var list = new singlyLinkedList();
list.push("hello");
list.push("good bye");
list.push("!");
// list.traverse();



// var first = new Node("hi");
// first.next = new Node("hello");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
