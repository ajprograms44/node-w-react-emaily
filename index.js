///////INSTANTIATING THE EXPRESS APP
const express = require('express');
const app = express();
//app is used to setup configuration that will listen for incoming requests
//that are being routed to the express side of the app from the node side
//and then route those requests to different route handlers




//////ROUTE HANDLERS
app.get('/', (req,res) => {
  res.send({hi: 'there'});
});




//////DYNAMIC PORT BIDNING
const PORT = process.env.PORT || 5000
//Whenever Heroku runs our application it has the ability to inject
//environment variables. 
//Envrionment variables are set in the underlying runtime that node
//runs on top of.
//Heroku tells us which specific port to listen to, so we need to
//include dynamic port binding to our application

app.listen(PORT);
//Instructs express to tell node to listen to incoming traffic on
//port 5000