
class DLinkedList {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const printDLinkedList = (head) => {

    let current = head
    let result = [];

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    console.log(`List Result ---> ${result.join()}`)
}

// Add node to end of list
const addNode = (head, nodeToAdd) => {

    if (!head) return nodeToAdd;

    let current = head

    while (current.next) {
        current = current.next
    }

    current.next = nodeToAdd
    nodeToAdd.prev = current

    return head
}

/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
*/

const reverseLL2 = (head, left, right) => {
    if (!head || left === right) return head;

    let dummy = new DLinkedList(0); // Create a dummy node
    dummy.next = head;
    head.prev = dummy;

    let prevNode = dummy;
    for (let i = 1; i < left; i++) {
        prevNode = prevNode.next;
    }

    let current = prevNode.next;
    let tail = null;
    let segmentEndNext = null; // To keep a reference to the node after the segment

    for (let i = 0; i < right - left + 1; i++) {
        let nextNode = current.next;
        if (i === right - left) segmentEndNext = nextNode; // Update the reference on the last iteration
        current.next = tail;
        if (tail) tail.prev = current;
        tail = current;
        current = nextNode;
    }

    prevNode.next.prev = null; // Disconnect prev of the original segment's start.
    prevNode.next = tail;
    tail.prev = prevNode;
    if (segmentEndNext) segmentEndNext.prev = tail; // Connect the segment's end to the saved next node
    tail.next = segmentEndNext;

    return dummy.next;
}

/*
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
*/

const deleteMiddleNodeDLL = (head) => {

    let fast = head;
    let slow = head;

    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next;
    }

    let prevNode = slow.prev;
    let nextNode = slow.next

    if(prevNode) prevNode.next = nextNode
    if(nextNode) nextNode.prev = prevNode


    return head

}



const deleteMiddleNodeSLL = (head) => {

    let fast = head;
    let slow = head;
    let prev = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow pointing to the middle node at this point
    if (prev) {
        prev.next = slow.next
    } else {
        head = head.next
    }

    return head

}

const removeNodeNthFromEndSLL = (head, n) => {

    let slow = head;
    let fast = head;

    const removeNode = (node) => {
        node.next = node.next.next
    }
    // iterate and move fast pointer n steps ahead
    for (let i = 0; i < n; i++){
        fast = fast.next
    }
    // if fast pointer is null ,
    // meaning its reached passed the end of the iteration
    // then the node to remove is the head
    if(!fast) return head.next

    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    removeNode(slow)

    return head

}


const removeNodeNthFromEndDLL = (head, n) => {
    let slow = head;
    let fast = head;

    const removeNode = (node) => {
        let prevNode = node.prev;
        let nextNode = node.next;

        prevNode.next = nextNode
        if (nextNode) {
            nextNode.prev = prevNode
        }

    }

    // iterate and move fast pointer n steps ahead
    for (let i = 0; i < n; i++){
        fast = fast.next
    }
    // if fast pointer is null ,
    // meaning its reached passed the end of the iteration
    // then the node to remove is the head
    if(!fast) return head.next


    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    if (slow) {
        removeNode(slow)
    }

    return head

}

/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
*/

const deleteDuplicatesSLL = (head) => {

    if (!head) return null;

    // dummy node to handle edge case
    let dummy = new DLinkedList(0,head)
    let slow = dummy;
    let fast = head;

    while (fast) {

        let hasDuplicates = false;

        while (fast.next && fast.next.value === fast.next.value) {
            fast = fast.next
            hasDuplicates = true

        }

        if (hasDuplicates) {
            slow.next = fast.next;
            fast = fast.next

        } else {
            slow = slow.next;
            fast = fast.next
        }
    }

    return dummy.next

}

const deleteDuplicatesDLL = (head) => {

    if (!head) return null;

    // dummy node to handle edge case
    let dummy = new DLinkedList(0)

    let slow = dummy
    let fast = head

    while (fast) {

        console.log("fast --->",fast.value)

        let hasDuplicates = false;

        while (fast.next && fast.next.value === fast.value) {
            fast = fast.next
            hasDuplicates = true

        }

        if (!hasDuplicates) {
            slow.next = fast;
            fast.prev = slow;
            slow = slow.next

        }
        fast = fast.next
    }

    slow.next = null

    return dummy.next

}

/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
*/
const swapNodesAtKthSLL = (head, k) => {

    // find the length of the list, in order to find the kth from the end.
        let temp = head;
        let count = 0;

        while (temp != null) {
            count++
            temp = temp.next
        }

    // if k is more than the length, as the node will overlap, return the head
    if (k > count || 2 * k == count + 1) {
        return head
    }

    // initialize two pointers
    let first = head;
    let second = head;

    // move first pointer to the kth node.
    for (let i = 1; i < k; i++) {
        first = first.next
    }

    // move second pointer to the kth node from the end.
    for (let i = 1; i < count - k + 1;i++) {
        second = second.next
    }

    // now swap the values.
    let tempValue = first.val
    first.val = second.val
    second.val = tempValue


    return head



}

const swapNodesAtKthDLL = (head, k) => {

    // find the length of the list, in order to find the kth from the end.
        let temp = head;
        let count = 0;

        while (temp != null) {
            count++
            temp = temp.next
        }

    // if k is more than the length, as the node will overlap, return the head
    if (k > count || 2 * k == count + 1) {
        return head
    }

    // initialize two pointers
    let first = head;
    let second = head;

    // move first pointer to the kth node.
    for (let i = 1; i < k; i++) {
        first = first.next
    }

    // move second pointer to the kth node from the end.
    for (let i = 1; i < count - k + 1;i++) {
        second = second.next
    }

    // now swap the values.
    let tempValue = first.value
    first.value = second.value
    second.value = tempValue


    return head

}

