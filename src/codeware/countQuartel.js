const quarterOf = month => {
  let quarter = '';

  month <= 3
    ? (quarter = 1)
    : month > 3 && month <= 6
    ? (quarter = 2)
    : month > 6 && month <= 9
    ? (quarter = 3)
    : (quarter = 4);

  return quarter;
};



// const quarterOf = month => {
//   // Your code here
//   return Math.ceil(month / 3);
// };


