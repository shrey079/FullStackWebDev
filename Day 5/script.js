// Functions in JS
// With an example of the ternary operator.
function song(song){ 
    song ? console.log("My fav song is "+ song) : console.log("Song requires an argument") ;
}

song(1738);
song();

// Function Expressions
const myAddFunc = function (x,y){ 
    return x + y
}
console.log(myAddFunc(2,2));

// Higher Order Functions
function callnTimes(func,n) { 
    for(let i = 0; i < n ;i ++){ 
        func();
    }
}
callnTimes(song,3)

// Returing a function
function getFunc(){
    const i = Math.random();

    if(i > 0.5){ 
        return function() { 
            console.log("You got the FIRST function")
        }
    } else { 
        return function() { 
            console.log("You got the SECOND function");
        }
    }
}

// Get a fucntion and then execute it
const myf = getFunc();
myf();

// ANother way to call that new function 
getFunc()();

// Objects with methods 
const myPerson =  { 
    name : "Shrey",
    printName : function(name) { 
        console.log(`My name is ${name}`);
    },
    age : 17, 
    printAge(age){ 
        console.log(`My age is ${age}`);
    }
}

console.log("I am logging some thing to the console", myPerson.name); 
myPerson.printName(myPerson.name);
myPerson.printAge(myPerson.age)


// This keyword.
const myPerson2 = { 
    firstname : "Om" , 
    lastname : "Patel", 
    printname(){ 
        console.log(`${this.firstname} ${this.lastname}`.toUpperCase())
    }
}

myPerson2.printname();

// Try Catch block
try{ 
    doesntExist.method();
} catch { 
    console.log("There was an error in your code, that was caught with a try catch block.")
}

const myarr  = [1, 2 ,3 ,4 , 5]; 
const myDogs = [ 
    {
        name : "   Blue " ,
        breed : "German Sheppard"
    },
    {
        name : "Tommy   " ,
        breed : "Bulldog"
    },
    {
        name : "Maple   " ,
        breed : "Chihuha"
    }, 
    {
        name : "                 Steve   " ,
        breed : "Great Dane"
    }
];
// For each method
myarr.forEach(function(i) { 
    console.log(i);
}); 

myDogs.forEach(function(dog) { 
    console.log(`${dog.name.trim()} is a ${dog.breed}.`)
})


// map

// Rememeber
// const myarr  = [1, 2 ,3 ,4 , 5]; 
// const myDogs = [ 
//     {
//         name : "Blue" ,
//         breed : "German Sheppard"
//     },
//     {
//         name : "Tommy" ,
//         breed : "Bulldog"
//     }
// ];
// Make a squared array 
const myArrSquared = myarr.map(function(i){
    return i * i;
})

// print squared array
myArrSquared.forEach(function(i) { 
    console.log(i);
}); 

const myDogNames = myDogs.map(function(dog){ 
    return dog.name.toUpperCase().trim();
})

// print squared array
myDogNames.forEach(function(i) { 
    console.log(i);
}); 


// Arrow function syntax. 
const myAdd = (x , y) => { 
    return x + y;
}

console.log("--------")
const myDogNames2 = myDogs.map( (dog) => { 
    return dog.name.toLowerCase().trim();
})


// print squared array
myDogNames2.forEach(function(i) { 
    console.log(i);
}); 


const rollDie = () => { 
    const i = Math.floor(Math.random() * 100) + 1; 
    console.log(i.toString(), "is the value of the 100-sided die that you just rolled.");
}

callnTimes(rollDie,10)