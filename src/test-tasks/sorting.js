const arr = [
  { value: 1 },
  { value: 2 },
  5,
  6,
  7,
  'test',
  'test2',
  'test3',
  'test4',
  false,
  null,
  undefined,
  [123],
  [456],
  new Date('2021-06-22'),
  new Date('2022-02-01'),
];

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


const sorting = (newArray) => {
    
    let sortedArray = {
        object: [],
        number: [],
        string: [],
        boolean: [],
        null: [],
        undefined: [],
        array: [],
        date: []
    };
  
    for (let i = 0; i < newArray.length; i++) {


        if (newArray[i] === null) {
            sortedArray.null.push(null);
        } else {
             if (Array.isArray(newArray[i])) {
               sortedArray.array.push(newArray[i]);
             } else {
                if (
                  newArray[i] instanceof Date &&
                  !isNaN(newArray[i])
                ) {
                  sortedArray.date.push(newArray[i]);
                 } 
                else {
                    sortedArray[typeof newArray[i]].push(newArray[i]);

                 }
             }
             
        }
           
        

    }
    // console.log(sortedArray);
    return sortedArray;
}

    sorting(arr);