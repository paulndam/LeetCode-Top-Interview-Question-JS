const removeDuplicates = (array) => {

    let index = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            array[index] = array[i]
            console.log("array[index]---->",array[index])
            index++
        }
    }
    console.log("index=",index)
    return index

}

const array = [1, 1, 2]
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))