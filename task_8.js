let user = new Map([
  ["name", "Ivan"],
  ["last_name", "Ivanov"],
  ["age", 30],
  ["height", 180],
  ["weight", 80],
]);

let keys = [];
for (let key of user.keys()) {
  keys.push(key); // по заданию получаем в массив keys все ключи
};
console.log(keys);

// Первый вариант получения пары ключ-значение
for (let elem of user) {
   console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
};

// Второй вариант - получение пары ключ-значение используя созданный массив ключей (keys)
let key = keys.map(function(item) {
  console.log(`Ключ - ${item}, значение - ${user.get(item)}`);
});


/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения
в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/
