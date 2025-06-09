// indexOf2 : Trả về vị trí index đầu tiên trong mảng trùng với giá trị truyền vào, nếu truyền start => Bắt đầu tìm từ start
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
Array.prototype.includes2 = function (str, fromIndex) {
    let arrLength = this.length
    let hasElement = false
    for (let i = 0; i < arrLength; i++) {
        if (i in this) {
            if (str === this[i]) {
                hasElement = true
            }
        }
    }
    return hasElement ? true : false
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

// filter2 : Tạo ra một mảng mới với các giá trị thỏa mãn các điều kiện trong hàm

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

// reduce2 : Thực hiện tính toán cho các phần tử trong mảng => Trả về một kết quả cuối cùng. Nếu truyền giá trị initialValue thì đó là giá trị khởi tạo, còn ko chuyền thì sẽ là giá trị đầu tiên của mảng

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

// map2 : Duyệt qua từng phần tử trong mảng và mỗi phần tử sẽ gọi làm hàm(Thực thi trong hàm cho mỗi phần tử) => Trả về mảng mới

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

// every: Tất cả các phần tử trong mảng phải thỏa mãn điều kiện trong hàm => True. Ngược lại False
Array.prototype.every2 = function (callback, thisArg) {
    let arrLength = this.length
    let isCorrect = false

    for (let i = 0; i < arrLength; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                isCorrect = true
            } else {
                return false
            }
        }
    }
    return isCorrect
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

// ---------- includes2 ----------
console.log("-------------- includes2 --------------")

console.log(numbers.includes2(2))
console.log(mixed.includes2(NaN))
console.log(arr.includes2(30))

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

// ---------- every2 ----------
console.log("-------------- every2 --------------")

console.log(numbers.every2((value) => typeof value === "number"))

console.log(users.every2((user) => user.age < 18))

console.log(pets.every2((value) => typeof value === "string"))
