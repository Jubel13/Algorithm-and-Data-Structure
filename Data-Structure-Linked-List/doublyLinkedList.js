class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    //* Check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //! check params before code usually
    const leader = this.traverseToIndex(index - 1);
    const removedNode = leader.next;
    leader.next = removedNode.next;
    leader.next.previous = leader;
    this.length--;
    return this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList.append(5));
console.log(myDoublyLinkedList.append(16));
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.insert(1, 88));
// console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.remove(2));
console.log(myDoublyLinkedList);
