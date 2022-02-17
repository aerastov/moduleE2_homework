let arr = [true, 'string', 123, false, null];
console.log("Количество элементов массива = " + arr.length);

let result = arr.map(function(item) {
    console.log(item)
});

// А так сократить можно?
arr.map(function(item) {
    console.log(item)
});

/*Дан произвольный массив. Необходимо вывести количество элементов массива,
затем перебрать его и вывести в консоль каждый элемент массива.*/
