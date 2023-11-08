

const removeDuplicates = (s) => {

    let stack = []

    for (const char of s) {
        console.log(char)
        console.log("top element --->", stack[stack.length - 1])
        let topElement = stack[stack.length - 1]

        if (stack.length && topElement === char) {
            stack.pop()
        } else {
            stack.push(char)
        }

    }

    return stack.join("")
}

console.log(removeDuplicates("abbaca"))