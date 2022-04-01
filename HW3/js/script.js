'use strict'
let count = '1';
if (count[count.length - 2] === '1') {
    console.log(count + ' ' + 'товаров');
} else {
    switch (count[count.length - 1]) {
        case '1':
            console.log(count + ' ' + 'товар');
            break;
        case '2':
        case '3':
        case '4':
            console.log(count + ' ' + 'товара');
            break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            console.log(count + ' ' + 'товаров');
            break;
    }
}

