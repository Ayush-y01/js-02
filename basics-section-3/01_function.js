function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    
}

// sayMyName // this reference of function ye DOM Vagera me kam aayega ye bass ek refrence hai ye run nh karega 
// sayMyName() // yehi execute hoga ye hoga run ye normal way hai funcation ko execute karna ka

function addTwoNo(num1, num2){ // isko jo dono paranthies me usko parameter bolte hai
    // console.log(num1+num2);    // isme logic ki problem hai jese agr koi number jagha kuch or dete string vagera toh ye shi nhy kareaga alag chiz hogi fir
}
// addTwoNo(7,4)//isko agrument bolte hai 

function addTwoNo(num1, num2){ 
    // const result = num1=num2
    // return result // agr hum kuch return karte hai tabhi function kuch return kreaga verna kuch nh karega or console pe value aati usko mtlb ye nh ki function kuch return karega return ki diffent log is diffrent 
    // or functions me ek bar kuch return hogya uske baad vali line kuch bhi ho na execute hoga na kuch hoga bss unreachable line reh jayegi vo
}
// addTwoNo()

function loginUserMessage(username){
    return `${username} just logged In`
}
loginUserMessage("Ayush")
//isme ek catch hai ye value print hogi hi nh bcuz hume usko return kiya vo code me to retrun hogyi hogi par console pe nh dikhaegi
// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage());//interview Question agr hum agrument pass na kare to ky hoga ye null nh dega ye undefine dega remember




function calculateCartPrice(...num1){ // ye ten dot... ko hi rest operator or spread operator bolte hai bss inki use case me diffrence hai ye karta jitne sari values hai sabko ek bundle me pack kar deta hai fir hume deta hai..
    return num1
}

// console.log(calculateCartPrice(100,200,300));

function calculateCartPrice(val1,val2,...num1){//interview question in sabme se konsi value kisko milegi number wise hi milega baki jo bachega vo sab jisme rest hoga simpel
    return num1
}

// console.log(calculateCartPrice(100,200,300));


const user = {
    username:"Ayush",
    price:99,
}

function handleObject (anyobject){
    console.log(`student name is ${anyobject.username} and how much price is ${ anyobject.price}`);
    
}
// handleObject(user)

// handleObject({
//     username:"Ramesh",
//     price:700,
// })


const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));

