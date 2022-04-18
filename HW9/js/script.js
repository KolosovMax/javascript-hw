'use strict';
let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];

function tableCreation(arr) {
    let table = document.createElement("table");
    let mainRow = table.insertRow();
    let title = Object.keys(arr[0]);
    let cell;
    for (let elem of title) {
        cell = mainRow.insertCell();
        cell.innerText = elem.toUpperCase();
        cell.style.border = "1px solid black";
        cell.style.fontWeight = "bold";
        cell.style.textAlign = "center";
        cell.style.paddingLeft = "25px";
        cell.style.paddingRight = "25px";
        cell.style.height = "50px";
        cell.style.backgroundColor = "rgb(179, 157, 216)";
    }

    for (let i = 0; i < arr.length; i++) {
        let row = table.insertRow();
        if (i % 2 !== 0) row.style.backgroundColor = "rgb(237,231,245)"
        let value = Object.values(arr[i]);
        for (let count of value) {
            let cell = row.insertCell();
            cell.innerText = count;
            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell.style.height = "50px";
        }

    }
    table.style.borderCollapse = "collapse";
    table.style.marginBottom = "50px";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto"
    document.body.append(table);
}

tableCreation(articles);
tableCreation(goods);

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField(n) {
    if (n < 3) {
        console.log("Неверное значение N");
        return;
    }
    let table = document.createElement("table");
    let k = 1;
    for (let i = 0; i < n; i++) {
        let row = table.insertRow();
        for (let j = 0; j < n; j++) {
            let cell = row.insertCell();
            cell.setAttribute("id", k); //задан id всем ячейкам
            k++;
            cell.style.width = "50px";
            cell.style.height = "50px";
            cell.style.border = "1px solid black";
        }
    }
    table.style.borderCollapse = "collapse";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    document.body.append(table);
    let tempArr = [];
    while (tempArr.length < 3) {
        let id = Math.floor(Math.random() * (k - 1) + 1);// выбор рандомного id
        if (tempArr.indexOf(id) === -1) {
            tempArr.push(id);
            document.getElementById(id).setAttribute("prises", Object.values(prises)[tempArr.length - 1]);
        }
    }
}

generateField(5);