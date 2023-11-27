const dailyTemperatures = (temps) => {

    let stack = []
    let ans = new Array(temps.length).fill(0)

    for (let i = 0; i < temps.length; i++){
        // loop thru monotonic stack
        let lastElInStack = temps[stack[stack.length - 1]]
        let currTempEl = temps[i]

        while (stack.length && lastElInStack < currTempEl) {

            let j = stack.pop()
            ans[j] = i - j;
        }
        stack.push(i)
    }
    return ans
}

console.log(dailyTemperatures([40, 35, 32, 37, 50]))