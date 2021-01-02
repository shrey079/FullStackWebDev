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
        func('starboy');
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
        name : "Blue" ,
        breed : "German Sheppard"
    },
    {
        name : "Tommy" ,
        breed : "Bulldog"
    }
];

myarr.forEach(function(i) { 
    console.log(i * i);
}); 

myDogs.forEach(function(dog) { 
    console.log(`${dog.name} is a ${dog.breed}.`)
})

