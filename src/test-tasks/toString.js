const test = (x) => `${x}` !== `${x}`;


const uniqueItem = { toString: Math.random };



// console.log(test(uniqueItem));



//логіка в тому що, на змінній x викликається метод toString, 
// через те що вона всередині шаблонної строки.
// Його просто треба переписати на кастомний, ось і все