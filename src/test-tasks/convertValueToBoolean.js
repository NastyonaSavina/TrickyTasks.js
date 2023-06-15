// How to Convert a Value to a Boolean in JavaScript

// 1) double logical NOT operator - !!

// Falsy Values

!!'' // false
!!false // false
!!null // false
!!undefined // false
!!0 // false
!!NaN // false


// Truthy Values

!![] // true
!!"false" // true
!!true // true
!!1 // true
!!{} // true



// 2) The Boolean() Function

const finalThoughts = "I really enjoyed writing this article. Thanks for reading!"

!!finalThoughts // true
Boolean(finalThoughts) // true