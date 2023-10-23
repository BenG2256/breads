const express = require('express')

//config
require('dotenv').config()
const PORT = process.env.PORT || 3003
const app = express()
console.log(PORT)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controllers.js')
  app.use('/breads', breadsController)
  

//listen 
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})