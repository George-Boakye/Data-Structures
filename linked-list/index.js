const LinkedList = require("./LinkedList");

const example = new LinkedList();

example.addToHead("George");
example.addToTail("Kwame");
example.addToTail("Kumi");
example.addToTail("Boakye");

example.printList();

function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1previous = null;
  let node2previous = null;

  if (data1 === data2) {
    console.log("Elements are the same - no swap to be made");
    return;
  }

  //finding the matching and preceding nodes
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1previous = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2previous = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  //update the preceding nodes pointers
  if (node1previous === null) {
    list.head = node2;
  }
  node1previous.setNextNode(node2);

  if (node2previous === null) {
    list.head = node1;
  }
  node2previous.setNextNode(node1);

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

example.reverse();

// let me = something;
example.printList();