/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Input: head = [1,2,2,1]
Output: true
Input: head = [1,2]
Output: false
*/

const isPalindromeSLL = (head) => {
    // check if list is empty or only have 1 element.
    if (!head || !head.next) return true

    // initialize pointer
    let fast = head;
    let slow = head;

    // find middle of node first,
    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next
    }

    // once middle node is found.
    //reverse the second part of the list

    // get the middle part of list
    let curr = slow
    let prev = null;

    while (curr) {

        let nextNode = curr.next
        curr.next = prev;
        prev = curr
        curr = nextNode
    }

    // now that second part can be reversed
    // initialize variable for both first part and second part and compare the values
    let firstPart = head;
    let secondPart = prev;

    // loop thru them and compare their values
    while (firstPart && secondPart) {
        if (firstPart.val !== secondPart.val) return false;

        // move to the next node element
        firstPart = firstPart.next;
        secondPart = secondPart.next;

    }

    return true;

}


const isPalindromeDLL = (head) => {
    // check if list is empty or only have 1 element.
    if (!head || !head.next) return true

    // initialize pointer
    let fast = head;
    let slow = head;

    // find middle of node first,
    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next
    }

    // once middle node is found.
    //reverse the second part of the list

    // get the middle part of list
    let curr = slow
    let prev = null;

    while (curr) {

        let nextNode = curr.next
        curr.next = prev;
        if (prev) {
            prev.prev = curr
        }
        prev = curr
        curr = nextNode
    }

    // now that second part can be reversed
    // initialize variable for both first part and second part and compare the values
    let firstPart = head;
    let secondPart = prev;

    // loop thru them and compare their values
    while (firstPart && secondPart) {
        if (firstPart.value !== secondPart.value) return false;

        // move to the next node element
        firstPart = firstPart.next;
        secondPart = secondPart.prev; // were it changes for a DLL

    }

    return true;

}

const reverseEvenLengthGroupsSLL = (head) => {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0, head)
    let prevTail = dummy
    let currentNode = head;
    let groupIndex = 1;  // use group index to determine if we need to reverse

    while (currentNode) {
        let groupStart = currentNode;
        let groupEnd = groupStart;

        for (let i = 1; i <= groupIndex && groupEnd; i++) {
            groupEnd = groupEnd.next;
        }

        const nextGroupStart = groupEnd ? groupEnd.next : null;
        if (groupEnd) groupEnd.next = null;  // detach the group from the list

        if (groupIndex % 2 === 0) {
            let reverseHead = reverseGroup(groupStart);
            prevTail.next = reverseHead
            // since we have reversed, start then becomes tail
            while (prevTail.next) {
                prevTail = prevTail.next
            }
        } else {
            prevTail.next = groupStart
            while (prevTail.next) {
                prevTail = prevTail.next
            }

        }

        currentNode = nextGroupStart;
        groupIndex++;
    }

    return dummy.next
};

const reverseGroup = (start) => {
    let prev = null;
    let current = start;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

// const getTail = (node) => {
//     if (!node) return null;

//     while (node.next) {
//         node = node.next;
//     }
//     return node;
// };

/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.


Example 1:
Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
*/
const pairSum = (head) => {

    // set pointers
    let slow = head;
    let fast = head;

    let twinMaxSum = 0;

    // iterate ove list and find mid node
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // find length of the linked list
    let temp = head;
    let count = 0
    while (temp) {
        temp = temp.next;
        count++
    }

    let mid = slow

    // iterate over first part of the list
    for (let i = 0; i < count / 2; i++){
        let currentNode = head
        console.log("currentNode0 --->", currentNode.value)

        let twinNode = mid

        console.log("twinNode1 --->", twinNode.value)

        // move to the current node at i
        for (let j = 0; j < i; j++){
            currentNode = currentNode.next
            console.log("currentNode1 --->", currentNode.value)

        }

        // for each node, look for its twin node, formula is (count - 1 - i)
        for (let j = 0; j < (count/2 - 1 - i); j++){
            twinNode = twinNode.next

        }

        console.log("currentNode --->", currentNode.value, "twinNode ---->",twinNode.value)

        let currentSum = currentNode.value + twinNode.value

        twinMaxSum = Math.max(twinMaxSum,currentSum)

        head = head.next
    }

    return twinMaxSum
}

let head = new DLinkedList(4);
addNode(head, new DLinkedList(2));
addNode(head, new DLinkedList(2));
addNode(head, new DLinkedList(3));



// printDLinkedList(head)

// let reverse = reverseLL2(head,2,4)
// printDLinkedList(reverse)

// let removeMiddleNode = deleteMiddleNodeDLL(head)
// printDLinkedList(removeMiddleNode)

// let removeNthNodeFromEnd = removeNodeNthFromEndDLL(head,2)
// printDLinkedList(removeNthNodeFromEnd)

// let deleteDups = deleteDuplicatesDLL(head);
// printDLinkedList(deleteDups)

// let swapKthNodeVal = swapNodesAtKthDLL(head, 2)
// printDLinkedList(swapKthNodeVal)

// console.log(isPalindromeDLL(head))

console.log(pairSum(head))


