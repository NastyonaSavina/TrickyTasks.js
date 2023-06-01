


// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0


function strCount(str, letter) {
//   console.log(str.split(letter).length -1);
    return str.split(letter).length - 1;
}


strCount('how it works', 'a');