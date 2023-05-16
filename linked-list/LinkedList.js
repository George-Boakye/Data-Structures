const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
    this.size++;
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
    this.size++;
  }

  insert(data, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.addToHead(data);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.getNextNode();
      }
      const node = new Node(data);
      node.next = prev.getNextNode();
      prev.next = node;
      this.size++;
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    this.size--;
    return removedHead.data;
  }

  removeFrom(index) {
    let removedNode;
    let prev = this.head;
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.removeHead();
    } else {
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.getNextNode();
      prev.next = removedNode.next;
      this.size--;
      return removedNode;
    }
  }

  removeValue(value) {
    let prev = this.head;
    let removeNode;
    if (this.getSize() === 0) {
      return null;
    }
    if (value === this.head.data) {
      this.head = this.head.getNextNode();
      this.size--;
      return value;
    }
    while (prev !== null) {
      if (prev.getNextNode() === null) {
        return null;
      }
      if (prev.data === value) {
        break;
      }
      prev = prev.getNextNode();
    }

    removeNode = prev.next;
    prev.next = removeNode.getNextNode();
    this.size--;
    return removeNode.data;
  }

  checkForData(data) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";

    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;
