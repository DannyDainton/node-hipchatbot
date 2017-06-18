const bodyParser = require('body-parser')
const express    = require('express')
const winston    = require('winston')

const app = express()
app.use(bodyParser.json()) 
app.use(express.static('public'))

app.post("/hipchatbot", (req, res) => {
  const message     = req.body.item.message.message
  const name        = req.body.item.message.from.name
  
  winston.info(`Message Sent: ${message}`)
  winston.info(`Sent By: ${name}`)
  
  res.json({ message: `${name} entered the following text: ${message}` })
})

const port = Number(process.env.PORT || 7000)
if(!module.parent) { 
  app.listen(port)
}
winston.info(`Server Started on port: ${port}`)

module.exports = app
