const LinkedList = require("./LinkedList");

const example = new LinkedList();

example.addToHead("George");
example.addToTail("Kwame");
example.addToTail("Kumi");
example.addToTail("Boakye");

console.log(example.checkForData("Kwabena"));

example.printList();
