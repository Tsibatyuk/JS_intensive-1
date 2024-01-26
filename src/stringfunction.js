let theName = " !11. 22. Chupakabra!"

console.log(theName.length)
console.log(theName.concat('!'))
console.log(theName.split("."))
console.log(...theName.split("."))
console.log(theName.trimEnd())
console.log(theName.substring(1, theName.length-1))
console.log(theName.padStart(30, "kaka"))
console.log(theName.indexOf("."))

let number = 5.4

console.log(Math.ceil(number))
console.log(Math.floor(number))
console.log(Math.round(number))
console.log(Math.trunc(number))

let date = new Date()
console.log(date)
console.log(date.getUTCHours())
console.log(date.getHours())

console.log(theName.split(""))

let arr = ["name", 4, true, [], null, undefined]

console.log(arr[5])
arr[6] = "Hello"
console.log(arr[6])

console.log(arr.length)
console.log(arr)

//console.log(arr.slice(1))


console.log(arr.unshift("asdasd"))
console.log(arr)
console.log(arr.shift("asdasd"))
console.log(arr)

let obj = {
    name: "Zheka",
    callFunction: func,
    bol:false,
    arr:[1,2,3]
}

console.log(arr)
