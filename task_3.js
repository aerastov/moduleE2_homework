let str= "Hello";

//Если применить информацию только из пройденного модуля (циклы не проходили итп):
let reverse = `${ str.slice(4, 5)}${ str.slice(3, 4)}${ str.slice(2, 3)}${ str.slice(1, 2)}${ str.slice(0, 1)}`;
console.log(reverse);

//Другой способ (разделяем, переворачиваем, склеиваем)
let reverse = str.split('').reverse().join('');
console.log(reverse);

//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
