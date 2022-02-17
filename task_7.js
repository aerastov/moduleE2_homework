let arr = [2, 2, 2, 2, 1, 1, 1, 0, true, 'string', false, null];

let even = 0
let uneven = 0
let zero =0

let result = arr.map(function(item) {
    if ((item % 2 === 0) && (typeof item === 'number') && (item != 0)) {
      even += 1
    } else if ((item % 2 === 1) && (typeof item === 'number'))  {
      uneven += 1
    } else if ((item === 0) && (typeof item === 'number'))  {
      zero += 1
    };
});

console.log("четных чисел: " + even);
console.log("нечетных чисел: " + uneven);
console.log("нулей: " + zero);

/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее.*/
