'use strict';
//Задача 1
console.log("Задача 1");
let count = 75;
if (count <= 100 && count >= 90) console.log("Оценка: отлично");
else if (count <= 89 && count >= 60) console.log("Оценка: Хорошо");
else if (count <= 59 && count >= 40) console.log("Оценка: Удовлетворительно");
else if (count <= 39 && coutn >= 0) console.log("Попробуйте еще раз");
else console.log("Неправильный формат баллов");
//Задача 2
console.log("Задача 2");
let sum = 10000, code = 4653;
switch (code){
    case 4653: console.log(`Сумма к оплате с учётом скидки ${0.7*sum}`);
    break;
    case 5698:
    case 5111: console.log(`Сумма к оплате с учётом скидки ${0.8*sum}`);
    break;
    case 6922:
    case 6113:
    case 6099: console.log(`Сумма к оплате с учётом скидки ${0.9*sum}`);
    break;
    default: console.log(`Скидка не применена, сумма к оплате ${sum}`);
}
//Задача 3
console.log("Задача 3");
let plate = parseInt(prompt('Сколько у вас тарелок?'));
let fairy = parseInt(prompt('Сколько у вас моющего средства'));
while (plate <= 0 || fairy <= 0 ){
    alert("Введите корректное кол-во тарелок и моющего средства");
    plate = parseInt(prompt('Сколько у вас тарелок?'));
    fairy = parseInt(prompt('Сколько у вас моющего средства'));
}

/*
while (true){
    plate = plate - 1;
    fairy = fairy - 0.5;
    console.log(`У вас осталось ${fairy} моющего средства`);
   if (plate === 0) break;
   if (fairy === 0) break;
}
 */
while (plate > 0 && fairy > 0) {
    plate = plate - 1;
    fairy = fairy - 0.5;
    console.log(`У вас осталось ${fairy} моющего средства`);
}
if (plate === fairy) console.log ("Вы отмыли все тарелки, потратив всё моющее средство");
else if (plate > fairy) console.log(`У вас осталось ${plate} грязных тарелок`);
else console.log(`У вас осталось ${fairy} моющего средства`);

//Задача 4

console.log("Задача 4");

let num = Math.floor( Math.random() * 9 + 1);
while (true){
    let userNum = parseInt(prompt("Угадайте загаданное число. Введите число. Введите 0 для выхода"));
    if (userNum === 0) break;
    if (userNum === num) {
        alert("Вы угадали!");
        break;
    }
    else if (userNum > num) alert("Ваше число больше загаданного");
    else alert("Ваше число меньше загаданного");
}
//Задача 5
console.log("Задача 5")
 num = Math.floor( Math.random() * 491 + 10);
if (num > 25 && num < 200) console.log(`Число ${num} содержится в интервале (25, 200)`);
else console.log(`Число ${num} не содержится в интервале (25, 200)`);

//Задача 6 работает, но не красиво
console.log("Задача 6")
num = Math.floor(Math.random()*100+1);
while (true){
    let answer = prompt(`Число равно ${num}?Варианты ответа: ДА НЕТ`);
    if (answer === "ДА") {
        alert("Игра окончена");
        break;
    }else if (answer === 'НЕТ'){
        answer = prompt(`Число больше ${num}?Варианты ответа: ДА НЕТ`);
        if (answer === "ДА"){
            num = Math.floor(Math.random()*(100-num)+num);
        }else if (answer === 'НЕТ'){
            num = Math.floor(Math.random()*(num)+1);
        }else alert("Некорректный ответ")
    }else alert("Некорректный ответ")
}