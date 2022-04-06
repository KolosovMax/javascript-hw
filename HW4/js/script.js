'use strict'
// Задача 1
console.log("Задача 1");
let numbers = [1, 4, -6, -1, 99, 0, -38];
let mNumbers = [];
for (let element of numbers) {
    if (element < 0) mNumbers.push(element);
}
console.log(`Новый массив: ${mNumbers}`);
//Задача 2
console.log("Задача 2");
numbers = [];
for (let i = 0; i <= 6; i++) {
    numbers[i] = Math.floor(Math.random() * (300 - 5) + 5);
}
console.log(numbers);
let min = numbers[0], max = numbers[0], minIndex = 0, maxIndex = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= max) {
        max = numbers[i];
        maxIndex = i;
    }
    if (numbers[i] < min) {
        min = numbers[i];
        minIndex = i;
    }
}
numbers[minIndex] = max;
numbers[maxIndex] = min;
console.log(numbers);
//Задача 3
console.log("Задача 3");
let arr = [], string;
while (true) {
    string = prompt("Введите строку или 0 для выхода");
    if (string === '0') break;
    if (arr.indexOf(string) === -1) arr.push(string);
}




