class LinkedList {


    constructor(val) {
        this.val = val;
        this.next = null;
    }


}

const addNewNode = (prevNode, newNodeToAdd) => {

    newNodeToAdd.next = prevNode.next;
    console.log("new node to add -->",newNodeToAdd.next)
    prevNode.next = newNodeToAdd
    console.log("prev node to add -->",prevNode.next)
}

const deleteNode = (prevNode) => {
    prevNode.next = prevNode.next.next
}

const logLinkList = (head) => {
    let current = head
    let values = [];

    while (current !== null) {

        values.push(current.val);
        current = current.next;
    }
    console.log("LinkedList Elements : -->", values.join(' ---> '))
}


let head = new LinkedList(1)
let secondNode = new LinkedList(2)
let thirdNode = new LinkedList(3)


// linking the elements together
head.next = secondNode
secondNode.next = thirdNode

// log before adding new element
logLinkList(head)

// add new node(4) at the 3rd position or index[2]
let newNode = new LinkedList(4)
addNewNode(secondNode, newNode)

// log after adding new element
logLinkList(head)

// Deleting the newly added node.
deleteNode(secondNode)
// log list after deletion
console.log("---- after deletion ----")
logLinkList(head)