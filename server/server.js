require('./config/config')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('Hello World')
})

app.post('/usuario', function (req, res) {
  const body = req.body;
  if(body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es requerido'
    })
  } else {
    res.json({
      body
    })
  }  
})

app.put('/usuario/:id', function (req, res) {
  // res.json('Put World', req.params.id)
  const id = req.params.id
  res.json({
    id
  })
})

app.delete('/usuario', function (req, res) {
  res.json('Delete World')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT)
})