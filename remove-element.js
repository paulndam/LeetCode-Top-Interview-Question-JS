
const removeEvent = (array, occurrenceValueToRemove) => {

    // remove occurrence values from array.
    // then return the number of elements in the array which are not equal to the occurrenceValueToRemove.

    let index = 0; // keep track of the next position where a non-occurrenceValueToRemove should be place.

    for (i = 0; i < array.length; i++) {
        console.log("i---->",i)
        if (array[i] !== occurrenceValueToRemove) {
            console.log("array[i]---->",array[i]);
            array[index] = array[i];
            console.log("array[index]---->",array[index]);
            index++
        }
    }
    console.log("index --->", index)
    return index
}

const array = [3, 2, 2, 3]
const value = 3

console.log(removeEvent(array, value))