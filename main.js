// indexOf2

Array.prototype.indexOf2 = function (str, start) {
    let arrLength = this.length
    if (start) {
        for (let i = start; i < arrLength; i++) {
            if (i in this) {
                if (str === this[i]) return i
                return -1
            }
        }
    } else {
        for (let i = 0; i < arrLength; i++) {
            if (i in this) {
                if (str === this[i]) return i
            }
        }
        return -1
    }
}

// include2
Array.prototype.includes2 = function (str) {
    let arrLength = this.length
    let hasElement = false
    for (let i = 0; i < arrLength; i++) {
        if (i in this) {
            if (str === this[i]) {
                hasElement = true
            }
        }
    }
    if (hasElement) return true
    return false
}

// forEach2

Array.prototype.forEach2 = function (callback, thisArg) {
    let arrLength = this.length

    for (let i = 0; i < arrLength; i++) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

// filter2

let arr2 = [1, 2, 4, 6, 8]

Array.prototype.filter2 = function (callback, thisArg) {
    let arrLength = this.length
    let result = []
    for (let i = 0; i < arrLength; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i])
            }
        }
    }
    return result
}

// reduce2

Array.prototype.reduce2 = function (callback, initialValue) {
    let arrLength = this.length
    let accumulator
    let result = 0

    if (initialValue) {
        accumulator = initialValue
        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                accumulator = callback(accumulator, this[i], i, this)
            }
        }
    } else {
        accumulator = this[0]
        for (let i = 1; i < this.length; i++) {
            if (i in this) {
                accumulator = callback(accumulator, this[i], i, this)
            }
        }
    }

    return accumulator
}

// map2

Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length
    let result = new Array(length)

    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this)
        }
    }
    return result
}

const numbers = [1, 2, 3, 4]
const arr = [, 10, , 30]
const pets = ["cat", , "dog", "fish"]
const mixed = [0, null, undefined, "", "hello", 42]
const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
]

// ---------- forEach2 ----------
console.log("-------------- forEach2 --------------")

let result = []
numbers.forEach2((num) => result.push(num * 2))
console.log(result)

arr.forEach2((value, i) => console.log(`index ${i}:`, value))

pets.forEach2((pet) => console.log(pet))

// ---------- map2 ----------
console.log("---------------- map2 ----------------")

console.log(numbers.map2((num) => num * 2))

console.log(arr.map2((num) => num * 2))

console.log(pets.map2((str) => (str ? str.toUpperCase() : str)))

// ---------- filter2 ----------
console.log("-------------- filter2 --------------")

console.log(numbers.filter2((num) => num % 2 === 0))

console.log(mixed.filter2((value) => Boolean(value)))

console.log(users.filter2((user) => user.age >= 18))

// ---------- reduce2 ----------
console.log("-------------- reduce2 --------------")

console.log(numbers.reduce2((acc, num) => acc + num))

console.log(numbers.reduce2((acc, num) => acc * num, 1))

console.log(
    users.reduce2((acc, user) => {
        acc.push(user.name)
        return acc
    }, [])
)
