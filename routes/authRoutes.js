const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))
  //  Whenever a user comes to the route specififed, we want them to
  //be taken into the google oAuth flow managed by passport
  //  'google' is the first argument to let passport know we're using the 
  //google strategy we created up above
  //  The second argument is an object:
  //    We pass in scope, which communicates to google what kind of access we want to 
  //have in the user's profile
  
  app.get('/auth/google/callback', passport.authenticate('google'))

  app.get('/api/logout', (req, res) => {
    req.logout();
    //Takes the user id and kills the cookie
    res.send(req.user);
  })
  //passport attaches things to the response that's sent back, one of them is the
  // .logout function

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
  //Sends back the user information thats attached to the res object from passport
  //when someone goes through the oAuth flow aka logs into our app

};



//We wrap our route handlers in an arrow function labeled
//module.exports and set our app as the only argument to the function


