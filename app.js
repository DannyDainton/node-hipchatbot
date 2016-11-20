// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 

// Route that Hipchat enters
app.post("/hipchatbot", function(req, res) {

  // Gets the message value from the Hipchat JSON webhook
  var message = req.body.item.message.message;
  
  // Message posted back to Hipchat
  res.json({ message: "You entered the following text: "+ message });

});

var port = Number(process.env.PORT || 3000);
app.listen(port);
