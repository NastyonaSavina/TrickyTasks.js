// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false





function XO(str) {
    let numberO = 0;
    let numberX = 0;



    str.toLowerCase().split('').map(i => (i === 'o' ? (numberO += 1)
        : i === 'x' ? (numberX += 1) : null));
   
    return numberO === numberX ? true : false;
}   



XO('xxOo');

// 2 variant
// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }



