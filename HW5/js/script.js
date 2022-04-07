'use script'
//Задача 1
console.log("Задача 1");

function range(num1, num2, ran = 1) {
    let arr = [];
    if (ran === 0) return ("Не правильнй диапазон")
    if (ran < 0) {
        if (num1 > num2) {
            for (let i = num1; i >= num2; i += ran) {
                arr.push(i);
            }
        }
        for (let i = num2; i >= num1; i += ran) {
            arr.push(i);
        }
        return arr;
    }
    if (num1 > num2) {
        for (let i = num2; i <= num1; i += ran) {
            arr.push(i);
        }
    }
    for (let i = num1; i <= num2; i += ran) {
        arr.push(i);
    }
    return arr;
}

let testArr = range(1, 10, 2), testArr2 = range(20, 5, 3);
console.log(testArr, testArr2);
//Задача 2
console.log("Задача 2");

function checkSpam(text, ...spamWords) {
    let textArr = text.split(" ");
    let spam = 0;
    for (let i = 0; i <= textArr.length - 1; i++) {
        for (let j = 0; j <= spamWords.length; j++) {
            if (textArr[i] === spamWords[j]) spam++
        }
    }
    if (spam === 0) return "1 - Спама нет"
    else if (spam <= 2) return "2 - В сообщении есть спам"
    else if (spam <= 4) return "3 - В сообщение среднее количество спама"
    else if (spam <= 6) return "4 - В сообщении много спама"
    else return "5 - Сообщение спам"
}

/*let string = "ехал грека через реку видет грека в речке рак сунул грека руку в реку рак за руку греку цап";
let filter = checkSpam(string, "грека", "руку");
console.log(filter);
 */
