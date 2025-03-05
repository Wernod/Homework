const peoples = [
    {
        name: "Victor",
        age: 22
    },
    {
        name: "Petro",
        age: 33
    },
    {
        name: "Ivan",
        age: 44
    },
    {
        name: "Vasyl",
        age: 55
    },
    {
        name: "Oleg",
        age: 66
    }
]
function filterUnderEighteen(peoples) {
    if(peoples.age < 18) {
        console.log("Вам менше 18 років")
    } else {
        console.log("Вам більше 18 років")
    }
}

function onlyName(peoples) {
    return peoples.name
}

function averageAge(peoples) {
    let sum = 0
    for(let i = 0; i < peoples.length; i++) {
        sum += peoples[i].age
    }
    return sum / peoples.length
}
