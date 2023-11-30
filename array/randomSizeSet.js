
const RandomSizeSet = function () {

    this.map = new Map();
    this.dataSet = [];

}


RandomSizeSet.prototype.insert = function (val) {

    if (this.map.has(val)) {
        return false
    }
    // store val to the hash map
    this.map.set(val, this.dataSet.length)
    // push val to the data set
    this.dataSet.push(val)

    return true
}


RandomSizeSet.prototype.remove = function (val) {

    if (!this.map.has(val)) {
        return false
    }

    const findIndex = this.map.get(val)

    const lastEl = this.dataSet[this.dataSet.length - 1]

    this.dataSet[findIndex] = lastEl

    this.map.set(lastEl, findIndex)

    this.dataSet.pop()

    this.map.delete(val)

    return true

}


RandomSizeSet.prototype.getRandom = function () {

    if(this.dataSet.length === 0) return undefined

    const randomIndex = Math.floor(Math.random() * this.dataSet.length)
    console.log("=========",randomIndex)

    return this.dataSet[randomIndex]
}

const obj = new RandomSizeSet()

const params1 = obj.insert(1)
const paramRemove = obj.remove(2)

const params2 = obj.insert(2)

const rand = obj.getRandom()

console.log(params1)
console.log(paramRemove)
console.log(params2)
console.log(rand)

