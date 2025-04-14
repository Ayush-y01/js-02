const myArr = [0,1,2,3,4,5]

const heros = ["hero","hero no1"]
// console.log(myArr);

const myArr2 = new Array(1,2,3,4)

// Array methods-------------
// myArr.push(6) //value insert karta hai array ke last me 
// myArr.pop() //value ko bahar nikalta hai jo last me hota hai
// myArr.unshift(8) // array first index pe value add karta hai ise code me problem aati hai kiyuki pure array ka index change hota hai
// myArr.shift() // ye array ke first value bahar nikalta hai shift or unshift log bohot kam use karte problem aati inko use karne se program slow hota hai

// console.log(myArr.includes(8)); // ye hume batata hai ki value present hai ya nh
// console.log(myArr.indexOf(5)); // ye hume index bata value ka means hume value dalni hoti or ye index batayega

// const newArr = myArr.join() // jo pehele se array hota usko new array se add karta but ye array ko convert kar deta string me

// console.log(myArr);
// console.log(typeof newArr);

// slice splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // slice orginal array ko change nh karta hai..
console.log("D ", myArr); // jese dekh sakte hai ki slice orginal array ko change kar raha hai..
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3) //splice orginal array ko chnage karta hai..
console.log("c ", myArr); // ye line pata chalta hai ki array change hua hai..
console.log(myn2);




