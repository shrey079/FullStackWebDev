const express = require('express')
const app = express(); 
const port = 3000; 



// We return res, if someone makes a req to the path '/' on localhost:port
app.get('/', (req, res) => { 
    res.send('This is some text that I generated with the use of Express.')
})

app.use()

app.listen(port, () => { 
    console.log("Listening on Port 3000!")
})
