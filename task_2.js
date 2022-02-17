// let x = 1;
// let x = "test";
// let x = false;
let x = {a:2, b:3};

if (typeof x === 'number') {
    console.log(x + " — число")
} else if (typeof x === 'boolean') {
    console.log(x + " — логический тип")
} else if (typeof x === 'string') {
    console.log(x + " — строка")
} else {
   console.log(x + " — тип не определен")
};

// Или так:
switch (typeof x) {
    case 'number':
        console.log(x + " — число");
        break;
    case 'boolean':
        console.log(x + " — логический тип");
        break;
    case 'string':
        console.log(x + " — строка");
        break;
    default:
        console.log(x + " — тип не определен");
};

/* Дана переменная Х, которая может принимать любое значение.
Написать программу, которая в зависимости от типа данных Х выводит
в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу.
В других случаях выводите сообщение: «Тип x не определён».*/
