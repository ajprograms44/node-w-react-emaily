//PRODUCTION KEYS

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
}

//Here we are specifying the keys we are using in our app as the environment variables 
//that we will create in Heroku