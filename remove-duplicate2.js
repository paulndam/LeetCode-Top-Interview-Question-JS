// remove duplicates from array
//so that each duplicated element in the array only appears twice and not more than that.


const removeDuplicates = (array) => {

    let index = 0

    // loop thru the array.
    for (let i = 0; i < array.length;){
        // set count, to keep track of the number of duplicates element.
        let count = 0

        // loop thru array again.
        // and check if current is equal to next element in the array.
        // if so increment the count.
        while (i < array.length && array[i] === array[i + count]) {
            count++
        }
        // now loop again in the array.
        // if the element is duplicated and isn't more than 2 elements
        // assign the index array element to it.
        for (let j = 0; j < Math.min(2, count); j++){
            array[index++] = array[i]
        }

        // set i (element in the array to the next element)
        i += count

    }

    return array.slice(0, index)


    // return index // for leet code test cases


}

const arrayElements = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates(arrayElements))