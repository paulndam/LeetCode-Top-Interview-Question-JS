function minimumCardPickUp(card) {


    let dic = new Map();

    for (let i = 0; i < card.length; i++) {
        // check if the are no elements in the card array.
        // and then set those elements, in order to keep track of each element.
        if (!dic.has(card[i])) {
            dic.set(card[i],[])
        }
        // adding an element count to the array once it has been seen.
        dic.get(card[i]).push(i)
    }

    let ans = Infinity

    for (const [key, arr] of dic) {
        for (let i = 0; i < arr.length - 1; i++) {
            ans = Math.min(ans, arr[i + 1] - arr[i] + 1);

        }
    }

    return ans == Infinity ? -1 : ans;
}


console.log(minimumCardPickUp([1, 2, 6, 2, 1]))