const express = require('express')
const app = express(); 
const port = 3000; 

// // This method runs evertime we get any kind of request no matter the route of our re. 
// app.use(() => { 
//     console.log("We Got a request to our server.")
// })

// We return res, if someone makes a req to the path '/' on localhost:port
app.get('/', (req, res) => { 
    res.send('This is the root route.')
})

// if someone request that route, then this is what we will send back 
app.get('/cats', (req, res) => { 
    res.send('You navigated to the /cat page.')
})

app.get('/api/:thing', (req, res) => { 
    const { i } = req.params;
    res.send(`The var value is ${i}`);
})

app.get('/search', (req, res) => { 
    const { query } = req.query;
    res.send(`You serached for ${query}`)
})

app.get('*', (req, res) => { 
    res.send("THIS RESOURCE DOES NOT EXIST!!")
})


app.post("/", (req, res) => { 
    res.send("I got your post request.")
})

// This ensures that our app listens for req's on the correct port.
app.listen(port, () => { 
    console.log("Listening on Port 3000!")
})
