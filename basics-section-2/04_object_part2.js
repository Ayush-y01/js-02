// const tinder = new Object() // ye ek singleton object hai ye tarika hai singleton object ka
// const tinder2 = {} // or non singleton ka tarika hao decalre karne ka
// console.log(tinder);
// console.log(tinder2);

const tinderuser = {}
tinderuser.id = "abc123"
tinderuser.name = "samay"
tinderuser.location = "USA"
tinderuser.isLoggedIn = "false"

// console.log(tinderuser);

const users = {
    email:"Ayush@google.com",
    username:{
        fullname:{
            firstname:"Ayush",//hum jitna bhi chahe utna nested kar sakte hai object ko
            lastname:"Yadav"
        }
    }
}
// console.log(users.username.fullname.firstname);// this os the way of access nested object or agr or nested hai object to dot laga kar or kar sakte hai
//isme ek or chize hoti jese koi key hai uske piche question mark lagate hai jab hum API pe kam karte bcuz vo value hai ya nh check karne ka liye ese kuch baadme or details dekh lena 

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = {obj1 , obj2}// ye galat way hai karne ka isse object ke ander object hota hai to ye galat dono object mix nh hota hia

// const obj3 = Object.assign(obj1,obj2)// object.assign dono object mix kardeta hai usko ek object le kar return karta hai or bhi tarike hai aage dekhte hai

// const obj3 = Object.assign({},obj1,obj2)// isme hume ek target dean hota hai or source dena hota hai mltb agr hum empty object dete hai to act as target karta hai or jitne bhi object hai vo source hote hai
//ye syntax ke hisab se acha rehta hai agr hum empty obj nh deta hai toh sare obj ki value first given obj me store hoti hai isliye good pratice hai karna 


const obj5 = {...obj1, ...obj2}//isko bolte hai spread opreator most of time yehi use hota hai sabse simple way hai simple ye obj ko pehele spread karta hai fir ek obj me combine kar deta hai best way or isme ko kuch dena ki zarurat nh hai bsss triple dot dena hota hai
// console.log(obj5);

const user = [
    {
        id:12,
        name:"aasa"
    },
    {
        id:92,
        name:"zzzz"
    },
    {
        id:4,
        name:"afsa"
    },
    {
        id:2,
        name:"bddd"
    }
]
console.log(user[1].id);
console.log(tinderuser);
console.log(Object.keys(tinderuser));//important ye humare obj ka keys return karta or iska data type rehta hai array so hume bohto easy hota opration karne ke liye jese hum loop laga kar sabko access karle ye basically easy hojata hai fir
//isme object ke baad jo chaiye vo likhna hota hai or ye object ko nh pata hota hai ki kis object me se ye sab value lani isliye hume object name dena hota bracket me ++++++ project ke kam aata hai database me kam aata hai
console.log(Object.values(tinderuser));// ye tarika hai values ko access karna or array me values return hoti hai bohot kam aata hai ye aage high level pe ye kam aata hai

console.log(Object.entries(tinderuser));// ye bohot kam aata hai par sikh lete hai ye ky karta har key value pair ko ek array me dal deta hai or sab key value pair array ek main array ke ander rehte hai

console.log(tinderuser.hasOwnProperty('isLoggedIn'));// ye hum check karke ke batata hai vo poperty hai ya nh boolean value return karta hai (agr nh pata hai property hai ya nh is method use karke pata karo or use karo method )