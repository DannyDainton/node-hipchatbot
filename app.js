// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

// Using the JSON function of the body-parser module
app.use(bodyParser.json()); 

// The app can use the public folder to serve static files
app.use(express.static('public'));

// Route that Hipchat enters
app.post("/hipchatbot", function(req, res) {

  // Gets the message value from the Hipchat JSON webhook
  var message = req.body.item.message.message;
  console.log(message);
  
  // Message posted back to Hipchat
  res.json({ message: "You entered the following text: "+ message });

});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
