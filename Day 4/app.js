console.log(34);

// het user prompt
let ans = prompt("What is your fav day of the week?") 
ans = ans.toLowerCase();
console.log(typeof(ans));

// handles empty input
while(ans.length == 0){ 
    let ans = prompt("What is your fav day of the week?"); 
}
ans = ans.toLowerCase();  
console.log(typeof(ans));

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
