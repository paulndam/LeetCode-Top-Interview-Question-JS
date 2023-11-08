function reverseString(str) {

    let left = 0;
    let right = str.length - 1
    let convertStrToArr = str.split('')

    while (left < right) {

        let temp = convertStrToArr[left]

        convertStrToArr[left] = convertStrToArr[right]

        convertStrToArr[right] = temp

        left++
        right --

    }
    return convertStrToArr.join('')
}

console.log(reverseString("hello"))