'use strict'
//Задача 1
console.log("Задача 1")
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
console.log(numbers);

function compare(a, b) {
    if (a.length === b.length) return 0;
    if (a.length > b.length) return 1;
    return -1
}

numbers.sort(compare);
console.log(numbers);

//Задача 2
console.log("Задача 2");
let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];
console.log(presents);
presents.sort(x => Math.random() - 0.5);
console.log(presents);

//Задача 3
console.log("Задача 3");
let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];
let arr = first.filter(x => second.includes(x));
console.log(arr);

//Задача 4
console.log("Задача 4");
let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

function sort(arr) {
    for (let elem of arr) {
        if (elem > 500) return true;
    }
}

if (temperatures.some(sort)) console.log("Температура поднималась выше 500");

