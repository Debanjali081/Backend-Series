require('dotenv').config()

const express = require("express")
app = express()

// const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>My First Server Created</h1>`)
})

app.get('/me', (req, res) => {
    res.send(`<h1>I am diving into backend world with Chai Aur Code</h1>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);

})