const Node = require("./Node");

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToHead() {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  removeHead() {
    const removedHead = this.head;
    this.head = removedHead.getNextNode();
    if (!removedHead) {
      return;
    }
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    this.size--;
    return removedHead.data;
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    this.tail = newTail;
    if (currentTail) {
      currentTail.setNextNode(newHead);
      newHead.setPreviousNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    this.size--;
    return removedTail.data;
  }
}

module.export = DoubleLinkedList;
