console.log(34);

// het user prompt
let ans = prompt("What is your fav day of the week?") 
ans = ans.toLowerCase();


// handles empty input
while(ans.length == 0){ 
    let ans = prompt("What is your fav day of the week?"); 
}
ans = ans.toLowerCase();  


// print based off value of ans
if( ans === "monday"){ 
    console.log("You're a weirdo")
} else if ( ans === "friday") { 
    cosole.log( "Youre cool")
} else { 
    console.log("Why?")
}

// generates random num from 1 - 5
let num = Math.floor((Math.random() * 5) + 1);
console.log(num , "This is dope right?")


//Learning Json 

const person = { 
    name : "Shrey Patel", 
    age : 19, 
    height : 192, 
    birthDate : "July 9 2001"
};

// print to console 
console.log(person["name"] + " is a god.")

// For loops 
for(let i = 0; i <= 10; i++){ 
    console.log(i % 5);
}

let x = 6; 
while( x >= 0){ 
    console.log(x);
    x--;
}

// For of 
let arr = [1,2,3]; 
for(item of arr){ 
    console.log(item)
}

// For in loop 
let obj = { age : 12, lol : 66, time : 44 }; 
for(key in obj){ 
    console.log(`The value of the key ---- ${key} ---- is ${obj[key]}`);
}

