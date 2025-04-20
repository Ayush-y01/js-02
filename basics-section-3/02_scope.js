// node ka scope alag hai or browers ka scope alaga hai 
//var isliye use nh karta hai bcuz usme scope ka problem aati hai 
let a = 10
const b =20
var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(c); idher var problem karta hai isliye hum var nh padh rahe hai


function one(){
    const username ="Ayush"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}

// one()


if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function addOne(num){
    return num + 1

}
addOne(5)

const addTwo = function(){
    return + 2

}
addTwo˘˘