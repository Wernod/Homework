var name = "myName"
let age = 17
const quote = "LoremIpsum"
console.log(name, age, quote)

const number = 1
const str = "1"
const bool = true
const nullVal = null
const symbol = Symbol("symbol")
const BigInt = 1n

console.log('number:', number, "type:", typeof number)
console.log('str:', str, "type:", typeof str)
console.log('bool:', bool, "type:", typeof bool)
console.log('undefined:', undefined, "type:", typeof undefined)
console.log('null:', nullVal, "type:", typeof nullVal)
console.log('symbol:', symbol, "type:", typeof symbol)
console.log('BigInt:', BigInt, "type:", typeof BigInt)
//
const sum = number + BigInt
const difference = number - BigInt
const product = number * BigInt
const quotient = number / BigInt
const power = number ** BigInt
const remainder = number % BigInt

console.log(sum, difference, product, quotient, power, remainder)
//
let a = 10
a += 5
a *= 2
console.log(a)
//
let peopleAge = 19
let hasPermission = true

if(peopleAge >= 18 || hasPermission === true) {
  console.log("You are an adult, have Permission")

} else {
  console.log("You are a child do not have permission")
}
//
const string = "10"
const num = 10

const result = string + num// 1010
console.log(result)
console.log(string == num) // true
console.log(string === num) // false
//
function calculator(a, b, operator) {
    if (a && b === 0 || operator === "/") {
        throw new Error("Cannot divide by zero")
    }
    switch(operator) {
        case "+":
        return a + b
        case "-":
        return a - b
        case "*":
        return a * b
        case "/":
        return a / b
        default:
        return "Unknown operator"
    }
}
try {
    console.log(calculator(10, 0, "/"))
    console.log(calculator(10, 5, "+"))
    console.log(calculator(10, 5, "-"))
    console.log(calculator(10, 5, "*"))
} catch (err) {
    console.log("Пу пу пу пу: ", err)
}