const Marvel = ["ironman","spiderman","thor"]
const dc = ["superman","flash","batman"]

// Marvel.push(dc)// ye method jo array pehele se hota hai usme add kar deta hai koi new array nh banata hai isse fir problem aati hai

// console.log(Marvel[3][2]);
// console.log(Marvel);

// const allhero = Marvel.concat(dc) //ye method ek new array hi return karta dono array ko milake isliye isko koi variable me hold karna hota hai or hume concat me limitions hai ki hum sirf ki array add kar sakte hai
// console.log(allhero);

const all_new_hero = [...Marvel,...dc] //ye bhi method kuch kuch concat jese hai dono array ko mila ke ek new array return karta hai or ye method ka name spread opration isme hume koi limition nh hai hum jitne chahe utni array add kar sakte teen dot laga kar array ke aage
// console.log(all_new_hero);

const another_array = [1,2,3,[4,5],6,[7,8,[9,1]]] //ye jo array hai bohot complex hai ese case bohot rare hote hai aana or ye ye array ko normal array me convert kar sakte hai ek flat method use karke
// console.log(another_array);

const use_another_array = another_array.flat(Infinity) // ye falt method jo array complex hote jese ki array ke ander array usko ye noraml formate me karke deta hai or isme hume range bhi deni hoti ki kitne dept tak jake array sort kare infinity bhi hoti range par ye acha nh hai hume range hi deni chiaye 
// console.log(use_another_array);

console.log(Array.isArray("Ayush"));// isArray method check karta hai ye name array available hai ya nh fir boolean value return karta hai ture or false
console.log(Array.from("Ayush")); // ye given value ko tod ke array banadeta hai 
console.log(Array.from({name: "Ayush"}));//important isko hume pura batana padega ki keys ka array bana ya values ka tabhi ye bana payenga verna ye empty array dega 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
