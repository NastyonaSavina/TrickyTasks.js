// const str = 'The quick brown fox jumps over the lazy dog';
// const vowels = str.match(/[aeiouy]/gi);
// const consonants = str.match(/[^aeiouy]/gi);

// console.log(vowels);
// console.log(consonants);


//  S:  r a d e n c y   = radency

// P1:  r    d    n c      = rdnc

// P2:    a    e       y   = aey


// Початковий код:


const stringChecker = function (s, p1, p2) {

    const vowels = s.match(/[aeiouy]/gi).toString().split(',').join("");
    const consonants = s.match(/[^aeiouy]/gi).toString().split(',').join("");


       return (vowels === p2 && consonants === p1 ? true : false);


        // return false;

};
// const s = 'radency';
// const p1 = 'rdnc';
// const p2 = 'aey';



stringChecker('radency', 'rdnc', 'aey');