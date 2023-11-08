class DLinkedList {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const printDLL = (head) => {

    let current = head
    let result = [];

    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log("Doubly Linked List Result ---->",result.join())
}

// add node at start of list
const addNode = (head, nodeToAdd) => {

    if (!head) return nodeToAdd;

    nodeToAdd.prev = head;
    nodeToAdd.next = head.next

    if (head.next) {
        head.next.prev = nodeToAdd;
    }

    head.next = nodeToAdd

    return head;
}

/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

const middleNode = (head) => {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next
    }

    return slow

}

/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

const removeDuplicates = (head) => {

    if(!head) return null

    let slow = head;
    let fast = head.next;

    let removeNode = (nodeToRemove, head) => {

        // if nodeToRemove is the head node.
        if (nodeToRemove === head) {
            // move the head to point to the next node
            head = nodeToRemove.next

            // if we have a new head, update it previous pointer.
            if (head) {
                head.prev = null
            }
        } else {
            let prevNode = nodeToRemove.prev
            let nextNode = nodeToRemove.next

            prevNode.next = nextNode
            // if we are removing a middle node, update the next node previous pointer.
            if (nextNode) {
                nextNode.prev = prevNode
            }

        }

        return head
    }

    let removeNodeSingleLL = (node, head) => {
        if (!head) return null

        if (node === head) {
            return head.next
        }

        let currentNode = head
        let prevNode = null

        // traverse list to find the node to remove, while keeping track to previous node.
        while (currentNode && currentNode !== node) {
            prevNode = currentNode
            currentNode = currentNode.next
        }

        // if the node to remove was found,
        // update the next pointer of the previous node.
        if (currentNode) {
            prevNode.next = currentNode.next
        }
        return head

    }

    while (fast) {

        if (fast.value === slow.value) {
            // remove duplicates node
            head = removeNode(fast, head)
            // move fast to next node
            fast = slow.next
        } else {
            slow = fast;
            fast = fast.next
        }

    }

    return head
}


const reverseList = (head) => {

    let curr = head;
    let prev = null;

    while (curr) {
        // keep track of next node
        let nextNode = curr.next
        // revers arrow to point backwards.
        curr.next = prev;
        // set current  node to prev node
        prev = curr
        // move on
        curr = nextNode
    }

    return prev
}

const swapPairs = (head) => {

    // check if list have head or its empty list,if not just return it
    if (!head || !head.next) {
        return head
    }

    // set two pointers
    // keep track of the head next node
    let dummyHead = head.next // step 5
    let prev = null

    while (head && head.next) {

        // step4:
        if (prev) {
            prev.next = head.next
        }

        // step3:
        prev = head;

        // step2: keep track of next node pairs;
        let nextNode = head.next.next;

         // step1: make pointer points to next pair of node.
        head.next.next = head;

        // step 6:
        head.next = nextNode;
        head = nextNode

    }
    return dummyHead
}

const maxTwinSumLL = (head) => {

    // set pointers

    let fast = head;
    let slow = head;
    let prev = null

    let maxSum = -Infinity

    // find middle node first
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse second half of the array
    while (slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow
        slow = nextNode
   }

    // calculate pair sums
    slow = head
    // where the first node of the reverse second half is located
    fast = prev

    while (slow !== fast && fast !== null) {
        maxSum = Math.max(maxSum,slow.value + fast.value)

        slow = slow.next;
        fast = fast.next
    }

    return maxSum
}

let head = null;

head = addNode(head, new DLinkedList(1))
// for exercise problem
// addNode(head, new DLinkedList(2))
addNode(head, new DLinkedList(2))
addNode(head.next, new DLinkedList(3))
addNode(head.next.next, new DLinkedList(4))
addNode(head.next.next.next, new DLinkedList(5))
addNode(head.next.next.next, new DLinkedList(6))

// console.log(head.value)
// console.log(head.next.value)
// console.log(head.next.next.value)
// console.log(head.next.next.next.value)
// console.log(head.next.next.next.next.value)


// let midNode = middleNode(head)
// printDLL(midNode)

// let removeDups = removeDuplicates(head)
// printDLL(removeDups)

// let reverseHead = reverseList(head)
// printDLL(reverseHead)

// let swap = swapPairs(head)
// printDLL(swap)

let maxSum = maxTwinSumLL(head)
console.log(maxSum)