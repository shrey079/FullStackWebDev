const colors = require("colors");
const cowsay = require("cowsay"); 
const joke = require("give-me-a-joke");

joke.getRandomDadJoke (function(joke) {
    console.log(cowsay.say({
        text : joke.rainbow,
        e : "oO",
        T : "U "
    }));
});

