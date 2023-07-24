// Test failed with: Random Test -  S = "k0sfif2Slt5ShLOVt52", P1 = "k0sfif2Sl", P2 = "t5ShLOVt52"
// 	Expected: true
// 	Actual: false


const stringChecker = function (s, p1, p2) {

  if (s.length !== p1.length + p2.length) {
    console.log(false);
    return false
  }

  if (s.split(p1).join("").trim() === p2) {
    console.log(true);
    return true;
};
 
  let copyP1 = s.split('');
  let copyP2 = s.split('');


  p1.split("").forEach(el => {
  
    if (copyP2.indexOf(el) === -1) {
      console.log(false);
      return false;
    }

    copyP2.splice(copyP2.indexOf(el), 1);

  });

  p2.split("").forEach(el => {
    if (copyP1.indexOf(el) === -1) {
      console.log(false);
      return false;
    }
    copyP1.splice(copyP1.indexOf(el), 1);


  })
  console.log(s.split(''));

  console.log(copyP1.join(''), p1);
    console.log(copyP2.join(''), p2);

  return copyP1.join("") === p1 && copyP2.join("") === p2
    ? console.log(true)
    : console.log(false);
};

stringChecker('Y6E34DPHUO457K62onA', 'Y34PU4562nA', '6EDHO7Ko');




// Test failed with: Random Test -  S = "uLIMHHBKkg414RxzwKy6", P1 = "uLIMHHBKkg", P2 = "414RxzwKy6"
// 	Expected: true
// 	Actual: false


// Test failed with: Random Test -  S = "Y6E34DPHUO457K62onA", P1 = "Y34PU4562nA", P2 = "6EDHO7Ko"
// 	Expected: true
// 	Actual: false


// Test failed with: Random Test -  S = "2xcp66q6467t1dG2cBn", P1 = "2xcp66q64", P2 = "67t1dG2cBn"
// 	Expected: true
// 	Actual: false


// Test failed with: Fixed test - S = "w27y7", P1 = "27", P2 = "w7y"
// 	Expected: true
// 	Actual: false


// Test failed with: Fixed test - S = " Hacker News! ", P1 = " cker s ", P2 = "HaNew!"
// 	Expected: true
// 	Actual: false


// Test failed with: Fixed test - S = "Hacker News!", P1 = "Haerws", P2 = "ck Ne!"
// 	Expected: true
// 	Actual: false


// Test failed with: Fixed test - S = "Do you have a cup of tea? Yes, I do!", P1 = " yo ha a cof tea Yes I", P2 = "Douveup ?, do!"
// 	Expected: true
// 	Actual: false