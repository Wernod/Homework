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



const arr = [
    {
        name: "Your name",
        age: "You age"
    }
]
console.log(arr)
//2
const numbers = [12,12,43,543,876,213]

let mean = (numbers / numbers.length) * numbers.length
//Округлення
console.log(Math.round(mean))
console.log(Math.floor(mean))
console.log(Math.ceil(mean))
console.log(Math.abs(mean))
console.log(Math.pow(mean))

const roundMean = Math.round(mean)

console.log("Середнє арифметичне: " , mean)

if (roundMean % 5 === 0) {
    console.log("без залишку")
} else {
    console.log("Із залишком")
}
const side1 = 12
const side2 = 34
const side3 = 9

if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("Трикутник має шанс на існування")
} else {
    console.log(" ПУПУПУПУПУ")
}
//3

const minMax = function (numbers){
    console.log("Min: ", Math.min(numbers))
    console.log("Max: ", Math.max(numbers))
}

if (numbers % 2 === 0) {
    console.log("Без залишку")
} else {
    console.log("Із залишком")
}

if (side1 > side2 && side2 < side3) {
    console.log(true)
} else {
    console.log(false)
}
let n = 10

function primality(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    console.log(n > 1)
}

const userName = "Tolik"
const year = 2000
const city = "Lutsk"

const Years = 2025 - year

if(Years > 10) {
    console.log("Teenager")
} else if (Years > 18) {
    console.log("Veery old")
}

if(city === "Kyiv") {
    console.log("Київ це столиця України!")
} else {
    console.log("Ви не знаходитеся у столиці України")
}