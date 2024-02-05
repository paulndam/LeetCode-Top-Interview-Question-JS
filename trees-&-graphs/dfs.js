// traversing through the tree and visiting each node
// using a recursion approach


class TreeNode{

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const dfs = (node) => {

    if (!node) {
        return `No root node provided`
    }

    dfs(node.left);
    dfs(node.right)

    return
}


// Three types of DFS
/**
 * 1. pre-order
 * 2. in-order
 * 3. post-order
 */
// Before the children
let preOrderDFS = (node) => {
    if (!node) {
        return
    }

    // Before the children
    // priority is the current node, where we apply the logic first
    console.log("---- pre order DFS")
    console.log("node val ====>",node.val);
    preOrderDFS(node.left)
    preOrderDFS(node.right)

    return
}

// In the middle of the children
let inOrderDFS = (node) => {
    if (!node) {
        return
    }

    // In the middle of the children
    // priority is the left node
    inOrderDFS(node.left)
    console.log("---- in order DFS")
    console.log("node val ---->", node.val)
    inOrderDFS(node.right)

    return
}

// after the children
let postOrderDFS = (node) => {
    if (!node) {
        return
    }

    // priorities are the children
    postOrderDFS(node.left)
    postOrderDFS(node.right)

    // apply logic
    console.log("---- post order -----")
    console.log(node.val)
}

const maxDepth = (node) => {

    // base case. if no node return 0
    if (!node) {
        return 0
    }

    // gives the max depth of left and right side
    let left = maxDepth(node.left);
    let right = maxDepth(node.right)

    return Math.max(left, right ) + 1


}




let rootNode = new TreeNode(0)
let one = new TreeNode(1)
let two = new TreeNode(2)

rootNode.left = one;
rootNode.right = two


console.log(preOrderDFS(rootNode))

console.log(inOrderDFS(rootNode))

console.log(postOrderDFS(rootNode))