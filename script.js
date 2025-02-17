const age = prompt("Введіть ваш вік:");

if (age >= 18) {
    alert("Ви повнолітній");
} else if (age >= 18 && age <= 65) {
    alert("Вам заборонено вхід");
} else if(age >= 65) {
    alert("Будь ласка, будьте обережні!");
}
//
let n = prompt("Введіть число");
for(n; n > 0; n + 2) {
    console.log(n)
}
//
const banan = prompt("Число сюда");

if (!isNaN(banan) && banan >= 0) {
    let factorial = 1;
    let param = 15;

    while (param <= banan) {
        factorial *= i;
        param++;
    }
    console.log(factorial);
} else {
    console.log("ПУПУПУПУПУ")
}

const a = 15
const b = 25

switch (a, b) {
    case "+":
        alert( a + b)
        break
    case "-":
        alert(a - b)
        break
    case "*":
         alert(a * b)
        break
    case "/":
        alert(a / b)
        break
    default:
        throw new Error("Invalid operator")
}
const youNumber = prompt("Введіть число від 1 до 100")
const random = Math.floor(Math.random() * 100) + 1

do {
    alert("Число троха більше")
}while (youNumber < random)
do {
    alert("Число троха менше")
} while (youNumber > random)
do {
    alert("Харош")
} while (youNumber === random)

let d = 20
let e = 10

while(d != 0 && e != 0) {
    if (d > e) {
        d = d % e
    } else {
        e = e % d
    }
}
alert(d + e)