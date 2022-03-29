//Задача 1
console.log("Задача 1");
let sum = 100000;
let sumfinal = sum >= 100000 ? 0.9*sum : sum ;
console.log("Cумма к оплате " , sumfinal)
//Задача 2
console.log("Задача 2");
let num = -88;
//let digitsum = num >=0 ? Math.floor(num / 10) + num % 10 :Math.floor((0-num) / 10) + (0-num) % 10;
let digitsum = num >= 0 ? (num - num % 10) / 10 + num % 10 : ((0-num) - (0-num) % 10) / 10 + (0-num) % 10;
console.log("Сумма цифр числа", num , "равна", digitsum);
//Задача 3
console.log("Задача 3");
let num1 = -10 , num2 = 15;
console.log("было " , num1 , " и " , num2);
/*
num1 = num1 + num2 - num1;
num2 = num2 + num1 - num2;
*/
/*
num1=num2;
num2=num1;
 */
/*
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
 */
num1 = num1 / num2;
num2 = num2 * num1;
num1 = num2 / num1;
console.log("стало " , num1 , " и " , num2);