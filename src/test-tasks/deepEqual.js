// первый метод сравнения объектов - использование функции deep-equal из npm библиотеки
const equal = require('deep-equal');
const obj1 = { a: [2, 3], b: [4] };
const obj2 = { a: [2, 3], b: [4] };
const obj3 = { x: 5, y: [6] };
const obj4 = { x: 5, y: 6 };

// console.log([equal(obj1, obj2), equal(obj3, obj4)]);

//второй метод сравнения объектов - с помощью JSON.stringify()- приведения объектов к строке и сравнение двух строк
// console.log(JSON.stringify(obj3) === JSON.stringify(obj4));
