`use strict`
//Задача 1
console.log("Задача 1");
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
}

function objCheck(items, from, to) {
    let newObj = {};
    for (let item in items) {
        if (items[item].price >= from && items[item].price < to) newObj[item] = items[item];
    }
    return newObj;
}

let newArr = objCheck(items, 3000, 3600);
console.log(newArr);

//Задача 2
console.log("Задача 2");

function buyCheck(items, itemTitle, countToCart) {
    for (let item in items) {
        if (items[item].title === itemTitle) {
            if (items[item].count >= countToCart) {
                items[item].count = items[item].count - countToCart;
                return true;
            }
            console.log("Товар не возможно приобрести");
            return false;
        }
    }
}

buyCheck(items, "Арфа", 2);
console.log(items);

//Задача 3
console.log("Задача 3");
let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];
books.sort((a, b) => (a.author > b.author) ? 1 : -1);
console.log(books);
