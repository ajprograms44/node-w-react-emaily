///////INSTANTIATING THE EXPRESS APP
const express = require('express');
const mongoose = require('mongoose');

//Enable cookies and let passport know we need to use cookies
const cookieSession = require('cookie-session');
const passport = require('passport')


const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes')


mongoose.connect(keys.mongoURI,{useNewUrlParser: true});

const app = express();
//app is used to setup configuration that will listen for incoming requests
//that are being routed to the express side of the app from the node side
//and then route those requests to different route handlers



//Add in a statement that lets Express know we need to make use of cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//Let pass port know that it should make use of cookies in its authetication process
app.use(passport.initialize());
app.use(passport.session());


/////ROUTE HANDLERS
authRoutes(app);
//the require statement returns that function we exported and 
//we insert route as the only argument to wire up the handlers


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