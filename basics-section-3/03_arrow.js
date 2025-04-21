const user ={
    username :"Ayush",
    price:678,


    welcomeMassage:function(){
        // console.log(`${this.username} , welcome to the website`);// this keyword current context ko refer karne ke liye hota hai jese ki hume object ke value ko refer kar rahe hai to hume this keyword use karna chaiye 
        // console.log(this);
        
    }
}
// user.welcomeMassage()
// user.username="Aanchal"
// user.welcomeMassage()
// console.log(this);

// function chai(){
//     let username = "Ramesh" // this keyword function me kam nh karta hai 
//     console.log(this.username);
    
// }

// const chai = function(){
//     let username = "ayush"
//     console.log(this.username);// ye function ko decalre karne ka dusra way hai
    
// }
// chai()

const chai = () =>{
    let username = "ayush"
    console.log(this.username);// ye arrow function ka example hai 
    
}
// chai()


// arrow funcntion ka ek or way hai on the line like this
// ye wala arrow function react me bohot hi zada bohot hi zada use aata hai
// agr mene curle braces lagaye toh mujhe return use karna padega nh toh chalega

// const addTwo = (num1,num2)=> num1+num2
const addTwo = (num1,num2)=> (num1+num2)

console.log(addTwo(3,4))

