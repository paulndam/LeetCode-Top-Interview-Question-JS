

class DoublyLinkedList {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// adding a node at position i.
let addNode = (node, nodeToAdd) => {
    // step1.
    // set current node, to point to previous node.
    let prevNode = node.prev

    // step2.
    //  now make your nodeToAdd to point
    //to the node position where you are adding the node
    nodeToAdd.next = node;

    // step3.
    // adjust nodeToAdd.prev so that it points to the previous Node (prevNode)
    nodeToAdd.prev = prevNode;

    // step4.
    // now that pointer is at previous node.
    // make the pointer(prevNode.next) point to the nodeToAdd
    prevNode.next = nodeToAdd

    // step5.
    // finally also make that the node.prev is pointing to the nodeToAdd
    node.prev = nodeToAdd

}


let removeNode = (nodeToRemove) => {

    // set prev node pointer
    let prevNode = nodeToRemove.prev
    // set next node pointer
    let nextNode = nodeToRemove.next
    // adjust pointers to skip the node to remove, in order to delete/remove the node.
    prevNode.next = nextNode
    nextNode.prev = prevNode
}

let addNodeToEnd = (nodeToAdd) => {

    nodeToAdd.next = tail;
    nodeToAdd.prev = tail.prev;

    tail.prev.next = nodeToAdd;
    tail.prev = nodeToAdd
}


let addNodeToStart = (head, nodeToAdd) => {

    // if list is empty or
    // no node, then set nodeToAdd as head
    if (!head) return nodeToAdd

    //set prev of nodeToAdd as head
    nodeToAdd.prev = head
    // set next of nodeToAdd as head.next
    nodeToAdd.next = head.next

    // check if there's another node after the head.
    if (head.next) {
        // then adjust pointer of the head.next.prev node
        // to point to the nodeToAdd
        head.next.prev = nodeToAdd
    }
    // set pointer now of head.next to point to nodeToAdd
    head.next = nodeToAdd

}

let removeNodeFromEnd = () => {
    if (head.next == tail) return
    // set nodeToRemove to point to the node before the node to remove
    let nodeToRemove = tail.prev;
    // adjust your nodeToRemove previous next node to point to the tail
    nodeToRemove.prev.next = tail;
    // finally adjust pointer to point at the element before the nodeToRemove.
    tail.prev = nodeToRemove.prev
}




let removeNodeFromStart = () => {

    if (head.next == tail) return
    // set nodeToRemove pointer to point at next node/element
    let nodeToRemove = head.next
    // adjust nodeToRemove.next.prev pointer to be the head
    nodeToRemove.next.prev = head
    // finally pointer, which is currently at head, to point at the next node element.
    head.next = nodeToRemove.next
}


let head = new DoublyLinkedList(1)
let two = new DoublyLinkedList(2)
let three = new DoublyLinkedList(3)
let four = new DoublyLinkedList(4)
let five = new DoublyLinkedList(5)

addNodeToStart(head, two)
addNodeToStart(two, three)
addNodeToStart(three, four)
addNodeToStart(four, five)



console.log(head.value)
console.log(head.next.value)
console.log(head.next.next.value)
console.log(head.next.next.next.value)
console.log(head.next.next.next.next.value)


