// const foo = [1, 2];
// const bar = foo;

// bar[0] = 9;

// console.log(foo[0], bar[0]);


// {
//   let a = 1;
//   const b = 1;
//   var c = 1;
// }
// // console.log(a); // ReferenceError
// // console.log(b); // ReferenceError
// console.log(c); // Prints 1


// const good = {
//   foo: 3,
//   bar: 4,
//   'data-blah': 5,
// };

// console.log(Object.prototype.hasOwnProperty.call(good, 'foo'));


/*Prefer the object spread syntax over Object.assign to shallow-copy objects. Use the object rest parameter syntax to get a new object with certain properties omitted.*/
// const original = { a: 1, b: 2 };
// const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

// console.log(copy);

// const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

// console.log(noA);

/*To convert an iterable object to an array, use spreads ... instead of Array.from*/

// console.log(Array.from('foo'));


/* Use Array.from for converting an array-like object to an array.*/

// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// const arr = Array.from(arrLike);

// console.log(arr);



/*Используйте операторы return в обратных вызовах методов массива. Возврат можно опустить, если тело функции состоит из одного оператора, возвращающего выражение без побочных эффектов.*/

// [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((acc, item, index) => {
//   const flatten = acc.concat(item);
//   console.log(flatten);
//   return flatten;
// });


/*Деструктуризация массива*/

// const arr = [1, 2, 3, 4];
// const [first, second, example] = arr;

// console.log(example);



// const x = [1, 2, 3, 4, 5];
// console.log(...x);


// const dateExmpl = new Date(2016, 8, 5);
// console.log(dateExmpl);

/*Методы могут возвращать this, чтобы помочь с цепочкой методов.*/

// class Jedi {
//   jump() {
//     this.jumping = true;
//     return this;
//   }

//   setHeight(height) {
//     this.height = height;
//     return this;
//   }
// }

// const luke = new Jedi();

// const exmpl = luke.jump().setHeight(20);
// console.log(exmpl);



/*Используйте запись в квадратных скобках [] при доступе к свойствам с помощью переменной.*/
// const luke = {
//   jedi: true,
//   age: 28,
// };

// function getProp(prop) {
//   return luke[prop];
// }

// const isJedi = getProp('jedi');


/*Используйте оператор возведения в степень ** при вычислении возведения в степень.*/

//bad
// const binary = Math.pow(2, 10);

// good
// const binary = 2 ** 10;


// const array = [1, 2, 3];
// let num = 1;
// num += 1;
// num -= 1;

// const sum = array.reduce((a, b) => a + b, 0);
// const truthyCount = array.filter(Boolean).length;

// console.log(truthyCount);