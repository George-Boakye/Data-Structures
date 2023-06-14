class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  getNextNode() {
    return this.next;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else throw new Error("Next node must be a member of the Node class");
  }

  getPreviousNode() {
    return this.prev;
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else throw new Error("Next node must be a member of the Node class");
  }
}

module.export = Node;
