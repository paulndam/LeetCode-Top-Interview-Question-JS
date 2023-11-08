

class DLinkedList {

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

const addNode = (head, nodeToAdd) => {

    if (!head) return nodeToAdd;

    nodeToAdd.prev = head;
    nodeToAdd.next = head.next

    if (head.next) {
        head.next.prev = nodeToAdd;
    }

    head.next = nodeToAdd
}

/*
Example 1: Given the head of a linked list with an odd number of nodes head, return the value of the node in the middle.
For example, given a linked list that represents 1 -> 2 -> 3 -> 4 -> 5, return 3.
*/
const nodeInTheMiddle = (head) => {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.val;
}

/*
Example 2: 141. Linked List Cycle
Given the head of a linked list, determine if the linked list has a cycle.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
*/

const linkedListCycle = (head) => {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    return false
}

/*
Example 3: Given the head of a linked list and an integer k, return the kth node from the end.

For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2, return the node with value 4, as it is the 2nd node from the end.
*/


const nodeWithValue = (head, k) => {

    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next
    }

    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
}


let head = null;

head = addNode(head, new DLinkedList(1));

addNode(head, new DLinkedList(2));
addNode(head.next, new DLinkedList(3));
addNode(head.next.next, new DLinkedList(4));
addNode(head.next.next.next, new DLinkedList(5));
addNode(head.next.next.next.next, new DLinkedList(6));

console.log("Node in the Middle ---->", nodeInTheMiddle(head))
console.log("Linked list cycle --->", linkedListCycle(head))
console.log("Node with Value --->",nodeWithValue(head,2))

