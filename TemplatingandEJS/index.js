const express = require('express');


const app = express();
const path = require('path')

app.set('view engine', 'ejs');
// Set the path to the place where index.js is run from
app.set('views', path.join(__dirname, 'views') )

app.get('/', (req, res) => { 
    res.render('home')
})

app.listen(3000, () => { 
    console.log("Listening to port 3000")
})