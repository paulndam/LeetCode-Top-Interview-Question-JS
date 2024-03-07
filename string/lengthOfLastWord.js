

const lengthOfLastWord = (s) => {
    // split the words and filter only to get the words and ignore empty spaces
    const words = s.split(' ').filter((w) => w.length > 0)

    const lastWord = words[words.length - 1]

    return lastWord.length
}

console.log(lengthOfLastWord("Hello World"))