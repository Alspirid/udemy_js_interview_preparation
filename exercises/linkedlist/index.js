// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
      this.head = new Node(data,this.head);
  }
  size(){
    let node = this.head;
    let count = 1;
    if (this.head === null){
      return 0;
    }
    while(node.next) {
      node = node.next;
      count ++;
    }
    return count;
  }
  
  getFirst(){
    return this.head;
  }
  
  getLast(){
    let node = this.head;
    if (this.head === null){
      return null;
    }
    while(node.next){
      node = node.next;
    }
    return node;
  }
  
  clear(){
    this.head = null;
  }
  
  removeFirst(){
    this.head = this.head.next;
  }  
  removeLast(){
    if (!this.head || this.size() === 1) {
      this.head = null;
      return null;
    }
    let count = this.size() - 2;
    let node = this.head;
    while (count > 0) {
      node = node.next;
      count --;
    }
    node.next = null;
  }
  
  insertLast(data){
    if (!this.head){
      this.head = new Node(data);
    } else {
      this.getLast().next = new Node(data);
    }   
  }
  
  getAt(n){
    if ( n < 0 || n > this.size() ){
      return null;
    }
    let node = this.head;
    for (let i = 1; i <= n; i++) {
      node = node.next;
    }
    return node;  
  }
  
  removeAt(n){
    if (!this.head){
      return null;
    }
    if (n === 0){
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(n - 1);
    const next = this.getAt(n + 1);
    previous.next = next;
  }
  insertAt(data,n){
    if ( n > this.size() ){
      this.insertLast(data);
      return;
    }
    if (n === 0){
      this.head = new Node(data,this.head);
      return;
    }
    const previous = this.getAt(n - 1);
    previous.next = new Node(data,previous.next);
  }
  
  forEach(callback){
    for (let i = 0; i < this.size(); i++) {
      callback(this.getAt(i));
    }
    return;
  }
  
}

module.exports = { Node, LinkedList };
