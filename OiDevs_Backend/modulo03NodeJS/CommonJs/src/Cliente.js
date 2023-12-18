const stringOpsModule = require('../stringOps') 
const { getArea } = require('../Formas/Circulo')
const express = require('express') //


const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
