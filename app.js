// Dependencies
const bodyParser = require('body-parser')
const express    = require('express')
const winston    = require('winston')

// Calling the Express module
const app = express()

// Using the JSON function of the body-parser module
app.use(bodyParser.json()) 

// The app can use the public folder to serve static files
app.use(express.static('public'))

// Route that Hipchat enters
app.post("/hipchatbot", (req, res) => {

  // Gets the message value from the Hipchat JSON webhook
  const message     = req.body.item.message.message
  const name        = req.body.item.from.name
  
  // Adding some low level logging so that you can see the requests in the console
  winston.info(`Message Sent: ${message}`)
  winston.info(`Sent By: ${name}`)
  
  // Message posted back to Hipchat
  res.json({ message: `${name} entered the following text: ${message}` })

})

// Giving the app a port number to listen on - use 3000 by default 
const port = Number(process.env.PORT || 3000)

// Starts the app
app.listen(port)
winston.info(`Server Started on port: ${port}`)
