require('dotenv').config()
const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('Soy el cuyi')
})

app.listen(process.env.port)