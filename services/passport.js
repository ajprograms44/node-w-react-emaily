const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

const User = mongoose.model('users')
//creating the User model instance

passport.serializeUser((user, done) => {
  done(null, user.id);
});
//The user is whoever we just pulled out of the database
//This function is going to take the model instance user being passed in
//and create a unique identifying piece of info for that user
//the second argument is the done argument

//done is a callback that we need to call after we've done some work
//first arg is an error object
//second arg is the identifying piece of info that will identify the user in follow
//up requests

//The user.id is the id created by MongoDB whenever a new model instance of user is created
//In order to create a cookie for each user, we'll be using this id, not the googleId

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});
//We take out the id that was serialized and put into a cookie in order to grab the
//User model instance with that specific id



passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
  (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
    .then((existingUser) => {
      if(existingUser){
        done(null,existingUser);
      } else {
        new User({ googleId: profile.id })
        .save()
        .then(user => done(null,user));
      }
    })
    //This User.findOne() function takes in an object of whatever unique
    //id we want to use to find unique users
    //We use an if then statement in order to check if an existingUser exists or not
  }
)
);
//passport uses the new GoogleStrategy strategy to autheticate users

//  Inside GoogleStrategy, we'll write configuration 
//options for the authetication as the first object
//  The second argument is a callback function that takes the 
//access token we are given and we can setup a function that saves the
//user info to our database



