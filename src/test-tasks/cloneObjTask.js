const cloneDeep = require('clone-deep');

//Поверхносное - это коприрование только первого уровня вложенности, а для остального копируется ссылка.
// Способы поверхностого копирования:
// 1 - использовать spread оператор (...)

const obj1 = { a: [2, 3], b: [4] };

const copyObj1 = { ...obj1 };
console.log(copyObj1);

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...second, ...first };
// console.log(third);

// 2 - использовать Object.assign()

// console.log(Object.assign(first, second));

// Глубокое - это копирование обьекта и все его уровней вложенности.
// Способы глубокого копирования:
// 1 -  использовать JSON.stringify - JSON.parse для конвертирования обьектва в строку и потом обратно. Имеет ограничения по копированию методов и symbols

const newObj = JSON.stringify(obj1);
console.log(JSON.parse(newObj));

// 2 - написать или использовать из библиотеки функцию deepClone которая будет рекурсивно проходить по ключам обьекта и копировать их в новый обьект
//npm i clone-deep

let obj = { a: 'b' };
let arr = [obj];
let copy = cloneDeep(arr);
obj.c = 'd';
 
// console.log(copy);
//=> [{ a: 'b' }]
 
// console.log(arr);
//=> [{ a: 'b', c: 'd' }]