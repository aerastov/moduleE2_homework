let input = prompt ("Введите число!");
input = +input

if (typeof input === 'number') {
  switch (input % 2) {
      case 0:
          console.log("число " + input + " четное");
          break;
      case 1:
          console.log("число " + input + " нечетное");
  }
}

if (Number.isNaN(input)) {
  console.log("Упс, кажется, вы ошиблись");
}

if (typeof input != 'number') {
  сonsole.log("Упс, кажется, вы ошиблись");
}

/* последнее условие не сработает пока есть преобразование в число (+input),
при вводе не числа будет срабатывать Number.isNaN. Но условие добавил исходя из задания.*/

/* Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число,
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/