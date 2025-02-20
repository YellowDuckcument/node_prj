require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')


const app = express()
const port = process.env.PORT

app.use(express.static('public'))

app.use(expressLayout)
app.set('layout', './layout/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main.js'))


app.listen(port, console.log('Server is listening on port:'+ port))