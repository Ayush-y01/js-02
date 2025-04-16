// singleton means jab hum ek oebject create karte vo agr construter se banta hai to vo singleton hota hai means ye apne tarah ka ek hi object hai
// or agr hum dusri koi tarike se bante hai to uske multiple litreal ban jate hai

// Object.create //isko bolte hai singleton iske ke throug singleton banta hai

const mySym = Symbol("Key1")

const jsobj = {
    name: "Ayush",
    "full name":"Ayush yadav",
    [mySym]:"myKey1",//symbol ese define hota object ander yehi iska syntax hai 
    age: 21,
    location:"surat",
    email: "ayush@google.com",
    isLoggedIn: "false",
    isLoggedDays: ["Monday","Friday"],
}
//types of ways to access objects 
// console.log(jsobj.email);
// console.log(jsobj["email"]);
// console.log(jsobj["full name"]);
// console.log(jsobj.fullname);
// console.log(typeof jsobj[mySym]);// ek tarika hai symbol ko access karne ka nor koi tarah se nh kar sakte hai

// now how to change the value of object or over write the value

jsobj.email = "Ayush@amazon.com" //isse hum koi bhi obj ki value ko change kar sakte hai 
// console.log(jsobj["email"]);

// Object.freeze(jsobj)// agr hume object ki value ko freez karna ya hum chahte ho ki koi obj ki values na change kar paye toh hume ye use karte hai
jsobj.email = "Ayush@microsoft.com"
// console.log(jsobj);

//javascript me function ek variable li tarah treat hota hai
jsobj.greeting = function(){
    console.log("Hello js user");
}
jsobj.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);//agr hume same object ko referance karna ho toh hum this keyword use kar sakte hai
}

// console.log(jsobj.greeting);//[Function (anonymous)] ye output aaya 
// console.log(jsobj.greeting());// Hello js user undefined or iske ye aaya
console.log(jsobj.greeting());
console.log(jsobj.greetingTwo());




