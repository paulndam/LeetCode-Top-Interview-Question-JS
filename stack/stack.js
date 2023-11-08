

let stack = []

stack.push(1)
stack.push(2)
stack.push(3)

// stack.pop()
// stack.pop()

// check if its empty
// console.log(!stack.length)

// check top element
// console.log(stack[stack.length - 1])

// console.log(stack)

const isValidString = (str) => {

    let stack = []

    let matchingString = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (const char of str) {

        if (char in matchingString) {
            stack.push(char)
        } else {
            if (!stack.length) return false

            let lifoItem = stack.pop()

            if (matchingString[lifoItem] !== char) return false
        }

    }

    console.log(stack)

    return !stack.length
}

console.log(isValidString("{([]){}}"))
console.log(isValidString("({[)]}"))