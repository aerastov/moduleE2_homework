// Самый короткий способ (от 0 до 100 включительно)
let x = Math.floor(Math.random() * 101);
console.log(x);

// Универсальный - можно задать любой диапазон
let min = 0;
let max = 100;
let x = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
console.log(x);

//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
