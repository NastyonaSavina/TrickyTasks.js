const arr1 = [1, 2, 2, 2];
const arr2 = [1, 1, 2, 2];

const compareItemsFn = (index1, index2) => {
  switch (true) {
    case arr1[index1] === arr2[index2]:
      return 0;
    case arr1[index1] < arr2[index2]:
      return -1;
    case arr1[index1] > arr2[index2]:
      return 1;
    default:
      return undefined;
  }
};

const length1 = arr1.length;
const length2 = arr2.length;

function intersectionIndexes(compareItemsFn, length1, length2) {
  let intersectionArray = [];

  let a = 0;
  let b = 0;

  while (a < length1 && b < length2) {
    if (compareItemsFn(a, b) === 0) {
      intersectionArray.push(a);
      a++;
      b++;
    } else if (compareItemsFn(a, b) === -1) {
        a++;
    } else {
        b++;
    }
  }
  // console.log(intersectionArray);

  return intersectionArray;
}

intersectionIndexes(compareItemsFn, length1, length2);




// first example of input:

// const arr1 = [1, 2, 2, 2];
// const arr2 = [1, 1, 2, 2];

// second example of input:

// const arr1 = [1, 2, 2, 3, 4, 5, 6, 7, 9, 9, 20];
// const arr2 = [1, 2, 3, 3, 5, 8, 9, 9, 21];

// // first example of output:

// // - [0, 1, 2]
// // - [0, 1, 3]
// // - [0, 2, 3]

// // second example of output:

// // - [0, 1, 3, 5, 8, 9]
// // - [0, 2, 3, 5, 8, 9]

// //function compareItemsFn, length1, length2 - from conditions to this task

// const compareItemsFn = (index1, index2) => {
//     switch (true) {
//         case arr1[index1] === arr2[index2]: return 0;
//         case arr1[index1] < arr2[index2]: return -1;
//         case arr1[index1] > arr2[index2]: return 1;
//         default: return undefined;
//     }
// };
// const length1 = arr1.length;
// const length2 = arr2.length;