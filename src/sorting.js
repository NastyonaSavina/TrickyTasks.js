// const arr = [
//   { value: 1 },
//   { value: 2 },
//   5,
//   6,
//   7,
//   'test',
//   'test2',
//   'test3',
//   'test4',
//   false,
//   null,
//   undefined,
//   [123],
//   [456],
//   new Date('2021-06-22'),
//   new Date('2022-02-01'),
// ];

// Ожидаемый результат
// {
//   object: [ { value: 1 }, { value: 2 } ],
//   number: [ 5, 6, 7 ],
//   string: [ 'test', 'test2', 'test3', 'test4' ],
//   boolean: [ false ],
//   null: [ null ],
//   undefined: [ undefined ],
//   array: [ [ 123 ], [ 456 ] ],
//   date: [new Date("2021-06-22"), new Date("2022-02-01")]
// }


const sorting = (array) => {
    let object= [];
    let number= [];
    let string = [];
    let boolean = [];
    let nulle = [];
    let undefined = [];
    let array= [];
    let date = [];

    for (let i = 0; i < array.lenght; i++){
        console.log(typeof array[i]);
    }
    
}

sorting(arr);