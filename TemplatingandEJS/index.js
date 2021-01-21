const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
// Set the path to the place where index.js is run from
app.set('views', path.join(__dirname, 'views') )

app.get('/', (req, res) => { 
    res.render('home')
})

app.get('/nums', (req, res) => { 
    const arr = [1 ,2 ,3 ,4] 
    res.render('nums', {arr})
})


app.get('/r/:page', (req, res) => {
    const {page} = req.params
    res.render('subreddit' , { page })
})


app.get('/random', (req, res) => { 
    const num = Math.floor(Math.random() * 10) + 1; 
    // We can pass in stuff to our template from the js file
    res.render('random', { num });
})


app.listen(3000, () => { 
    console.log("Listening to port 3000")
})